"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects/Workflow", href: "/workflow" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface">
      <div className="mx-auto flex max-w-container-max items-center justify-between px-md py-sm">
        <Link
          href="/"
          className="text-display-lg font-bold text-primary transition-transform active:scale-95"
        >
          AAEC Ltd
        </Link>

        <nav className="hidden items-center gap-lg md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(item.href)
                  ? "border-b-2 border-secondary pb-1 text-label-md uppercase tracking-wider text-secondary transition-colors duration-200"
                  : "text-label-md uppercase tracking-wider text-on-surface transition-colors duration-200 hover:text-secondary"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-block rounded bg-primary-container px-lg py-sm text-label-md uppercase tracking-wider text-on-primary transition-colors duration-200 hover:bg-primary active:scale-95"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="p-xs text-primary transition-transform active:scale-95 md:hidden"
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-outline-variant bg-surface md:hidden">
          <div className="mx-auto flex max-w-container-max flex-col px-md py-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  isActive(item.href)
                    ? "border-l-2 border-secondary py-sm pl-sm text-label-md uppercase tracking-wider text-secondary"
                    : "border-l-2 border-transparent py-sm pl-sm text-label-md uppercase tracking-wider text-on-surface transition-colors hover:text-secondary"
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-sm inline-block rounded bg-primary-container px-lg py-sm text-center text-label-md uppercase tracking-wider text-on-primary transition-colors hover:bg-primary"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
