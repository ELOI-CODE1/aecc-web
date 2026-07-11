import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-xl w-full border-t border-outline-variant/10 bg-primary text-on-primary">
      <div className="mx-auto grid max-w-container-max gap-md px-md py-xl md:grid-cols-4">
        <div className="flex flex-col justify-between md:col-span-2">
          <div>
            <Link href="/" className="mb-md inline-block text-headline-sm font-bold text-on-primary">
              AAEC Ltd
            </Link>
            <p className="mt-sm max-w-sm text-body-md text-on-primary-fixed-variant opacity-80">
              Precision in Architecture &amp; Engineering. Building the future of modern urban infrastructure.
            </p>
          </div>
          <div className="mt-xl text-body-md text-on-primary-fixed-variant opacity-80">
            © 2024 AAEC Ltd. All rights reserved.
          </div>
        </div>

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
            Our Workflow
          </Link>
        </div>

        <div className="flex flex-col gap-sm">
          <span className="mb-sm inline-block w-max border-b border-on-primary/20 pb-xs text-label-md text-on-primary">
            Locations
          </span>
          <Link href="/contact" className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary">
            Kigali Office
          </Link>
          <a className="text-body-md text-on-primary-fixed-variant underline transition-all hover:text-on-primary" href="#">
            Global Partners
          </a>
        </div>
      </div>
    </footer>
  );
}
