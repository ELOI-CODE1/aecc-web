import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-xl w-full border-t border-outline-variant/10 bg-primary text-on-primary">
      <div className="mx-auto flex w-full max-w-container-max flex-col gap-lg px-md py-xl md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="font-montserrat text-headline-sm font-bold text-on-primary">AAEC Ltd</div>
          <p className="mt-sm text-body-md text-on-primary-fixed-variant">Architecture and engineering for a changing East Africa.</p>
        </div>
        <div className="flex flex-col justify-between md:col-span-2">
          <div className="text-caption uppercase tracking-wider text-on-primary-fixed-variant opacity-80">
            © 2026 All rights reserved.
          </div>
        </div>

        <div className="flex flex-col gap-sm md:flex-row md:items-center md:gap-xl">
          <div className="flex flex-col gap-sm">
            <span className="mb-sm inline-block w-max border-b border-on-primary/20 pb-xs text-label-md text-on-primary">
              Company
            </span>
            <Link href="/about" className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary">
              About Us
            </Link>
            <Link href="/services" className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary">
              Services
            </Link>
            <Link href="/workflow" className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary">
              Workflow
            </Link>
          </div>

          <div className="flex flex-col gap-sm">
            <span className="mb-sm inline-block w-max border-b border-on-primary/20 pb-xs text-label-md text-on-primary">
              Contact
            </span>
            <span className="text-body-md text-on-primary-fixed-variant">
              Kigali, Rwanda
            </span>
            <a href="tel:+250788000000" className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary">
              +250 788 000 000
            </a>
            <a href="mailto:contact@aaec.ltd" className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary">
              contact@aaec.ltd
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
