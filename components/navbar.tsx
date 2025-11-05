"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const whatsappNumber = "5491234567890"
  const whatsappMessage = encodeURIComponent(
    "Hola! Me gustaría consultar sobre disponibilidad en Apart Paso - Las 3 Marías",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#cabanas", label: "Cabañas" },
    { href: "#galeria", label: "Galería" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden h-16 ${
        isScrolled ? "bg-white/98 backdrop-blur-md shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <a href="#inicio" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="overflow-hidden h-full flex items-center">
              <Image
                src="/apart/logo.png"
                alt="Apart Paso - Las 3 Marías"
                width={280}
                height={100}
                className="h-20 sm:h-24 md:h-28 w-auto object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#222222] hover:text-[#FDB913] font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#222222] font-semibold shadow-md hover:shadow-lg transition-all text-sm px-4 py-2">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Reservar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-[#222222]" /> : <Menu className="h-6 w-6 text-[#222222]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-3 border-t pt-3">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#222222] hover:text-[#FDB913] font-medium transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#222222] font-semibold w-full shadow-md text-sm px-4 py-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Reservar
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
