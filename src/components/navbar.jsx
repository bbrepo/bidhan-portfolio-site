import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Company", href: "#company" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex items-center justify-between py-4 relative">
      {/* Mobile: Centered name */}
      <div className="flex-1 flex justify-center md:justify-start">
        <div className="text-4xl font-bold md:text-6xl tracking-tight">
          Bidhan Biswas
        </div>
      </div>
      {/* Desktop: Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="relative text-xl font-medium transition-colors duration-300 hover:text-gray-600"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full hover:w-full" />
          </a>
        ))}
      </div>
      {/* Mobile: Menu button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 relative z-50 active:scale-95 transition-transform duration-200"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth={open ? "2.5" : "0.5"}
          strokeLinecap="round"
          className="transition-transform duration-500"
        >
          <line
            x1="4"
            y1="4"
            x2="20"
            y2="20"
            className={`transition-all duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />
          <line
            x1="20"
            y1="4"
            x2="4"
            y2="20"
            className={`transition-all duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />
          <rect
            y="4"
            width="24"
            height="2.5"
            rx="1"
            fill="currentColor"
            className={`transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <rect
            y="10.75"
            width="24"
            height="2.5"
            rx="1"
            fill="currentColor"
            className={`transition-all duration-300 ${
              open ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
          />
          <rect
            y="17.5"
            width="24"
            height="2.5"
            rx="1"
            fill="currentColor"
            className={`transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
        </svg>
      </button>

      {/* Mobile: Overlay backdrop */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          open ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile: Side drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 flex flex-col pt-20 px-6 transform transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium py-4 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:translate-x-2 active:scale-95"
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${idx * 50}ms` : "0ms",
                opacity: open ? 1 : 0.5,
                transform: open ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
