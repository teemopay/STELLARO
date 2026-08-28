"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/", label: "Página principal" },
  { href: "/contact", label: "Contáctenos" },
  { href: "/Política de Privacidad.pdf", label: "Política de privacidad" },
  {
    href: "/TÉRMINOS Y CONDICIONES DE USO.pdf",
    label: "Términos y condiciones",
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full cursor-pointer px-[20px] transition-[background-color,backdrop-filter,box-shadow] duration-300 md:px-10 ${isScrolled ? "bg-white/40  backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="relative mx-auto flex h-24 w-full max-w-[1200px] items-center justify-between">
        <Logo />
        <button
          id="nav-icon2"
          className={`lg:hidden ${isMenuOpen ? "open" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`absolute right-0 top-full flex w-full flex-col gap-5 overflow-hidden rounded-b-2xl bg-white px-6 shadow-xl transition-[max-height,opacity,transform,padding] duration-300 ease-out lg:static lg:max-h-none lg:w-auto lg:flex-row lg:gap-[43px] lg:overflow-visible lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:transform-none ${isMenuOpen ? "max-h-96 py-6 opacity-100 translate-y-0" : "pointer-events-none max-h-0 py-0 opacity-0 -translate-y-2 lg:pointer-events-auto"}`}
        >
          {links.map((link) => (
            <Link
              className={`text-[17px] font-semibold transition-colors hover:text-[#0069AB] ${pathname === link.href ? "text-[#0069AB]" : "text-[#3D3D3D]"}`}
              key={link.label}
              href={link.href}
              target={link.href.endsWith(".pdf") ? "_blank" : undefined}
              rel={
                link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
