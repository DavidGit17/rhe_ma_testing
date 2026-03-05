/**
 * Mission Page
 * ------------
 * Describes the ministry's mission statement, goals,
 * and community impact in detail.
 */

import Image from "next/image";
import Link from "next/link";
import { Target, Globe, Ear, Hand, CheckCircle } from "lucide-react";

/* -- Organization goals ------------------------------------- */
const goals = [
  {
    title: "Translate Key Texts into 50+ New Languages",
    description:
      "We aim to complete full text translations for 50 additional language groups that currently have no access to important educational and informational materials in their mother tongue.",
    icon: Globe,
  },
  {
    title: "Produce Audio Recordings for Every Translation",
    description:
      "For every translation completed, we produce professional audio recordings so communities with oral traditions and visually impaired individuals can access the content by listening.",
    icon: Ear,
  },
  {
    title: "Expand ASL Communication Resources",
    description:
      "We are building a comprehensive library of American Sign Language videos to serve the Deaf and hard of hearing community with clear, expressive communication support.",
    icon: Hand,
  },
  {
    title: "Equip Local Translators Worldwide",
    description:
      "We train and mentor local translators in communities around the world so the work can continue and grow long after our teams depart.",
    icon: Target,
  },
];

/* -- Community impact stats --------------------------------- */
const impactStats = [
  { label: "Languages Translated", value: "34" },
  { label: "Audio Recordings Produced", value: "28" },
  { label: "Countries Reached", value: "19" },
  { label: "People Impacted", value: "500K+" },
];

export default function MissionPage() {
  return (
    <main>
      {/* ========== PAGE HEADER ========== */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Our Mission
          </h1>
          <p className="mt-4 text-lg opacity-80">
            Driven by purpose. Guided by people. Measured by access created.
          </p>
        </div>
      </section>

      {/* ========== MISSION STATEMENT ========== */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/mission.jpg"
              alt="A community gathering in a rural village"
              fill
              className="object-cover"
            />
          </div>

          {/* Text content */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Mission Statement
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Our mission is to ensure that every person on earth has the
              opportunity to access important texts and educational materials in
              a language and format they can understand. We do this through
              careful translation, audio production, book publishing, and sign
              language communication support.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We believe that access to information and education is not a
              privilege but a right. Language, disability, and geography should
              never be barriers to accessing the knowledge and resources people
              need.
            </p>
          </div>
        </div>
      </section>

      {/* ========== GOALS ========== */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Our Goals
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              These are the milestones we are working toward as we expand our
              reach and deepen our impact.
            </p>
          </div>

          {/* Goals grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {goals.map((goal) => {
              const Icon = goal.icon;
              return (
                <div
                  key={goal.title}
                  className="flex gap-5 rounded-lg border border-border bg-card p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-card-foreground">
                      {goal.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {goal.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== COMMUNITY IMPACT ========== */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Community Impact
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Our work has reached communities around the globe. Here is a
              snapshot of the access we have helped create so far.
            </p>
          </div>

          {/* Impact stats */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center"
              >
                <CheckCircle
                  className="h-6 w-6 text-accent"
                  aria-hidden="true"
                />
                <span className="mt-4 font-serif text-3xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
