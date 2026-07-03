import type { GalleryAlbumRecord } from "./types";

const emmaImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14].map((i, idx) => ({
  url: `/img/gallery/emma-workshop/emma-workshop-${String(i).padStart(2, "0")}.jpeg`,
  alt: `AI-emma Workshop — moment ${idx + 1}`,
  sortOrder: idx,
}));

export const galleryAlbums: GalleryAlbumRecord[] = [
  {
    slug: "ai-emma-workshop",
    title: "AI-emma Workshop",
    year: "2025",
    sortOrder: 0,
    images: emmaImages,
  },
];
