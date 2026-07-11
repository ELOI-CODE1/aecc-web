export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-surface text-on-surface antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-30 blueprint-grid" />
      <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface">
        <div className="mx-auto flex max-w-container-max items-center justify-between px-md py-sm">
          <a className="text-display-lg font-bold text-primary transition-transform active:scale-95" href="/">
            AAEC Ltd
          </a>
          <nav className="hidden items-center gap-lg md:flex">
            <a className="text-label-md uppercase tracking-wider text-on-surface transition-colors hover:text-secondary" href="/">
              Home
            </a>
            <a className="text-label-md uppercase tracking-wider text-on-surface transition-colors hover:text-secondary" href="/about">
              About
            </a>
            <a className="text-label-md uppercase tracking-wider text-on-surface transition-colors hover:text-secondary" href="/workflow">
              Projects/Workflow
            </a>
            <a className="border-b-2 border-secondary pb-1 text-label-md uppercase tracking-wider text-secondary" href="/contact">
              Contact
            </a>
          </nav>
          <button className="hidden rounded bg-primary-container px-md py-sm text-label-md uppercase tracking-wider text-on-primary transition-transform active:scale-95 md:block">
            Get a Quote
          </button>
        </div>
      </header>

      <main className="relative z-10 flex-grow">
        <section className="mx-auto max-w-container-max px-gutter pb-lg pt-xl">
          <div className="relative">
            <div className="absolute bottom-0 right-0 h-8 w-8 border-r border-t border-outline-variant" />
            <h1 className="mb-sm text-display-lg text-primary">Initiate Protocol.</h1>
            <p className="max-w-2xl text-body-lg text-on-surface-variant">
              Engage our engineering and architectural teams. Submit project parameters or general inquiries below to establish contact with our Kigali headquarters.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-container-max gap-xl px-gutter py-xl md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="relative border border-outline-variant bg-surface-container-lowest p-lg">
              <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-outline-variant" />
              <h2 className="mb-md text-headline-sm text-primary">Transmission Form</h2>
              <form className="space-y-md">
                <div className="grid gap-md sm:grid-cols-2">
                  <div className="flex flex-col gap-xs">
                    <label className="text-caption font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="firstName">First Name</label>
                    <input id="firstName" className="w-full rounded-none border border-outline-variant bg-transparent p-sm text-body-md text-on-surface outline-none transition-colors focus:border-secondary-container focus:ring-1 focus:ring-secondary-container" placeholder="John" />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="text-caption font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="lastName">Last Name</label>
                    <input id="lastName" className="w-full rounded-none border border-outline-variant bg-transparent p-sm text-body-md text-on-surface outline-none transition-colors focus:border-secondary-container focus:ring-1 focus:ring-secondary-container" placeholder="Doe" />
                  </div>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="text-caption font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="email">Corporate Email</label>
                  <input id="email" type="email" className="w-full rounded-none border border-outline-variant bg-transparent p-sm text-body-md text-on-surface outline-none transition-colors focus:border-secondary-container focus:ring-1 focus:ring-secondary-container" placeholder="john.doe@company.com" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="text-caption font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="subject">Project Phase / Subject</label>
                  <select id="subject" className="w-full rounded-none border border-outline-variant bg-transparent p-sm text-body-md text-on-surface outline-none transition-colors focus:border-secondary-container focus:ring-1 focus:ring-secondary-container">
                    <option>Initial Consultation</option>
                    <option>Structural Engineering Audit</option>
                    <option>Architectural Drafting</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="text-caption font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="message">Project Specifications</label>
                  <textarea id="message" rows={5} className="w-full resize-y rounded-none border border-outline-variant bg-transparent p-sm text-body-md text-on-surface outline-none transition-colors focus:border-secondary-container focus:ring-1 focus:ring-secondary-container" placeholder="Detail your project requirements or questions here..." />
                </div>
                <div className="pt-sm">
                  <button type="button" className="inline-flex items-center gap-xs rounded bg-primary-container px-lg py-sm text-label-md uppercase tracking-wider text-on-primary transition-colors hover:bg-tertiary-container active:scale-95">
                    Submit Specifications
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-lg md:col-span-5">
            <div className="border border-outline-variant bg-surface-container-low p-md">
              <h3 className="mb-md flex items-center gap-sm text-headline-sm text-primary">
                <span className="material-symbols-outlined text-secondary">location_city</span>
                Headquarters Data
              </h3>
              <ul className="space-y-sm text-body-md text-on-surface">
                <li className="flex w-full items-baseline">
                  <span className="font-bold">Location</span>
                  <div className="dotted-leader" />
                  <span className="text-right">Kigali, Rwanda</span>
                </li>
                <li className="flex w-full items-baseline">
                  <span className="font-bold">Sector</span>
                  <div className="dotted-leader" />
                  <span className="text-right">Gasabo</span>
                </li>
                <li className="flex w-full items-baseline">
                  <span className="font-bold">Comm Channel</span>
                  <div className="dotted-leader" />
                  <span className="text-right">+250 788 000 000</span>
                </li>
                <li className="flex w-full items-baseline">
                  <span className="font-bold">Data Link</span>
                  <div className="dotted-leader" />
                  <span className="text-right">contact@aaec.ltd</span>
                </li>
              </ul>
            </div>

            <div className="relative min-h-[300px] flex-grow overflow-hidden border border-outline-variant group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBT0YCJ2HzkXfObKYKDxXQlcpiCezm8NoiS6SpO_npQOdutoF_RfBmOgZxqhMxtW0AICLwzCC99-1rcTGGbEcBZQ9IuUKk9WPV0RMD_VQDZ_lynGzM5cFHJ-y34c26gkAHRfcWFeU-oxV4GY-YUHbpB0MX03TR6NHz8yKamskcBRWITFmhF0nu1ENQkU-xcopUC_QLnEZQ1Pa0TuPNPeMPITteQQKwOSOOF-7pl3F_p8wP_knBU3hzu0cVA26SVazZezFYu2krR6Jk4')",
                }}
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              <div className="absolute bottom-sm right-sm border border-outline-variant bg-surface/90 px-sm py-xs text-caption font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
                Grid Ref: -1.9441, 30.0619
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-outline-variant bg-surface-container-highest">
          <div className="absolute inset-0 flex justify-around opacity-20 pointer-events-none">
            <div className="h-full w-px bg-outline" />
            <div className="h-full w-px bg-outline" />
            <div className="h-full w-px bg-outline" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-container-max flex-col items-center justify-between gap-md px-gutter py-xl md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-xs text-headline-md text-primary">Ready for Structural Assessment?</h2>
              <p className="text-body-md text-on-surface-variant">Deploy our engineering consultants to analyze your site parameters.</p>
            </div>
            <button className="rounded bg-secondary-container px-lg py-md text-label-md uppercase tracking-wider text-on-secondary-container shadow-sm transition-colors duration-300 hover:bg-secondary hover:text-on-secondary active:scale-95">
              Request Consultation
            </button>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mt-xl w-full border-t border-outline-variant/10 bg-primary text-on-primary">
        <div className="mx-auto grid max-w-container-max gap-md px-md py-xl md:grid-cols-4">
          <div className="flex flex-col justify-between md:col-span-1">
            <span className="text-headline-sm font-bold text-on-primary">AAEC Ltd</span>
            <p className="mt-md text-body-md text-on-primary-fixed-variant opacity-80">
              © 2024 AAEC Ltd. All rights reserved. Precision in Architecture & Engineering.
            </p>
          </div>
          <div className="flex flex-wrap justify-end gap-md md:col-span-3 md:gap-lg">
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
