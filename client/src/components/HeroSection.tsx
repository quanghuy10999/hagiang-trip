/*
 * WINDING ROAD DESIGN — Hero Section
 * Full-screen hero with parallax background, animated route path, trip overview stats
 * Dark background with amber accent highlights
 */
import { motion } from "framer-motion";
import { MapPin, Users, Calendar, Bike } from "lucide-react";
import { HERO_IMAGE, tripOverview } from "@/data/tripData";

const stats = [
  { icon: Calendar, label: tripOverview.totalDays, sub: "11–15/03/2026" },
  { icon: Users, label: `${tripOverview.totalPeople} người`, sub: "Nhóm bạn" },
  { icon: Bike, label: tripOverview.totalDistance, sub: "Xe máy" },
  { icon: MapPin, label: "~3.3 triệu", sub: "VND/người" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Đèo Mã Pí Lèng, Hà Giang"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2027] via-[#0F2027]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2027]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pb-16 pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300 text-sm font-medium font-[Outfit]">Tháng 3 / 2026</span>
          </div>

          {/* Title */}
          <h1 className="font-[Outfit] text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-4 tracking-tight">
            Hà Giang
            <span className="block text-amber-400">Loop</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Hành trình vòng cung Đông Bắc qua những cung đèo huyền thoại, 
            từ cao nguyên đá Đồng Văn đến cực Bắc Lũng Cú.
          </p>

          {/* Route */}
          <div className="mb-10">
            <p className="text-white/40 text-xs uppercase tracking-widest font-[Outfit] font-semibold mb-2">Cung đường</p>
            <p className="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed">
              {tripOverview.route}
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-colors duration-300"
            >
              <stat.icon className="w-5 h-5 text-amber-400 mb-2" />
              <p className="font-[Outfit] font-bold text-white text-lg md:text-xl">{stat.label}</p>
              <p className="text-white/50 text-sm">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-amber-400" />
        </div>
      </motion.div>
    </section>
  );
}
