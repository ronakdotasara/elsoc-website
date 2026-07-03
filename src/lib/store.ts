"use client";

import { create } from "zustand";

/**
 * Lightweight global UI state (Zustand). Server data lives in TanStack Query;
 * theme lives in next-themes. Only cross-component UI flags belong here.
 */
interface UiState {
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  chatOpen: false,
  setChatOpen: (chatOpen) =>
    set((s) => ({ chatOpen, mobileNavOpen: chatOpen ? false : s.mobileNavOpen })),
  mobileNavOpen: false,
  setMobileNavOpen: (mobileNavOpen) =>
    set((s) => ({ mobileNavOpen, chatOpen: mobileNavOpen ? false : s.chatOpen })),
}));
