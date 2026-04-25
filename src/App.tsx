/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Lock, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CreditCard, 
  Plane, 
  CheckCircle2, 
  Calendar, 
  User, 
  Mail, 
  Phone,
  Globe,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cómo funciona', href: '#how-it-works' },
    { name: 'Precios', href: '#pricing' },
    { name: 'Traslados', href: '#transfers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-2 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          {/* Reemplazar logo.png con el archivo real del logo */}
          <div className="h-12 w-auto flex items-center gap-2">
            <div className="w-10 h-10 bg-sky rounded-xl flex items-center justify-center shadow-lg transform -rotate-3">
              <Lock size={22} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tighter text-navy uppercase">Locker</span>
              <span className="text-sm font-bold tracking-[0.3em] text-sky uppercase">Travel</span>
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-navy/70 hover:text-sky transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary">
            Reservar ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-navy hover:text-sky transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full py-4 text-lg">
                Reservar ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden text-white bg-navy">
      {/* Background with refined overlay and pattern */}
      <div className="absolute inset-0 z-0 bg-navy dot-pattern"></div>
      <div className="absolute inset-0 z-[1] premium-gradient opacity-80"></div>
      
      <div className="absolute inset-0 z-[2] opacity-50 mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
          alt="Locker Facility" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-2 rounded-lg bg-sky/20 text-white text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-white/20 backdrop-blur-xl">
            Locker Travel • Buenos Aires
          </span>
          <h1 className="text-6xl md:text-[6.5rem] font-black tracking-tighter mb-8 leading-[0.9] text-white">
            Tu equipaje en buenas manos.<br/><span className="text-sky text-glow">Vos, libre en BA.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mb-12 leading-relaxed">
            Guardá tus valijas de forma segura por solo <span className="text-white font-bold tracking-tight">$6000 el día</span>. Sin vueltas, sin complicaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="btn-primary px-10 py-5 text-lg">
              Ver Tarifas
            </a>
            <a href="https://wa.me/5491136866293" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white border-2 border-white/20 backdrop-blur-md hover:bg-white/10 px-10 py-5 rounded-xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-3">
              <MessageCircle size={24} className="text-lime" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative plane */}
      <div className="absolute right-0 bottom-0 opacity-5 font-bold text-[35rem] leading-none pointer-events-none translate-y-1/4 translate-x-1/4 select-none rotate-[-15deg]">
        ✈
      </div>
    </section>
  );
};

