import Link from "next/link";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <SiteNav />

      <main className="flex-grow">
        <section className="relative flex min-h-[720px] w-full items-end overflow-hidden border-b border-outline-variant">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85')",
            }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-primary/55 to-primary/5" />
          <div className="relative z-20 mx-auto w-full max-w-container-max px-md pb-xl pt-[220px]">
            <div className="max-w-4xl">
              <p className="mb-md text-label-md uppercase tracking-[0.18em] text-secondary-container">Architecture / Engineering / Rwanda</p>
              <h1 className="mb-md max-w-3xl text-display-lg text-on-primary">
                Places with purpose.
                <br />
                Built to endure.
              </h1>
              <p className="mb-lg max-w-2xl text-body-lg text-on-primary-fixed opacity-90">
                AAEC brings architectural clarity and engineering discipline to the buildings shaping Kigali and East Africa.
              </p>
              <div className="flex flex-wrap gap-md">
                <Link href="/contact" className="inline-block rounded bg-secondary-container px-lg py-sm text-label-md uppercase tracking-wider text-on-secondary-container transition-colors hover:bg-secondary hover:text-on-secondary">
                  Start a conversation
                </Link>
                <Link href="/workflow" className="inline-flex items-center gap-xs rounded border border-on-primary/60 px-lg py-sm text-label-md uppercase tracking-wider text-on-primary transition-colors hover:border-on-primary hover:bg-on-primary/10">
                  How we work <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-outline-variant bg-primary py-md text-on-primary">
          <div className="mx-auto grid max-w-container-max grid-cols-2 gap-md px-md md:grid-cols-4">
            {[['12+', 'Years in practice'], ['120+', 'Projects delivered'], ['04', 'Core disciplines'], ['01', 'Regional perspective']].map(([value, label]) => (
              <div key={label} className="border-l border-on-primary/20 pl-md">
                <div className="text-headline-md text-secondary-container">{value}</div>
                <div className="text-caption uppercase tracking-wider text-on-primary-fixed-variant">{label}</div>
              </div>
            ))}
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
                  Founded on exactitude and innovation, AAEC provides architectural and engineering solutions that are deeply responsive to place. We bring the rigor of structural calculation into dialogue with the realities of construction, climate, and everyday life.
                </p>
                <Link href="/about" className="inline-flex items-center gap-xs text-label-md uppercase tracking-wider text-secondary hover:text-primary">Meet the practice <span aria-hidden="true">-&gt;</span></Link>
              </div>
              <div className="relative min-h-[420px] overflow-hidden border border-outline-variant bg-surface p-base">
                <img
                  className="h-full w-full object-cover grayscale-[20%] contrast-125"
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                  alt="Sunlit contemporary office interior with timber details"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-outline-variant bg-surface-container-low py-xl">
          <div className="mx-auto max-w-container-max px-md">
            <div className="mb-lg flex flex-col justify-between gap-md md:flex-row md:items-end">
              <div>
                <p className="mb-sm text-label-md uppercase tracking-wider text-secondary">Selected work</p>
                <h2 className="text-headline-md text-primary">The details make the difference.</h2>
              </div>
              <Link href="/services" className="text-label-md uppercase tracking-wider text-secondary hover:text-primary">Explore capabilities -&gt;</Link>
            </div>
            <div className="grid gap-md md:grid-cols-[1.2fr_0.8fr]">
              <div className="group relative min-h-[420px] overflow-hidden bg-primary">
                <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Contemporary building exterior under construction" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" />
                <div className="absolute bottom-md left-md text-on-primary"><p className="text-caption uppercase tracking-wider text-secondary-container">Construction supervision</p><h3 className="mt-xs text-headline-sm">Making the idea real</h3></div>
              </div>
              <div className="grid gap-md sm:grid-cols-2 md:grid-cols-1">
                <div className="group relative min-h-[202px] overflow-hidden bg-primary"><img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=85" alt="Modern concrete architecture against a clear sky" /><div className="absolute inset-0 bg-primary/25" /><p className="absolute bottom-md left-md text-label-md uppercase tracking-wider text-on-primary">Design that belongs</p></div>
                <div className="flex min-h-[202px] flex-col justify-between bg-secondary-container p-md text-on-secondary-container"><span className="material-symbols-outlined text-3xl">north_east</span><div><p className="text-caption uppercase tracking-wider">Start with your site</p><Link href="/contact" className="mt-xs block text-headline-sm hover:underline">Let&apos;s discuss your project</Link></div></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
