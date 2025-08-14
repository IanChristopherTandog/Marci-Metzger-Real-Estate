import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  const navItems = [
    { to: "getitsold", label: "Get It SOLD" },
    { to: "services", label: "Our Services" },
    { to: "gallery", label: "Gallery" },
    { to: "contact", label: "Contact" }
  ];

  // Close menu on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Close mobile menu if resizing above md breakpoint
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="home"
          smooth
          spy
          offset={-64}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=h:167,cg:true,m/qt=q:95"
            alt="Marci Metzger Homes"
            className="h-10 w-auto"
          />
          <span className="font-serif text-lg tracking-wide">Marci Metzger Homes</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              spy
              offset={-64}
              className="cursor-pointer hover:text-brand-700 transition duration-200 border-b-2 border-transparent active:border-brand-700"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:2069196886"
            className="flex items-center gap-2 bg-brand-700 text-white px-4 py-2 rounded-lg shadow hover:bg-brand-800 transition duration-200"
          >
            <Phone size={18} /> Call
          </a>
        </nav>

        {/* Mobile burger button */}
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open Menu"
          aria-expanded={mobileOpen}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile full-screen modal */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex flex-col min-h-screen animate-fadeSlideIn"
        >
          {/* Close button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Close Menu"
          >
            <X size={28} className="text-white" />
          </button>

          {/* Centered Nav */}
          <div className="flex flex-1 items-center justify-center">
            <nav className="flex flex-col gap-10 text-center">
              {navItems.map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  spy
                  offset={-64}
                  onClick={() => setMobileOpen(false)}
                  className="cursor-pointer text-white text-3xl font-medium tracking-wide hover:text-brand-400 transition"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:2069196886"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 text-white text-2xl tracking-wide hover:text-brand-400 transition"
              >
                <Phone size={20} /> Call
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
