"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { Phone, Mail, Wifi, Wind, Car, Droplet, Flame, Waves, Users } from "lucide-react"

export default function ApartPasoLanding() {
  const [selectedRoom, setSelectedRoom] = useState<string>("habitacion1")

  const roomImages: Record<string, { image: string; title: string; description: string }> = {
    entrada: {
      image: "/apart/entrada.jpg",
      title: "Entrada",
      description: "Acceso privado con cochera para cada cabaña",
    },
    habitacion1: {
      image: "/apart/habitacion-1.jpg",
      title: "Habitación Matrimonial",
      description: "1 cama matrimonial con aire acondicionado",
    },
    habitacion2: {
      image: "/apart/habitacion-2.jpg",
      title: "Habitación Triple",
      description: "3 camas simples con aire acondicionado",
    },
    comedor: {
      image: "/apart/comedor.jpg",
      title: "Comedor",
      description: "Amplio, con posibilidad de agregar 1 cama extra",
    },
    cocina: {
      image: "/apart/cocina.jpg",
      title: "Cocina Completa",
      description: "Vajilla, horno, heladera y todos los utensilios",
    },
    bano: {
      image: "/apart/banio.jpg",
      title: "Baño",
      description: "Completo con agua caliente 24hs",
    },
    parrilla: {
      image: "/apart/parrilla.jpg",
      title: "Parrilla Privada",
      description: "Espacio exterior con parrilla para cada cabaña",
    },
    piscina: {
      image: "/apart/piscina.jpg",
      title: "Piscina",
      description: "2 piscinas compartidas en el complejo",
    },
  }

  const whatsappNumber = "5491234567890"
  const whatsappMessage = encodeURIComponent(
    "Hola! Me gustaría consultar sobre disponibilidad en Apart Paso - Las 3 Marías",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/apart/hero.jpg"
            alt="Apart Paso - Las 3 Marías"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-2xl">
            Apart Paso - Las 3 Marías
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 text-balance drop-shadow-lg max-w-3xl mx-auto">
            Complejo de 7 cabañas con gran parque y 2 piscinas compartidas. Tu refugio familiar en Paso de la Patria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#222222] font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Consultar Disponibilidad
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/40 backdrop-blur-md text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#cabanas">Ver Cabañas</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Cabin Section */}
      <section id="cabanas" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#222222] mb-6">Nuestras Cabañas</h2>
            <p className="text-xl text-[#222222]/70 max-w-3xl mx-auto text-balance leading-relaxed">
              Contamos con 7 cabañas familiares idénticas, completamente equipadas para que disfrutes al máximo tu
              estadía
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-[35%_65%] gap-8 items-start">
            {/* Left Sidebar - Sticky */}
            <div className="lg:sticky lg:top-24 space-y-6">
              <Card className="border-2 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-[#222222] mb-4">Cabaña Familiar</h3>
                  <p className="text-[#222222]/70 leading-relaxed mb-6">
                    Cada cabaña cuenta con entrada y parrilla privadas, cochera, cocina completa con vajilla, horno y
                    heladera, comedor amplio y 2 habitaciones con aire acondicionado.
                  </p>

                  {/* Capacity Badge */}
                  <div className="flex items-center gap-3 text-[#222222] bg-[#FDB913]/10 p-4 rounded-xl mb-8 border border-[#FDB913]/20">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Capacidad</p>
                      <p className="text-sm text-[#222222]/70">Hasta 5 personas</p>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div>
                    <h4 className="text-xl font-bold text-[#222222] mb-6">Servicios Incluidos</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#FDB913] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Wifi className="h-7 w-7 text-white" />
                        </div>
                        <p className="font-semibold text-[#222222] text-sm mb-1">Wi-Fi</p>
                        <p className="text-xs text-[#222222]/60">Alta velocidad</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#FDB913] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Wind className="h-7 w-7 text-white" />
                        </div>
                        <p className="font-semibold text-[#222222] text-sm mb-1">Aire Acondicionado</p>
                        <p className="text-xs text-[#222222]/60">En habitaciones</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#FDB913] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Car className="h-7 w-7 text-white" />
                        </div>
                        <p className="font-semibold text-[#222222] text-sm mb-1">Estacionamiento</p>
                        <p className="text-xs text-[#222222]/60">Cochera privada</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#FDB913] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Droplet className="h-7 w-7 text-white" />
                        </div>
                        <p className="font-semibold text-[#222222] text-sm mb-1">Agua Caliente</p>
                        <p className="text-xs text-[#222222]/60">24 horas</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#FDB913] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Flame className="h-7 w-7 text-white" />
                        </div>
                        <p className="font-semibold text-[#222222] text-sm mb-1">Parrilla</p>
                        <p className="text-xs text-[#222222]/60">Privada</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#FDB913] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Waves className="h-7 w-7 text-white" />
                        </div>
                        <p className="font-semibold text-[#222222] text-sm mb-1">Piscina</p>
                        <p className="text-xs text-[#222222]/60">2 compartidas</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              {/* Horizontal Pill Tabs */}
              <div>
                <h4 className="text-2xl font-bold text-[#222222] mb-6">Explorá la Distribución</h4>
                <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2">
                  <button
                    onClick={() => setSelectedRoom("entrada")}
                    className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                      selectedRoom === "entrada"
                        ? "bg-[#FDB913] text-[#222222] shadow-lg scale-105"
                        : "bg-white text-[#222222]/70 border-2 border-gray-200 hover:border-[#FDB913] hover:text-[#222222]"
                    }`}
                  >
                    Entrada
                  </button>

                  <button
                    onClick={() => setSelectedRoom("habitacion1")}
                    className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                      selectedRoom === "habitacion1"
                        ? "bg-[#FDB913] text-[#222222] shadow-lg scale-105"
                        : "bg-white text-[#222222]/70 border-2 border-gray-200 hover:border-[#FDB913] hover:text-[#222222]"
                    }`}
                  >
                    Habitación 1
                  </button>

                  <button
                    onClick={() => setSelectedRoom("habitacion2")}
                    className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                      selectedRoom === "habitacion2"
                        ? "bg-[#FDB913] text-[#222222] shadow-lg scale-105"
                        : "bg-white text-[#222222]/70 border-2 border-gray-200 hover:border-[#FDB913] hover:text-[#222222]"
                    }`}
                  >
                    Habitación 2
                  </button>

                  <button
                    onClick={() => setSelectedRoom("comedor")}
                    className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                      selectedRoom === "comedor"
                        ? "bg-[#FDB913] text-[#222222] shadow-lg scale-105"
                        : "bg-white text-[#222222]/70 border-2 border-gray-200 hover:border-[#FDB913] hover:text-[#222222]"
                    }`}
                  >
                    Comedor
                  </button>

                  <button
                    onClick={() => setSelectedRoom("cocina")}
                    className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                      selectedRoom === "cocina"
                        ? "bg-[#FDB913] text-[#222222] shadow-lg scale-105"
                        : "bg-white text-[#222222]/70 border-2 border-gray-200 hover:border-[#FDB913] hover:text-[#222222]"
                    }`}
                  >
                    Cocina
                  </button>

                  <button
                    onClick={() => setSelectedRoom("bano")}
                    className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                      selectedRoom === "bano"
                        ? "bg-[#FDB913] text-[#222222] shadow-lg scale-105"
                        : "bg-white text-[#222222]/70 border-2 border-gray-200 hover:border-[#FDB913] hover:text-[#222222]"
                    }`}
                  >
                    Baño
                  </button>

                  <button
                    onClick={() => setSelectedRoom("parrilla")}
                    className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                      selectedRoom === "parrilla"
                        ? "bg-[#FDB913] text-[#222222] shadow-lg scale-105"
                        : "bg-white text-[#222222]/70 border-2 border-gray-200 hover:border-[#FDB913] hover:text-[#222222]"
                    }`}
                  >
                    Parrilla
                  </button>

                  <button
                    onClick={() => setSelectedRoom("piscina")}
                    className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                      selectedRoom === "piscina"
                        ? "bg-[#FDB913] text-[#222222] shadow-lg scale-105"
                        : "bg-white text-[#222222]/70 border-2 border-gray-200 hover:border-[#FDB913] hover:text-[#222222]"
                    }`}
                  >
                    Piscina
                  </button>
                </div>
              </div>

              {/* Large Featured Image with Overlay */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl group">
                <img
                  src={roomImages[selectedRoom].image || "/placeholder.svg"}
                  alt={roomImages[selectedRoom].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{roomImages[selectedRoom].title}</h3>
                  <p className="text-lg text-white/90">{roomImages[selectedRoom].description}</p>
                </div>
              </div>

              {/* Location Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2">
                <h4 className="text-2xl font-bold text-[#222222] mb-4">Ubicación</h4>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FDB913] rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold text-lg text-[#222222]">Sarmiento 280, Centro, W3409BQF Paso de la Patria, Corrientes, Argentina</p>
                </div>
                <div className="relative h-[400px] overflow-hidden rounded-xl border-2 shadow-md">
                  <iframe
                    src="https://www.google.com/maps?q=Apart+Paso,+Sarmiento+280,+Paso+de+la+Patria,+Corrientes,+Argentina&output=embed&zoom=17"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Apart Paso - Las 3 Marías"
                  />
                </div>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="w-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#222222] font-bold text-xl py-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Consultar Disponibilidad
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="py-20 px-4 bg-[#FDB913]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">Galería</h2>
            <p className="text-lg text-[#222222]/70 max-w-2xl mx-auto text-balance">
              Conocé nuestras instalaciones y el hermoso entorno natural que te espera.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "cabin exterior with nature",
              "swimming pool area",
              "cabin interior living room",
              "cabin bedroom",
              "cabin kitchen",
              "outdoor barbecue area",
              "garden and park area",
              "cabin bathroom",
              "dining area",
              "outdoor seating area",
              "cabin entrance",
              "pool with families",
            ].map((query, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={`/.jpg?key=0drup&height=400&width=400&query=${query}`}
                  alt={`Galería imagen ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#222222] font-semibold">
              <a
                href="https://drive.google.com/drive/folders/1MUbQf2Mp80Xcdnx5YBwopFQI4kkGKHpT?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Todas las Fotos
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section id="testimonios" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">Lo Que Dicen Nuestros Huéspedes</h2>
            <p className="text-lg text-[#222222]/70 max-w-2xl mx-auto text-balance">
              Experiencias reales de familias que disfrutaron de Apart Paso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                location: "Buenos Aires",
                text: "Un lugar increíble para desconectar. Las cabañas son amplias, limpias y muy cómodas. Los chicos disfrutaron muchísimo de la naturaleza. ¡Volveremos sin dudas!",
                rating: 5,
              },
              {
                name: "Carlos Fernández",
                location: "Rosario",
                text: "Excelente atención y las instalaciones impecables. La ubicación es perfecta, cerca de todo pero con la tranquilidad que buscábamos. Muy recomendable para familias.",
                rating: 5,
              },
              {
                name: "Laura Martínez",
                location: "Córdoba",
                text: "Pasamos un fin de semana maravilloso. Las cabañas tienen todo lo necesario y el entorno natural es hermoso. Ideal para relajarse y disfrutar en familia.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-[#FDB913]" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#222222]/80 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-[#222222]">{testimonial.name}</p>
                    <p className="text-sm text-[#222222]/60">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 px-4 bg-[#FDB913]/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4">Contactanos</h2>
            <p className="text-lg text-[#222222]/70 max-w-2xl mx-auto text-balance">
              ¿Tenés alguna consulta? Escribinos y te responderemos a la brevedad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#222222]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#222222] mb-2">Teléfono</h3>
                  <p className="text-[#222222]/70">+54 9 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FDB913] rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#222222]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#222222] mb-2">Email</h3>
                  <p className="text-[#222222]/70">info@apartpaso.com.ar</p>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Chateá por WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <Card className="border-2">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#222222] mb-2">
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu nombre" className="border-2" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#222222] mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" className="border-2" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#222222] mb-2">
                      Mensaje
                    </label>
                    <Textarea id="message" placeholder="Contanos tu consulta..." rows={4} className="border-2" />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#222222] font-semibold"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222222] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FDB913]">Apart Paso</h3>
              <p className="text-white/70">Las 3 Marías - Tu refugio familiar en la naturaleza</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#cabanas" className="text-white/70 hover:text-[#FDB913] transition-colors">
                    Cabañas
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-white/70 hover:text-[#FDB913] transition-colors">
                    Galería
                  </a>
                </li>
                <li>
                  <a href="#testimonios" className="text-white/70 hover:text-[#FDB913] transition-colors">
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-white/70 hover:text-[#FDB913] transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-white/70">
                <li>Sarmiento 280, Centro</li>
                <li>W3409BQF Paso de la Patria, Corrientes</li>
                <li>+54 9 123 456 7890</li>
                <li>info@apartpaso.com.ar</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 Apart Paso - Las 3 Marías. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-transform hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
