import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Services - AAEC Ltd",
  description:
    "Precision-engineered architectural and structural services from AAEC Ltd: architectural design, structural engineering, urban planning, and project management for the Kigali market and beyond.",
};

const services = [
  {
    icon: "architecture",
    title: "Architectural Design",
    description:
      "Concept to completion structural blueprints, emphasizing modern aesthetics and sustainable Rwandan materials.",
    items: [
      ["Phase 1", "Conceptual"],
      ["Phase 2", "Schematic"],
      ["Phase 3", "Development"],
    ],
  },
  {
    icon: "engineering",
    title: "Structural Engineering",
    description:
      "Rigorous analysis and design ensuring structural integrity and longevity under demanding environmental conditions.",
    items: [
      ["Load", "Analysis"],
      ["Seismic", "Design"],
      ["Materials", "Specification"],
    ],
  },
  {
    icon: "domain",
    title: "Urban Planning",
    description:
      "Master planning and site development strategies for sustainable urban growth and community integration.",
    items: [
      ["Zoning", "Compliance"],
      ["Traffic", "Flow"],
      ["Green Space", "Integration"],
    ],
  },
  {
    icon: "construction",
    title: "Project Management",
    description:
      "End-to-end oversight ensuring projects are delivered on time, within budget, and to exact specifications.",
    items: [
      ["Scheduling", "Critical Path"],
      ["Budgeting", "Cost Control"],
      ["QA/QC", "Inspections"],
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface antialiased">
      <SiteNav />

      <main className="flex-grow">
        <section className="relative border-b border-outline-variant bg-surface-container-lowest pb-lg pt-xl">
          <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-40" />
          <div className="relative z-10 mx-auto max-w-container-max px-md">
            <div className="max-w-3xl">
              <h1 className="mb-md text-display-lg text-primary">Our Services</h1>
              <div className="arch-divider mb-md" />
              <p className="text-body-lg text-on-surface-variant">
                Precision-engineered solutions for the modern built environment. We deliver comprehensive architectural and structural services, tailored for the unique demands of the Kigali market and beyond.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-md py-xl">
          <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border border-outline-variant bg-surface-container-lowest p-md transition-all duration-300 hover:shadow-[0_4px_12px_rgba(26,43,60,0.08)]"
              >
                <span
                  className="mb-sm block text-4xl text-primary material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  {service.icon}
                </span>
                <h3 className="mb-xs text-headline-sm text-primary">{service.title}</h3>
                <div className="arch-divider my-sm opacity-50" />
                <p className="mb-md text-body-md text-on-surface-variant">{service.description}</p>
                <ul className="space-y-2 text-caption text-on-surface-variant">
                  {service.items.map(([label, value]) => (
                    <li key={label} className="flex">
                      <span className="font-bold">{label}</span>
                      <span className="tech-list-leader" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-outline-variant bg-surface-container-highest">
          <div className="pointer-events-none absolute inset-0 flex justify-around opacity-20">
            <div className="h-full w-px bg-outline" />
            <div className="h-full w-px bg-outline" />
            <div className="h-full w-px bg-outline" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-container-max flex-col items-center justify-between gap-md px-md py-xl md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-xs text-headline-md text-primary">Have a project in mind?</h2>
              <p className="text-body-md text-on-surface-variant">
                Engage our engineering and architectural teams to scope your next build.
              </p>
            </div>
            <a
              href="/contact"
              className="rounded bg-secondary-container px-lg py-md text-label-md uppercase tracking-wider text-on-secondary-container shadow-sm transition-colors duration-300 hover:bg-secondary hover:text-on-secondary active:scale-95"
            >
              Request Consultation
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
