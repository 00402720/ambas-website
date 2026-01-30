"use client";

import { useState } from "react";
import DonationsButton from "@/app/components/buttons/donations-button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-[#18FFF5] to-[#00B9B1] p-2 lg:px-8 lg:py-4 w-full">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      {/* ======================
          TOP BAR
      ====================== */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img
            src="/ambas-logo.png"
            alt="Logo"
            className="w-24 lg:w-32"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex w-full max-w-md justify-around text-white font-bold text-xl">
          <a href="/nosotros">Nosotros</a>
          <a href="/actividades">Actividades</a>
          <a href="/patrocinadores">Patrocinio</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <DonationsButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Hamburger / Close */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* ======================
          MOBILE MENU
      ====================== */}
      {menuOpen && (
        <nav className="lg:hidden flex flex-col items-center gap-4 text-white font-bold 
        text-lg fixed z-50 bg-gradient-to-b from-[#18FFF5] to-[#00B9B1] w-screen 
        left-0 top-15">
          <a href="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
          <a href="/actividades" onClick={() => setMenuOpen(false)}>Actividades</a>
          <a href="/patrocinadores" onClick={() => setMenuOpen(false)}>Patrocinio</a>
        </nav>
      )}
    </header>
  );
}
