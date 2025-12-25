
import React, { useState, useEffect } from 'react';
import { 
  Waves, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  CheckCircle2, 
  Fish, 
  ChevronRight, 
  MessageSquare, 
  X,
  Send,
  ArrowRight
} from 'lucide-react';
import { getSeafoodAdvice } from './services/geminiService';
import { Product, Testimonial, Feature } from './types';

// Components
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Waves className="text-blue-500 w-8 h-8" />
        <span className="text-2xl font-serif font-bold tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          ELEYOYO
        </span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <a 
        href="tel:08094275954" 
        className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95"
      >
        CALL NOW
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&q=80&w=2000" 
        alt="Fresh Seafood Hero" 
        className="w-full h-full object-cover opacity-50 scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent" />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1 rounded-full text-xs font-bold tracking-widest text-white animate-pulse">
          <Clock className="w-3 h-3 text-blue-400" /> OPEN 24 HOURS
        </div>
      </div>
      <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 text-glow leading-tight">
        Fresh From the <span className="text-blue-500">Ocean</span>.<br /> 
        Ready <span className="italic coral-accent">Anytime</span>.
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Lagos’ trusted 24-hour seafood market for premium freshness and bold flavor. From the net to your plate, we never close.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:08094275954" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group transition-all">
          Call to Order <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        </a>
        <a href="https://maps.google.com/?q=131+Adeniji+Adele+Rd,+Ebute+Ero,+Lagos" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
          Get Directions <MapPin className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

const TrustStrip = () => (
  <div className="bg-blue-900/10 border-y border-white/5 py-8">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-8 md:gap-4">
      <div className="flex flex-col items-center">
        <div className="flex text-yellow-500 mb-1">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
        </div>
        <span className="text-xs font-bold tracking-widest uppercase text-gray-400">5.0 Star Rating</span>
      </div>
      <div className="h-8 w-px bg-white/10 hidden md:block" />
      <div className="flex items-center gap-3">
        <div className="bg-blue-500/20 p-2 rounded-lg">
          <CheckCircle2 className="w-5 h-5 text-blue-400" />
        </div>
        <span className="text-sm font-bold tracking-wide">TRUSTED LOCAL FAVORITE</span>
      </div>
      <div className="h-8 w-px bg-white/10 hidden md:block" />
      <div className="flex items-center gap-3">
        <div className="bg-coral-accent/20 p-2 rounded-lg">
          <Clock className="w-5 h-5 coral-accent" />
        </div>
        <span className="text-sm font-bold tracking-wide">OPERATING 24/7</span>
      </div>
    </div>
  </div>
);

