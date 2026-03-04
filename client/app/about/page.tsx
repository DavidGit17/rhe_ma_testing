/**
 * About Page
 * ----------
 * Tells visitors who Word & Light Ministries is,
 * our background, vision, and core values.
 */

import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, Users, BookOpen } from "lucide-react";

/* -- Core values data --------------------------------------- */
const values = [
  {
    title: "Accuracy",
    description:
      "We remain committed to the original source texts, ensuring every translation is accurate, clear, and trustworthy.",
    icon: BookOpen,
  },
  {
    title: "Accessibility",
    description:
      "We believe every person deserves access to information and educational materials, regardless of language, ability, or location.",
    icon: Eye,
  },
  {
    title: "Community",
    description:
      "We work alongside local communities, educators, and partners to bring important resources to those who need them most.",
    icon: Users,
  },
  {
    title: "Inclusion",
    description:
      "People are at the heart of everything we do. Every project is designed with inclusion and equal access in mind.",
    icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ========== PAGE HEADER ========== */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg opacity-80">
            Who we are and what drives our work in language accessibility.
          </p>
        </div>
      </section>

      {/* ========== WHO WE ARE ========== */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          {/* Text content */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Who We Are
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              HopeTransTech was founded with a simple mission: to make important
              texts and educational materials accessible to people everywhere.
              Our team of translators, educators, audio engineers, and sign
              language interpreters works together to promote language access
              and inclusive communication.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              For over two decades, we have helped communities around the world
              receive translated texts and learning resources in their own
              languages. Our work includes printed translations, published
              books, professional audio recordings, and American Sign Language
              communication support.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We also provide music learning and recording opportunities for
              local individuals and communities. We teach music, guide people in
              developing their singing and performance skills, and help them
              record and present their songs with confidence. Through this
              process, we support people in expressing their creativity and
              sharing their voices with others.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Through these efforts, we strive to remove communication barriers
              so that language, accessibility needs, or geography never prevent
              people from accessing meaningful knowledge.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src="/images/about.png"
              alt="An ASL instructor leading a sign language class with a diverse group of adult learners around a table"
              width={1366}
              height={768}
              priority
              className="h-auto w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* ========== VISION & VALUES ========== */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Our Vision & Values
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We envision a world where every person can read, hear, or see
              important texts and educational materials in a way they can
              understand. These values guide every decision we make.
            </p>
          </div>

          {/* Values grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                    <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Want to Know More?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Learn about the specific goals driving our organization forward.
          </p>
          <Link
            href="/mission"
            className="mt-8 inline-block rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            See Our Mission
          </Link>
        </div>
      </section>
    </main>
  );
}
