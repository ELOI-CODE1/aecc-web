import Link from "next/link";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <SiteNav />

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
            <div className="w-full border border-outline-variant bg-surface/95 p-lg backdrop-blur-sm">
              <h1 className="mb-md text-display-lg text-primary">
                Designing Solutions,
                <br />
                Building Futures.
              </h1>
              <p className="mb-lg w-full whitespace-normal break-words text-body-lg text-on-surface-variant">
                Precision engineering and visionary architecture for high-stakes development in the Kigali AEC market. We bring structural integrity to modern design.
              </p>
              <div className="flex flex-wrap gap-md">
                <Link href="/workflow" className="inline-block rounded bg-primary-container px-lg py-sm text-label-md uppercase tracking-wider text-on-primary shadow-sm shadow-primary/10 transition-colors hover:bg-primary hover:shadow-md">
                  Explore Projects
                </Link>
                <Link href="/contact" className="inline-block rounded border border-primary bg-surface px-lg py-sm text-label-md uppercase tracking-wider text-primary transition-colors hover:bg-surface-container-low">
                  Request Consultation
                </Link>
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

      <SiteFooter />
    </div>
  );
}