const TrustBar = () => {
  const stats = [
    { value: "500+", label: "Viajeros atendidos" },
    { value: "CABA", label: "Buenos Aires" },
    { value: "24/7", label: "Disponible para vos" },
    { value: "$0", label: "Costo de cancelación" },
  ];

  return (
    <div className="bg-white border-y border-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((item, idx) => (
          <div key={idx} className="text-center lg:text-left fade-up">
            <div className="text-4xl md:text-5xl font-bold text-navy mb-2 tracking-tighter">{item.value}</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Reservás tu locker",
      desc: "Reservás online o por WhatsApp. Elegís el día y horario que más te conviene.",
      icon: Lock
    },
    {
      id: "02",
      title: "Dejás tus valijas",
      desc: "Dejás tus valijas en nuestros lockers. Seguras, cerradas, sin preocupaciones.",
      icon: Plane
    },
    {
      id: "03",
      title: "Explorás libre",
      desc: "Explorás Buenos Aires sin peso. Cuando volvés, las retirás al instante.",
      icon: Globe
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Cómo funciona</h2>
          <p className="text-gray-500 max-w-[680px] mx-auto text-lg">Tres simples pasos para disfrutar la ciudad sin peso extra.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="p-10 rounded-[24px] glass-card border-gray-100 shadow-subtle hover:shadow-premium transition-all group fade-up"
            >
              <div className="w-14 h-14 bg-lime/10 text-lime rounded-2xl flex items-center justify-center mb-8 icon-feature">
                <step.icon size={28} />
              </div>
              <div className="text-sky font-bold text-xs mb-3 tracking-[0.2em] uppercase">PASO {step.id}</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-[300px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="transfers" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Service 1 */}
          <div 
            className="bg-white p-10 md:p-14 rounded-[32px] shadow-subtle flex flex-col h-full service-card fade-up border border-gray-100"
          >
            <div className="w-16 h-16 bg-navy text-sky rounded-2xl flex items-center justify-center mb-10 shadow-lg icon-feature">
              <Lock size={32} />
            </div>
            <h3 className="text-3xl font-black mb-6 tracking-tighter">Guarda de Valijas</h3>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-[480px]">Lockers de seguridad máxima en ubicaciones estratégicas de Buenos Aires. Tu equipaje no se mueve hasta que vos volvés.</p>
            <ul className="space-y-4 mb-12 flex-grow">
              {["Cerraduras digitales", "Monitoreo 24hs", "Ubicación céntrica", "Sin cargos de cancelación"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-navy">
                  <CheckCircle2 size={20} className="text-sky" /> {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-secondary w-full py-5 text-lg">
              Consultar disponibilidad
            </a>
          </div>

          {/* Service 2 */}
          <div 
            className="bg-white p-10 md:p-14 rounded-[32px] shadow-subtle flex flex-col h-full service-card fade-up border border-gray-100"
          >
            <div className="w-16 h-16 bg-sky text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg icon-feature">
              <Plane size={32} />
            </div>
            <h3 className="text-3xl font-black mb-6 tracking-tighter">Traslado al Aeropuerto</h3>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-[480px]">¿Necesitás llegar al aeropuerto? Te coordinamos el traslado de ida y vuelta por WhatsApp. Rápido y confiable.</p>
            <ul className="space-y-4 mb-12 flex-grow">
              {["Ezeiza y Aeroparque", "Choferes profesionales", "Vehículos modernos", "Tarifas fijas sin sorpresas"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-navy">
                  <CheckCircle2 size={20} className="text-sky" /> {item}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/5491136866293" target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-5 text-lg">
              Coordinar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "¿Cómo reservo mi locker?", a: "Podés hacerlo directamente a través de nuestro sitio web completando el formulario de reserva o enviándonos un mensaje por WhatsApp. No toma más de 2 minutos." },
    { q: "¿Puedo cancelar si cambio de planes?", a: "¡Claro! Podés cancelar o modificar tu reserva sin ningún cargo extra, siempre que nos avises con anticipación." },
    { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos efectivo y todas las tarjetas principales (Visa, Mastercard, Amex). Pagás cuando dejás tus valijas." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-500 text-lg">Despejá tus dudas en un segundo.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`border rounded-2xl transition-all fade-up ${openIdx === idx ? 'border-amber shadow-sm' : 'border-gray-100 bg-surface'}`}>
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center group"
              >
                <span className="font-bold text-navy group-hover:text-amber transition-colors">{faq.q}</span>
                <ChevronRight size={20} className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-90 text-amber' : 'text-gray-400'}`} />
              </button>
              <div className={`accordion-content px-6 pb-6 text-gray-500 leading-relaxed ${openIdx === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`} style={{ transition: 'all 0.3s ease' }}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { title: "Seguridad real", desc: "Lockers cerrados con llave. Tu equipaje no se mueve hasta que vos volvés.", icon: ShieldCheck },
    { title: "Flexible al 100%", desc: "Cancelá o modificá tu reserva sin cargos. Sin letra chica.", icon: Calendar },
    { title: "En el corazón de BA", desc: "Ubicados estratégicamente en Buenos Aires para que no pierdas tiempo.", icon: MapPin },
    { title: "Pago fácil", desc: "Efectivo o tarjeta. Visa, Mastercard, Amex. Como vos quieras.", icon: CreditCard },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-navy-dark rounded-[48px] p-12 md:p-24 text-white relative overflow-hidden fade-up shadow-2xl">
          {/* Abstract circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber/10 blur-[120px]"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-navy-light blur-[100px]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight">¿Por qué elegir<br/><span className="text-amber">Locker Travelar?</span></h2>
              <p className="text-white/60 text-xl mb-12 leading-relaxed">
                Somos el aliado estratégico en Buenos Aires para viajeros que buscan seguridad, comodidad y un servicio que hable su idioma.
              </p>
              <a href="#contact" className="bg-amber text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-amber/90 transition-all flex items-center justify-center sm:justify-start gap-2 shadow-xl shadow-amber/20 w-fit">
                Hacé tu reserva <ArrowRight size={20} />
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="glass-card p-8 rounded-3xl border-white/5 hover:scale-105 transition-transform duration-500">
                  <div className="w-14 h-14 bg-amber/20 text-amber rounded-2xl flex items-center justify-center mb-6 border border-amber/10">
                    <f.icon size={28} />
                  </div>
                  <h4 className="font-bold text-xl mb-3 tracking-tight">{f.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PaymentMethods = () => {
  return (
    <section className="py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Pagá como quieras</p>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
          <div className="text-2xl font-black italic text-navy">VISA</div>
          <div className="text-2xl font-black italic text-navy">Mastercard</div>
          <div className="text-2xl font-black italic text-navy">AMEX</div>
          <div className="text-2xl font-black italic text-navy">Efectivo</div>
        </div>
      </div>
    </section>
  );
};

const BlogPreview = () => {
  const posts = [
    { title: "Los mejores 5 rooftops de Buenos Aires", cat: "Guía Local", date: "Marzo 2026", img: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=800&auto=format&fit=crop" },
    { title: "Qué hacer 5 horas antes de tu vuelo en CABA", cat: "Tips de Viaje", date: "Marzo 2026", img: "https://images.unsplash.com/photo-1529604278215-e2d1d496738b?q=80&w=800&auto=format&fit=crop" },
    { title: "Cómo moverte por la ciudad como un local", cat: "Transporte", date: "Marzo 2026", img: "https://images.unsplash.com/photo-1544735047-063f256a5996?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section id="blog" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 fade-up">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog de Viajes</h2>
            <p className="text-gray-500 text-lg">Inspiración y consejos reales para tu estadía en Argentina.</p>
          </div>
          <button className="whitespace-nowrap text-amber font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
            Ver todos los artículos <ChevronRight size={18} />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <article 
              key={idx}
              className="group cursor-pointer fade-up"
            >
              <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-8 shadow-sm group-hover:shadow-premium group-hover:-translate-y-2 transition-all duration-500">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-md rounded-xl text-[10px] font-black text-navy uppercase tracking-widest border border-white">
                  {post.cat}
                </div>
              </div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">{post.date}</p>
              <h3 className="text-2xl font-bold group-hover:text-amber transition-colors leading-tight tracking-tight">{post.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', country: '', email: '', date: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Nombre requerido';
    if (!formData.email) {
      newErrors.email = 'Email requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', country: '', email: '', date: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-surface">
        <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-10 md:p-20 shadow-premium fade-up border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 tracking-tighter">¿Listo para viajar liviano?</h2>
            <p className="text-gray-500 text-lg max-w-[680px] mx-auto">Confirmá tu reserva y nos pondremos en contacto pronto.</p>
          </div>
          
          {isSuccess ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center p-12 bg-sky/5 rounded-3xl border border-sky/10"
            >
              <div className="w-20 h-20 bg-sky text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">¡Reserva enviada!</h3>
              <p className="text-gray-500">Te contactaremos por WhatsApp o mail en menos de una hora.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-sky font-bold hover:underline"
              >
                Volver a enviar
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre completo" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`${errors.name ? 'border-red-300' : ''}`}
                  />
                  {errors.name && <span className="text-xs text-red-500 ml-1">{errors.name}</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">País</label>
                  <input 
                    type="text" 
                    placeholder="Ej: Brasil" 
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`${errors.email ? 'border-red-300' : ''}`}
                  />
                  {errors.email && <span className="text-xs text-red-500 ml-1">{errors.email}</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Fecha Reserva</label>
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full py-5 text-lg"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Confirmar mi reserva <ChevronRight size={20} /></>
                )}
              </button>
            </form>
          )}
        </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-dark pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8 block">
               {/* Reemplazar logo.png con el archivo real del logo */}
               <div className="h-12 w-auto flex items-center gap-2">
                <div className="w-10 h-10 bg-sky rounded-xl flex items-center justify-center shadow-lg">
                  <Lock size={22} className="text-white" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-black tracking-tighter text-white uppercase">Locker</span>
                  <span className="text-sm font-bold tracking-[0.3em] text-sky uppercase">Travel</span>
                </div>
              </div>
            </a>
            <p className="text-white/40 max-w-sm mb-10 leading-relaxed text-lg font-light">
              El servicio más seguro y eficiente de Buenos Aires para que tu único peso sea disfrutar de la ciudad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-sky hover:text-white transition-all shadow-subtle border border-white/5">
                <Instagram size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-sky hover:text-white transition-all shadow-subtle border border-white/5">
                <Facebook size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-sky hover:text-white transition-all shadow-subtle border border-white/5">
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-white/40 mb-8">Navegación</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><a href="#how-it-works" className="hover:text-sky transition-colors">Cómo funciona</a></li>
              <li><a href="#pricing" className="hover:text-sky transition-colors">Precios</a></li>
              <li><a href="#transfers" className="hover:text-sky transition-colors">Traslados</a></li>
              <li><a href="#blog" className="hover:text-sky transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-white/40 mb-8">Información</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><a href="#" className="hover:text-sky transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-sky transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-sky transition-colors">Cancelaciones</a></li>
              <li><a href="#contact" className="hover:text-sky transition-colors">Contacto directo</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm font-medium tracking-wide">© 2026 Locker Travel • Buenos Aires, Argentina.</p>
          <div className="flex items-center gap-1.5 text-white/20 text-sm font-medium tracking-tighter">
            Hecho con <div className="text-sky animate-pulse">✈</div> para viajeros
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </footer>
  );
};

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a 
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          href="https://wa.me/5491136866293" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-16 h-16 text-white rounded-full flex items-center justify-center shadow-2xl z-[60] hover:scale-110 active:scale-95 transition-transform whatsapp-pulse"
        >
          <MessageCircle size={32} />
        </motion.a>
      )}
    </AnimatePresence>
  );
};