const About = () => (
  <section id="about" className="py-24 px-6 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] -z-10" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 blur-[100px] -z-10" />
    
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-6 italic">The Eleyoyo Legacy</h2>
      <p className="text-3xl md:text-5xl font-serif leading-tight mb-12">
        Eleyoyo Seafood Market is a <span className="text-white">Lagos staple</span> located in Ebute Ero, delivering premium seafood around the clock. 
      </p>
      <div className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-12">
        From the freshest catch to reliable service, we serve quality you can taste and trust—anytime, any day. We are the pulse of Lagos seafood culture.
      </div>
      <div className="flex justify-center">
        <div className="relative w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4">
             <Waves className="w-6 h-6 text-blue-500 animate-wave" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Fixed: Using React.FC explicitly helps the TypeScript compiler recognize this as a React component
// that implicitly accepts reserved props like 'key' in JSX maps.
const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
    <div className="aspect-[4/5] overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />
    </div>
    <div className="absolute top-4 left-4">
      <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter uppercase ${product.status === 'Fresh' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
        {product.status}
      </span>
    </div>
    <div className="p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
      <h3 className="text-xl font-serif font-bold mb-1">{product.name}</h3>
      <p className="text-sm text-gray-400 uppercase tracking-widest">{product.category}</p>
      <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
         <span className="text-xs font-bold text-blue-400">TAP TO ORDER</span>
         <ArrowRight className="w-4 h-4 text-blue-400" />
      </div>
    </div>
  </div>
);

const Showcase = () => {
  const products: Product[] = [
    { id: '1', name: 'Premium Croaker', category: 'Fresh Fish', status: 'Fresh', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800' },
    { id: '2', name: 'Jumbo Prawns', category: 'Shellfish', status: 'Available', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80&w=800' },
    { id: '3', name: 'Atlantic Lobster', category: 'Shellfish', status: 'Fresh', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&q=80&w=800' },
    { id: '4', name: 'Mud Crabs', category: 'Shellfish', status: 'Available', image: 'https://images.unsplash.com/photo-1590759668628-05b0fc34bb70?auto=format&fit=crop&q=80&w=800' },
    { id: '5', name: 'Smoked Catfish', category: 'Specialty', status: 'Available', image: 'https://images.unsplash.com/photo-1534604973900-c41ab4c5e636?auto=format&fit=crop&q=80&w=800' },
    { id: '6', name: 'Tiger Shrimps', category: 'Shellfish', status: 'Fresh', image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section id="showcase" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Fresh <span className="coral-accent italic">Selection</span></h2>
            <p className="text-gray-400 max-w-xl">Each piece is hand-selected from the early morning catch to ensure unmatched quality for your kitchen.</p>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-bold tracking-widest text-white border-b-2 border-blue-500 pb-1 hover:text-blue-400 transition-colors uppercase">
            View All Products <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    { icon: <Clock />, title: "Open 24 Hours", desc: "Late-night craving or early-bird prep? We never close." },
    { icon: <Fish />, title: "Fresh Daily Supply", desc: "Sourced directly from the coastal waters every morning." },
    { icon: <MapPin />, title: "Ebute Ero Central", desc: "Located in the heart of Lagos Island for easy access." },
    { icon: <Phone />, title: "Fast Phone Orders", desc: "Call ahead and have your order ready for pickup." },
  ];

  return (
    <section className="py-24 px-6 ocean-gradient">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-4 p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400">
              {React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6' })}
            </div>
            <h3 className="text-xl font-bold font-serif">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Reviews = () => {
  const testimonials: Testimonial[] = [
    { id: '1', name: "Chief Emeka O.", comment: "Best seafood spot in Lagos. Always fresh and the service is unmatched.", rating: 5 },
    { id: '2', name: "Chef Tolu", comment: "The jumbo prawns are consistently high quality. My restaurant's primary plug.", rating: 5 },
    { id: '3', name: "Ayo G.", comment: "Open all night—super reliable for those late events. Highly recommend.", rating: 5 },
  ];

  return (
    <section className="py-24 px-6 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif font-bold">Trusted by the <span className="text-blue-500">Best</span></h2>
      </div>
      
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="inline-block w-[350px] bg-white/5 p-8 rounded-3xl border border-white/10 mx-4">
            <div className="flex text-yellow-500 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
            </div>
            <p className="text-white font-medium mb-6 whitespace-normal italic">"{t.comment}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center font-bold">
                {t.name[0]}
              </div>
              <span className="text-sm font-bold text-gray-400">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Welcome to Eleyoyo! I'm Ele-Bot. How can I help you with your seafood needs today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    
    setIsTyping(true);
    const botResponse = await getSeafoodAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsTyping(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:right-10 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all group scale-110"
      >
        <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-10 w-full md:w-96 h-full md:h-[500px] bg-black border border-white/20 z-[60] flex flex-col shadow-2xl md:rounded-3xl overflow-hidden backdrop-blur-xl">
          <div className="bg-blue-600 p-6 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white flex items-center gap-2">
                <Waves className="w-5 h-5" /> Ele-Bot Assistant
              </h3>
              <p className="text-xs text-blue-200">Seafood Sommelier • Online</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 p-2 rounded-lg"><X /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-200'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-4 rounded-2xl flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-white/10 flex gap-2 bg-black/50">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about recipes or prices..."
              className="flex-1 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 p-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 px-6 bg-[#050505]">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Visit the <span className="text-blue-500">Source</span></h2>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600/20 p-3 rounded-xl"><MapPin className="text-blue-400" /></div>
            <div>
              <h4 className="font-bold mb-1">Location</h4>
              <p className="text-gray-400">131 Adeniji Adele Rd, Ebute Ero, Lagos 102273, Lagos, Nigeria</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-coral-accent/20 p-3 rounded-xl"><Phone className="coral-accent" /></div>
            <div>
              <h4 className="font-bold mb-1">Phone</h4>
              <p className="text-gray-400">0809 427 5954</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-xl"><Clock className="text-white" /></div>
            <div>
              <h4 className="font-bold mb-1">Availability</h4>
              <p className="text-gray-400 font-bold text-blue-400 italic">OPEN 24 HOURS • 7 DAYS A WEEK</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 h-[400px] bg-white/5 rounded-3xl overflow-hidden border border-white/10 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6737525287614!2d3.391234475908221!3d6.44874402379301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b17b6a67f0f%3A0x7d287042a9697193!2s131%20Adeniji%20Adele%20Rd%2C%20Ebute%20Ero%2C%20Lagos!5e0!3m2!1sen!2sng!4v1715420000000!5m2!1sen!2sng"
          className="w-full h-full grayscale invert opacity-60"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <Waves className="text-blue-500 w-6 h-6" />
        <span className="text-xl font-serif font-bold tracking-tight">ELEYOYO</span>
      </div>
      <p className="text-gray-500 text-sm italic">"The Seafood Plug of Lagos Island. Freshness is our heritage."</p>
      <div className="flex gap-6">
        {/* Placeholder social icons */}
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">IG</div>
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">WA</div>
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">FB</div>
      </div>
    </div>
    <div className="mt-8 text-center text-gray-600 text-[10px] tracking-widest uppercase">
      © {new Date().getFullYear()} ELEYOYO SEAFOOD MARKET. ALL RIGHTS RESERVED.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Showcase />
      <Features />
      <Reviews />
      <Contact />
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-6 z-50">
        <a 
          href="tel:08094275954" 
          className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all active:scale-90 flex items-center justify-center"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
      
      <ChatAssistant />
    </div>
  );
}
