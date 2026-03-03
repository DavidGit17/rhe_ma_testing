/**
 * ServiceCard Component
 * ---------------------
 * A simple card that displays a service icon, title, and description.
 * Used on the Home page to preview the ministry's core services.
 */

import type { LucideIcon } from "lucide-react"

/* -- Props for the ServiceCard ------------------------------ */
interface ServiceCardProps {
  title: string
  description: string
  Icon: LucideIcon
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center transition-shadow hover:shadow-md">
      {/* Service icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
        <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
      </div>

      {/* Service title */}
      <h3 className="mt-5 font-serif text-lg font-bold text-card-foreground">
        {title}
      </h3>

      {/* Service description */}
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
