import type { Metadata } from "next";
import { getGalleryAlbums } from "@/lib/data";
import { PageHero } from "@/components/site/page-hero";
import { LightboxGallery } from "@/components/gallery/lightbox-gallery";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Moments captured from ELSOC's workshops, competitions & events.",
};

export const revalidate = 300;

export default async function GalleryPage() {
  const albums = await getGalleryAlbums();

  return (
    <>
      <PageHero
        eyebrow="Archive"
        title="Event Gallery"
        lede="Moments captured from our workshops, competitions & events."
      />

      <section className="container-site py-16">
        {albums.map((album) => (
          <div key={album.id} className="mb-20 last:mb-0">
            <div className="mb-8 flex items-center gap-3">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                {album.title}
              </h2>
              {album.year && <Badge variant="volt">{album.year}</Badge>}
              <span className="mono-label ml-auto hidden sm:block">
                {album.images.length} photos
              </span>
            </div>
            <LightboxGallery images={album.images} />
          </div>
        ))}
      </section>
    </>
  );
}
