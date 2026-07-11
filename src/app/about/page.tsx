export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface antialiased">
      <nav className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface">
        <div className="mx-auto flex max-w-container-max items-center justify-between px-md py-sm">
          <a className="text-display-lg font-bold text-primary transition-transform active:scale-95" href="/">
            AAEC Ltd
          </a>
          <div className="hidden items-center space-x-lg md:flex">
            <a className="text-label-md uppercase tracking-wider text-on-surface transition-colors duration-200 hover:text-secondary" href="/">
              Home
            </a>
            <a className="border-b-2 border-secondary pb-1 text-label-md uppercase tracking-wider text-secondary" href="/about">
              About
            </a>
            <a className="text-label-md uppercase tracking-wider text-on-surface transition-colors duration-200 hover:text-secondary" href="#">
              Services
            </a>
            <a className="text-label-md uppercase tracking-wider text-on-surface transition-colors duration-200 hover:text-secondary" href="#">
              Projects/Workflow
            </a>
            <a className="text-label-md uppercase tracking-wider text-on-surface transition-colors duration-200 hover:text-secondary" href="#">
              Contact
            </a>
          </div>
          <button className="hidden rounded bg-primary-container px-md py-sm text-label-md uppercase tracking-wider text-on-primary transition-transform active:scale-95 md:block">
            Get a Quote
          </button>
        </div>
      </nav>

      <main className="flex-grow">
        <section className="relative overflow-hidden border-b border-outline-variant pb-lg pt-xl">
          <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" />
          <div className="relative z-10 mx-auto grid max-w-container-max items-center gap-lg px-md md:grid-cols-2">
            <div>
              <h1 className="mb-md text-display-lg text-primary">Company Overview</h1>
              <div className="mb-md h-px w-16 bg-secondary tick-divider text-secondary" />
              <p className="mb-md max-w-2xl text-body-lg text-on-surface-variant">
                African Architecture & Engineering Consult (AAEC) Ltd is a highly specialized Rwandan firm established in May 2014. We provide comprehensive architectural, structural engineering, environmental, and project management services for high-stakes developments.
              </p>
              <p className="mb-lg max-w-2xl text-body-md text-on-surface-variant">
                Our structural minimalism approach ensures precision and integrity in every project, contributing significantly to the modern urban development and infrastructure of Rwanda and beyond.
              </p>
              <div className="flex gap-md">
                <div className="flex-1 border border-outline-variant bg-surface-container-lowest p-md">
                  <span className="mb-xs block text-display-lg text-primary">10+</span>
                  <span className="text-label-md uppercase tracking-wider text-on-surface-variant">Years Exp.</span>
                </div>
                <div className="flex-1 border border-outline-variant bg-surface-container-lowest p-md">
                  <span className="mb-xs block text-display-lg text-primary">KGL</span>
                  <span className="text-label-md uppercase tracking-wider text-on-surface-variant">HQ Location</span>
                </div>
              </div>
            </div>
            <div className="group relative hidden h-[500px] border border-outline-variant bg-surface-container-lowest p-2 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(26,43,60,0.08)] md:block">
              <img
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtW2tp-45x1xh6J6EI-iVX6K79_pyVOaciNSPAniBvtkuixqvPZwYANu4cNEgSv8RyO9WY70PGf6TJioseKk0bDH1QnVxmgqrHc3bB6khpH-UjLsPkLL7TEMSkGazE138EgAJdEBjLWIBPF4BMk6DaZ8n5UWOVfENF8lcyG4_fTZ6iTcAbvIeQjK0Fl4flfnf0YyKlqncNCzHe-ednZubZ91bk07WlTJW68TDkpB7JFYlJoortmMhlcDgh_JwTKdhTNbI6uReuW0XH"
                alt="Modern architectural rendering of AAEC office building"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-outline-variant bg-surface-container-low py-xl">
          <div className="mx-auto max-w-container-max px-md">
            <div className="grid gap-md md:grid-cols-2">
              <div className="group border border-outline-variant bg-surface-container-lowest p-lg transition-all duration-300 hover:shadow-[0_4px_24px_rgba(26,43,60,0.08)]">
                <div className="mb-md flex items-center gap-sm">
                  <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    visibility
                  </span>
                  <h2 className="text-headline-md text-primary">Our Vision</h2>
                </div>
                <div className="mb-md h-px w-full bg-outline-variant" />
                <p className="text-body-lg text-on-surface-variant">
                  To be the premier architectural and engineering consultancy in East Africa, recognized for our unwavering commitment to precision, sustainable design, and structural integrity.
                </p>
              </div>

              <div className="group border border-outline-variant bg-surface-container-lowest p-lg transition-all duration-300 hover:shadow-[0_4px_24px_rgba(26,43,60,0.08)]">
                <div className="mb-md flex items-center gap-sm">
                  <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    flag
                  </span>
                  <h2 className="text-headline-md text-primary">Our Mission</h2>
                </div>
                <div className="mb-md h-px w-full bg-outline-variant" />
                <p className="text-body-lg text-on-surface-variant">
                  To deliver meticulous, innovative, and robust AEC solutions that meet the highest international standards while deeply respecting the local environment and community needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-xl">
          <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-10" />
          <div className="relative z-10 mx-auto max-w-container-max px-md">
            <div className="mb-lg">
              <h2 className="mb-sm text-headline-md text-primary">Core Values</h2>
              <div className="mb-md h-px w-16 bg-primary tick-divider text-primary" />
              <p className="max-w-2xl text-body-md text-on-surface-variant">
                The fundamental principles that guide our engineering and design decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px border border-outline-variant bg-outline-variant md:grid-cols-3 lg:grid-cols-4">
              {[
                ["architecture", "Precision", "Meticulous attention to detail in every plan."],
                ["foundation", "Integrity", "Structural and ethical robustness."],
                ["eco", "Sustainability", "Environmentally conscious design."],
                ["lightbulb", "Innovation", "Forward-thinking engineering solutions."],
                ["group", "Collaboration", "Synergy across multidisciplinary teams."],
                ["verified", "Quality", "Exceeding international AEC standards."],
                ["safety_check", "Safety", "Zero-compromise approach to project safety."],
              ].map(([icon, title, desc]) => (
                <div key={title} className="relative flex flex-col items-start bg-surface-container-lowest p-md transition-all duration-300 hover:z-10 hover:shadow-[0_4px_24px_rgba(26,43,60,0.08)]">
                  <span className="mb-md text-2xl text-primary material-symbols-outlined">{icon}</span>
                  <h3 className="mb-xs text-label-md uppercase tracking-wider text-primary">{title}</h3>
                  <p className="mt-auto text-caption text-on-surface-variant">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-xl">
          <div className="mx-auto max-w-container-max px-md">
            <div className="relative flex flex-col gap-lg overflow-hidden border border-primary bg-primary-container p-lg text-on-primary md:flex-row md:items-center">
              <div className="pointer-events-none absolute right-0 top-0 opacity-10">
                <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  health_and_safety
                </span>
              </div>
              <div className="relative z-10 flex-1">
                <div className="mb-md flex items-center gap-sm">
                  <span className="material-symbols-outlined text-3xl text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                    shield
                  </span>
                  <h2 className="text-headline-sm text-on-primary">Health, Safety & Environment</h2>
                </div>
                <p className="mb-md text-body-md text-on-primary-container">
                  AAEC Ltd is fundamentally committed to protecting the health and safety of our employees, partners, and the public, while minimizing environmental impact. Our HSE management system is integrated into every phase of our workflow, acting as the foundation of our operational integrity.
                </p>
                <div className="mt-md space-y-sm text-caption text-on-primary-container">
                  <div className="technical-list-item">
                    <span>Zero Incident Target</span>
                    <div className="technical-list-leader border-on-primary-container" />
                    <span className="font-bold">Active</span>
                  </div>
                  <div className="technical-list-item">
                    <span>Environmental Compliance</span>
                    <div className="technical-list-leader border-on-primary-container" />
                    <span className="font-bold">REMA Standards</span>
                  </div>
                </div>
              </div>
              <div className="relative z-10 shrink-0">
                <button className="rounded bg-secondary-container px-lg py-sm text-label-md uppercase tracking-wider text-on-secondary-container transition-transform active:scale-95">
                  View HSE Policy
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-xl w-full border-t border-outline-variant/10 bg-primary text-on-primary">
        <div className="mx-auto grid max-w-container-max gap-md px-md py-xl md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="mb-md text-headline-sm font-bold text-on-primary">AAEC Ltd</h3>
            <p className="mb-sm text-body-md text-on-primary-fixed-variant opacity-80">
              © 2024 AAEC Ltd. All rights reserved. Precision in Architecture & Engineering.
            </p>
          </div>
          <div className="flex flex-wrap gap-md md:col-span-3 md:justify-end">
            <a className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary" href="#">Privacy Policy</a>
            <a className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary" href="#">Terms of Service</a>
            <a className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary" href="#">Cookie Policy</a>
            <a className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary" href="#">Kigali Office</a>
            <a className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary" href="#">Global Partners</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
