export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface">
        <div className="mx-auto flex max-w-container-max items-center justify-between px-md py-sm">
          <a className="text-display-lg font-bold text-primary transition-transform active:scale-95" href="#">
            AAEC Ltd
          </a>
          <nav className="hidden items-center gap-lg md:flex">
            <a className="relative inline-block text-label-md uppercase tracking-wider text-secondary" href="#">
              Home
            </a>
            <a className="relative inline-block text-label-md uppercase tracking-wider text-on-surface transition-colors duration-200 hover:text-secondary" href="#">
              About
            </a>
            <a className="relative inline-block text-label-md uppercase tracking-wider text-on-surface transition-colors duration-200 hover:text-secondary" href="#">
              Services
            </a>
            <a className="relative inline-block text-label-md uppercase tracking-wider text-on-surface transition-colors duration-200 hover:text-secondary" href="#">
              Projects/Workflow
            </a>
            <a className="relative inline-block text-label-md uppercase tracking-wider text-on-surface transition-colors duration-200 hover:text-secondary" href="#">
              Contact
            </a>
          </nav>
          <div className="hidden md:block">
            <button className="rounded bg-primary-container px-lg py-sm text-label-md uppercase tracking-wider text-on-primary transition-colors duration-200 hover:bg-primary active:scale-95">
              Get a Quote
            </button>
          </div>
          <button className="rounded p-xs text-primary transition-transform active:scale-95 md:hidden">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative flex min-h-[819px] w-full items-center border-b border-outline-variant">
          <div className="absolute inset-0 z-0 bg-surface-variant blueprint-grid" />
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDL8gfeeB0hcsiXKF1Vu5xqkSS9N42AupTraC_2bUWcwRrvdYsVJNBQP0m20msvdulv0SDD5zIwKyTinzcpj_AJoYOYQHwlBdpFURIsxHpBSSrqpnyvje1PFqTXfVPisuGxkov06gRv7LZ6_8O6Jp0JxcL16U9vPl7IpizJq-6PJPEk4rCip4txzqmf-vEbIfPv2NxDbnxAWkarqzrXEUaAGul_fZMc-6Y8jED_9pTlrCmnFtc_1oYeg0vCwzxwhf9WzdMtZSyLkZnn')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-surface/90 to-surface/20" />
          <div className="relative z-30 mx-auto w-full max-w-container-max px-md">
            <div className="max-w-2xl border border-outline-variant bg-surface/95 p-lg backdrop-blur-sm">
              <h1 className="mb-md text-display-lg text-primary">
                Designing Solutions,
                <br />
                Building Futures.
              </h1>
              <p className="mb-lg max-w-xl text-body-lg text-on-surface-variant">
                Precision engineering and visionary architecture for high-stakes development in the Kigali AEC market. We bring structural integrity to modern design.
              </p>
              <div className="flex flex-wrap gap-md">
                <button className="rounded bg-primary-container px-lg py-sm text-label-md uppercase tracking-wider text-on-primary shadow-sm shadow-primary/10 transition-colors hover:bg-primary hover:shadow-md">
                  Explore Projects
                </button>
                <button className="rounded border border-primary bg-surface px-lg py-sm text-label-md uppercase tracking-wider text-primary transition-colors hover:bg-surface-container-low">
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-b border-outline-variant bg-surface py-xl">
          <div className="absolute bottom-0 right-0 top-0 hidden w-1/3 border-l border-outline-variant bg-surface-variant/30 blueprint-grid lg:block" />
          <div className="relative z-10 mx-auto max-w-container-max px-md">
            <div className="grid items-center gap-xl lg:grid-cols-2">
              <div>
                <div className="mb-sm flex items-center gap-sm text-label-md uppercase tracking-wider text-secondary">
                  <div className="h-[1px] w-8 bg-secondary tick-divider" />
                  About AAEC Ltd
                </div>
                <h2 className="mb-md text-headline-md text-primary">
                  Structural Minimalism.
                  <br />
                  Uncompromising Quality.
                </h2>
                <p className="mb-lg text-body-lg text-on-surface-variant">
                  Founded on the principles of exactitude and innovation, AAEC Ltd provides comprehensive architectural and engineering solutions. Our approach merges the rigorous demands of structural calculation with the fluid necessities of contemporary urban design, ensuring every project is both a technical marvel and a functional space.
                </p>
                <div className="mt-lg grid grid-cols-2 gap-md border-t border-outline-variant pt-lg">
                  <div>
                    <div className="mb-xs text-display-lg text-primary">15+</div>
                    <div className="text-caption uppercase tracking-wider text-on-surface-variant">Years Experience</div>
                  </div>
                  <div>
                    <div className="mb-xs text-display-lg text-primary">120</div>
                    <div className="text-caption uppercase tracking-wider text-on-surface-variant">Projects Completed</div>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[400px] border border-outline-variant bg-surface p-base">
                <img
                  className="h-full w-full object-cover grayscale-[20%] contrast-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdEoh3EunbiyP9Wu2nlTrdDDRt4fjKcABlKsG44TCbdnOtpatln0yJan2BuR68dGo5vJP0TzDjxeWdvj0zBz14sSPyOPKSIoHZkIbp-eLLUr7t5JpFMTCcUK_QBMA4YM2VwV8rwusNhRJ1vWJodJyCSzGGqIHibNPXv7s6NvyJL-Ba-f761Zpfqo25i65MJGHoxuo8P3IPBPpgtfX9KGottsdw1eg864LEeBMy99KY6584T_UkzGBgc2F9G2zP9YrdpxxDnl3OS0xd"
                  alt="AAEC drafting and planning workspace"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-xl w-full border-t border-outline-variant/10 bg-primary text-on-primary">
        <div className="mx-auto grid max-w-container-max gap-md px-md py-xl md:grid-cols-4">
          <div className="flex flex-col justify-between md:col-span-2">
            <div>
              <a className="mb-md inline-block text-headline-sm font-bold text-on-primary" href="#">
                AAEC Ltd
              </a>
              <p className="mt-sm max-w-sm text-body-md text-on-primary-fixed-variant opacity-80">
                Precision in Architecture & Engineering. Building the future of modern urban infrastructure.
              </p>
            </div>
            <div className="mt-xl text-body-md text-on-primary-fixed-variant opacity-80">
              © 2024 AAEC Ltd. All rights reserved.
            </div>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="mb-sm inline-block w-max border-b border-on-primary/20 pb-xs text-label-md text-on-primary">Company</span>
            <a className="text-body-md font-bold text-secondary-fixed" href="#">
              Privacy Policy
            </a>
            <a className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary" href="#">
              Terms of Service
            </a>
            <a className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary" href="#">
              Cookie Policy
            </a>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="mb-sm inline-block w-max border-b border-on-primary/20 pb-xs text-label-md text-on-primary">Locations</span>
            <a className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary" href="#">
              Kigali Office
            </a>
            <a className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary" href="#">
              Global Partners
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
