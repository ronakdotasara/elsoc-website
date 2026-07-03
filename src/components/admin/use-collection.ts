"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

/**
 * TanStack Query hooks for the admin collections: list + create/update/delete
 * with optimistic UI and rollback on error (per the dashboard spec).
 */

export interface WithId {
  id: string;
  [key: string]: unknown;
}

async function api<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(body.error ?? `HTTP ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export function useCollection<T extends WithId>(endpoint: string) {
  const queryClient = useQueryClient();
  const key = [endpoint];

  const query = useQuery<T[]>({
    queryKey: key,
    queryFn: () => api<T[]>(endpoint),
  });

  const create = useMutation({
    mutationFn: (data: Partial<T>) =>
      api<T>(endpoint, { method: "POST", body: JSON.stringify(data) }),
    onSuccess: (row) => {
      queryClient.setQueryData<T[]>(key, (old) => [...(old ?? []), row]);
      toast.success("Created");
    },
    onError: (e) => toast.error(`Create failed: ${e.message}`),
  });

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<T> }) =>
      api<T>(`${endpoint}/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: key });
      const previous = queryClient.getQueryData<T[]>(key);
      queryClient.setQueryData<T[]>(key, (old) =>
        (old ?? []).map((row) => (row.id === id ? { ...row, ...data } : row)),
      );
      return { previous };
    },
    onError: (e, _vars, context) => {
      if (context?.previous) queryClient.setQueryData(key, context.previous);
      toast.error(`Update failed: ${e.message}`);
    },
    onSuccess: () => toast.success("Saved"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: key }),
  });

  const remove = useMutation({
    mutationFn: (id: string) => api<{ ok: true }>(`${endpoint}/${id}`, { method: "DELETE" }),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: key });
      const previous = queryClient.getQueryData<T[]>(key);
      queryClient.setQueryData<T[]>(key, (old) => (old ?? []).filter((r) => r.id !== id));
      return { previous };
    },
    onError: (e, _id, context) => {
      if (context?.previous) queryClient.setQueryData(key, context.previous);
      toast.error(`Delete failed: ${e.message}`);
    },
    onSuccess: () => toast.success("Deleted"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: key }),
  });

  const reorder = useMutation({
    mutationFn: (ids: string[]) =>
      api<{ ok: true }>(`${endpoint}/reorder`, {
        method: "POST",
        body: JSON.stringify({ ids }),
      }),
    onMutate: async (ids) => {
      await queryClient.cancelQueries({ queryKey: key });
      const previous = queryClient.getQueryData<T[]>(key);
      queryClient.setQueryData<T[]>(key, (old) => {
        const byId = new Map((old ?? []).map((r) => [r.id, r]));
        const inOrder = ids
          .map((id, i) => {
            const row = byId.get(id);
            return row ? ({ ...row, sortOrder: i } as T) : null;
          })
          .filter((r): r is T => r !== null);
        const rest = (old ?? []).filter((r) => !ids.includes(r.id));
        return [...inOrder, ...rest];
      });
      return { previous };
    },
    onError: (e, _ids, context) => {
      if (context?.previous) queryClient.setQueryData(key, context.previous);
      toast.error(`Reorder failed: ${e.message}`);
    },
    onSuccess: () => toast.success("Order saved"),
    onSettled: () => queryClient.invalidateQueries({ queryKey: key }),
  });

  return { query, create, update, remove, reorder };
}
