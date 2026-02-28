/*
 * WINDING ROAD DESIGN — Sticky Navigation
 * Floating nav bar with section links, appears after scrolling past hero
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, DollarSign, Backpack, AlertTriangle, CalendarDays, Map } from "lucide-react";

const navItems = [
  { id: "map", label: "Bản đồ", icon: Map },
  { id: "itinerary", label: "Lịch trình", icon: CalendarDays },
  { id: "costs", label: "Chi phí", icon: DollarSign },
  { id: "preparation", label: "Chuẩn bị", icon: Backpack },
  { id: "tips", label: "Tips", icon: AlertTriangle },
];

export default function Navigation() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);

      // Determine active section
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActive(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="bg-[#0F2027]/90 backdrop-blur-xl border-b border-white/10">
            <div className="container flex items-center justify-between h-14 md:h-16">
              {/* Logo */}
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="font-[Outfit] font-bold text-white text-sm md:text-base">Hà Giang Loop</span>
              </button>

              {/* Nav Items */}
              <div className="flex items-center gap-1 md:gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active === item.id
                        ? "bg-amber-500/20 text-amber-300"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="w-4 h-4 hidden md:block" />
                    <span className="hidden sm:inline">{item.label}</span>
                    <span className="sm:hidden text-xs">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
