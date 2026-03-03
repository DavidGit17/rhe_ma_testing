/**
 * Home Page
 * ---------
 * The main landing page for Word & Light Ministries.
 * Contains: Hero section, brief introduction, service preview cards,
 * and a call-to-action section.
 */

import Image from "next/image"
import Link from "next/link"
import { BookOpen, Headphones, Languages, HandMetal } from "lucide-react"
import ServiceCard from "@/components/service-card"

/* -- List of services with icons and descriptions ----------- */
const services = [
  {
    title: "Bible Translations",
    description:
      "Translating the Scriptures into languages that have never had access to the Word of God.",
    icon: Languages,
  },
  {
    title: "Books",
    description:
      "Publishing faith-based books and study materials to deepen understanding of Scripture.",
    icon: BookOpen,
  },
  {
    title: "Audio Recordings",
    description:
      "Producing high-quality audio recordings of Scripture for those who prefer to listen.",
    icon: Headphones,
  },
  {
    title: "ASL Support",
    description:
      "Providing American Sign Language Bible resources for the Deaf and hard of hearing community.",
    icon: HandMetal,
  },
]

export default function HomePage() {
  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        {/* Background image with dark overlay */}
        <Image
          src="/images/hero.jpg"
          alt="Open Bible on a table with warm golden light"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />

        {/* Hero text content */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center text-primary-foreground">
          <h1 className="text-balance font-serif text-4xl font-bold leading-tight md:text-6xl">
            Bringing the Word to Every Heart
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed opacity-85 md:text-xl">
            Making the Bible accessible to every person, in every language,
            through every medium.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* ========== INTRODUCTION SECTION ========== */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Our Calling
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Word & Light Ministries is dedicated to breaking down barriers
              that prevent people from encountering God&apos;s Word. Through
              translation, publishing, audio production, and sign language
              interpretation, we work to ensure that no one is left without
              access to Scripture.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SERVICES PREVIEW CARDS ========== */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            What We Do
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />

          {/* Grid of 4 service cards */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== CALL TO ACTION SECTION ========== */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Join Our Mission
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Whether you want to support our translation work, volunteer your
            skills, or simply learn more about what we do, we would love to hear
            from you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