const Pricing = () => {
  const plans = [
    { 
      name: "Día Completo", 
      price: "$6.000", 
      duration: "por día", 
      desc: "Perfecto para escalas largas o el último día de tu viaje.",
      features: ["Locker XXL", "Seguro incluido", "Acceso 24hs", "Monitoreo 24hs"],
      featured: true
    },
    { 
      name: "Medio Día", 
      price: "$3.500", 
      duration: "hasta 6hs", 
      desc: "Ideal para una salida rápida a almorzar o un paseo liviano.",
      features: ["Soporte WhatsApp", "Ubicación central", "Cierre digital"],
      featured: false
    },
    { 
      name: "Airport Pack", 
      price: "Consultar", 
      duration: "Promo", 
      desc: "Combo de guarda de valija + traslado al aeropuerto.",
      features: ["Guarda premium", "Chofer privado", "Tarifa fija", "Puntualidad"],
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Tarifas Transparentes</h2>
          <p className="text-gray-500 text-lg max-w-[680px] mx-auto">Precios en Pesos Argentinos (ARS). Sin vueltas.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`p-10 rounded-[40px] border fade-up ${plan.featured ? 'border-sky bg-white shadow-premium relative scale-105 z-10' : 'border-border bg-white'} flex flex-col`}>
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
                  Más pedido
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 tracking-tight">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-8">{plan.desc}</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-black text-navy">{plan.price}</span>
                <span className="text-gray-400 font-bold ml-1">{plan.duration}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-navy/80">
                    <CheckCircle2 size={20} className="text-lime" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`${plan.featured ? 'btn-primary' : 'btn-secondary'} w-full py-5 text-lg uppercase tracking-widest`}>
                Reservar {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-amber selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Pricing />
        <Services />
        <FAQ />
        <WhyChooseUs />
        <PaymentMethods />
        <BlogPreview />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
