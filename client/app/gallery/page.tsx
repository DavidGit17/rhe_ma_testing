/**
 * Gallery Page
 * ------------
 * A responsive image grid showcasing the ministry's work.
 * Each image has a caption describing the scene.
 */

import Image from "next/image";

/* -- Gallery images array ----------------------------------- */
const galleryImages = [
  {
    src: "/images/gallery-bible.jpg",
    alt: "A person reading an open book at a desk with warm lighting",
    caption:
      "Independent Reading - Accessing translated texts and learning materials",
  },
  {
    src: "/images/gallery-translation.jpg",
    alt: "A translator working at a desk with manuscripts and a laptop",
    caption: "Translation Work - Bringing important texts to new languages",
  },
  {
    src: "/images/gallery-audio.jpg",
    alt: "A professional audio recording studio with a microphone and soundproofing panels",
    caption:
      "Audio Recording - Producing audio versions of educational materials for oral and visually impaired communities",
  },
  {
    src: "/images/gallery-asl.jpg",
    alt: "A person using American Sign Language in a community setting",
    caption:
      "ASL Communication - Making information accessible through sign language for the Deaf community",
  },
  {
    src: "/images/gallery-community.jpg",
    alt: "A diverse group of people gathered together for a community learning session",
    caption:
      "Community Engagement - Learning and growing together through shared resources",
  },
  {
    src: "/images/gallery-books.png",
    alt: "A display of books and educational publications arranged on a wooden shelf",
    caption:
      "Published Resources - Educational books and study materials for every reader",
  },
];

export default function GalleryPage() {
  return (
    <main>
      {/* ========== PAGE HEADER ========== */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">Gallery</h1>
          <p className="mt-4 text-lg opacity-80">
            A glimpse into our translation, accessibility, and community work
            around the world.
          </p>
        </div>
      </section>

      {/* ========== IMAGE GRID ========== */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className="group overflow-hidden rounded-lg border border-border bg-card"
              >
                {/* Image wrapper */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Caption */}
                <figcaption className="p-4 text-center text-sm leading-relaxed text-muted-foreground">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
