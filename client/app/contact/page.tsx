/**
 * Contact Page
 * ------------
 * Displays contact information (email, phone, address)
 * and a simple frontend-only contact form.
 * No backend logic — just a form that shows a success message.
 */

"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  /* Simple state for form fields */
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  /* Handle form submission (frontend only, no backend) */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In a real app you would send this data to a backend API.
    // For now, we just show a success message.
    setSubmitted(true)
  }

  return (
    <main>
      {/* ========== PAGE HEADER ========== */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg opacity-80">
            We would love to hear from you. Reach out anytime.
          </p>
        </div>
      </section>

      {/* ========== CONTACT DETAILS + FORM ========== */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          {/* ---- Left Column: Contact Information ---- */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Get In Touch
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Whether you have a question about our work, want to partner
              with us, or simply want to say hello, don&apos;t hesitate to
              reach out.
            </p>

            {/* Contact details list */}
            <div className="mt-8 flex flex-col gap-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Email
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    hopeschoolofmusic@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Phone
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    (555) 123-4567
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Address
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Vijayawada, Andhra Pradesh
                    <br />
                    India, 520015
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---- Right Column: Contact Form ---- */}
          <div className="rounded-lg border border-border bg-card p-8">
            {submitted ? (
              /* Success message shown after form submission */
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
                  <Mail className="h-8 w-8 text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-card-foreground">
                  Message Sent!
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Thank you for reaching out. We will get back to you as
                  soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setName("")
                    setEmail("")
                    setMessage("")
                  }}
                  className="mt-6 text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Contact form */
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h2 className="font-serif text-2xl font-bold text-card-foreground">
                  Send Us a Message
                </h2>

                {/* Name field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    className="resize-none rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
