/*
 * WINDING ROAD DESIGN — Itinerary Section
 * Day-by-day timeline with curved section dividers, activity cards
 * Alternating dark/light sections per day
 */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock, MapPin, Banknote, Navigation2, ChevronDown, ChevronUp,
  ExternalLink, ArrowRightLeft
} from "lucide-react";
import { days, type DaySchedule } from "@/data/tripData";

function formatCost(amount: number): string {
  if (amount === 0) return "Miễn phí";
  if (amount >= 1000000) {
    const m = amount / 1000000;
    return m % 1 === 0 ? `${m}tr` : `${m.toFixed(1)}tr`;
  }
  if (amount >= 1000) {
    return `${Math.round(amount / 1000)}k`;
  }
  return new Intl.NumberFormat("vi-VN").format(amount) + "đ";
}

function DayCard({ day, index }: { day: DaySchedule; index: number }) {
  const [expanded, setExpanded] = useState(index < 2);
  const isDark = index % 2 === 0;

  return (
    <div
      className={`relative ${isDark ? "bg-[#0F2027]" : "bg-[#152A33]"}`}
    >
      {/* Curved divider top */}
      {index > 0 && (
        <div className="absolute top-0 left-0 right-0 -translate-y-[1px] overflow-hidden">
          <svg viewBox="0 0 1440 60" className="w-full h-8 md:h-12" preserveAspectRatio="none">
            <path
              d="M0,60 C360,0 1080,0 1440,60 L1440,0 L0,0 Z"
              fill={isDark ? "#152A33" : "#0F2027"}
            />
          </svg>
        </div>
      )}

      <div className="container py-12 md:py-20">
        {/* Day Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-8"
        >
          {/* Day Number */}
          <div className="flex-shrink-0">
            <p className="text-amber-400/60 text-xs uppercase tracking-widest font-[Outfit] font-semibold mb-1">
              {day.weekday} · {day.date}
            </p>
            <h2 className="font-[Outfit] text-3xl md:text-5xl font-black text-white leading-tight">
              Ngày {day.id}
            </h2>
          </div>

          {/* Day Info */}
          <div className="flex-1">
            <h3 className="font-[Outfit] text-xl md:text-2xl font-bold text-amber-400 mb-1">
              {day.title}
            </h3>
            <p className="text-white/50 text-sm md:text-base">{day.subtitle}</p>
          </div>

          {/* Distance Badge */}
          <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Navigation2 className="w-4 h-4 text-amber-400" />
            <span className="text-white/80 text-sm font-[Outfit] font-semibold">{day.totalKm}</span>
          </div>
        </motion.div>

        {/* Day Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden mb-8 h-48 md:h-72"
        >
          <img
            src={day.image}
            alt={day.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-6 font-[Outfit] font-semibold text-sm"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? "Thu gọn" : `Xem ${day.activities.length} hoạt động`}
        </button>

        {/* Activities Timeline */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/50 via-white/10 to-transparent" />

            <div className="space-y-4">
              {day.activities.map((activity, ai) => (
                <motion.div
                  key={ai}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ai * 0.05 }}
                  className="relative pl-10 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2.5 md:left-4.5 top-4 w-3 h-3 rounded-full border-2 ${
                    activity.cost > 0 ? "bg-amber-400 border-amber-400" : "bg-transparent border-white/30"
                  }`} />

                  {/* Activity Card */}
                  <div className="bg-white/5 border border-white/8 rounded-xl p-4 md:p-5 hover:bg-white/8 transition-colors duration-200 group">
                    {/* Top row: Time + Title + Cost */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-start gap-2 md:gap-3 min-w-0">
                        <div className="flex-shrink-0 flex items-center gap-1.5 mt-0.5">
                          <Clock className="w-4 h-4 text-amber-400/70" />
                          <span className="font-[JetBrains_Mono] text-amber-300/80 text-xs md:text-sm font-medium whitespace-nowrap">
                            {activity.time}
                          </span>
                        </div>
                        <h4 className="font-[Outfit] font-bold text-white text-base md:text-lg leading-snug">
                          {activity.title}
                        </h4>
                      </div>
                      <div className="flex-shrink-0 flex items-center gap-2">
                        {activity.cost > 0 && (
                          <span className="font-[JetBrains_Mono] text-amber-300 text-xs md:text-sm font-semibold whitespace-nowrap">
                            {formatCost(activity.cost)}
                          </span>
                        )}
                        {activity.mapLink && (
                          <a
                            href={activity.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-white/30 hover:text-amber-400 text-xs transition-colors whitespace-nowrap"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span className="hidden sm:inline">Maps</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Location + Distance */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2 pl-0 md:pl-[7.5rem]">
                      <span className="flex items-center gap-1 text-white/50 text-sm">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{activity.location}</span>
                      </span>
                      {activity.distance && (
                        <span className="flex items-center gap-1 text-white/40 text-xs">
                          <Navigation2 className="w-3 h-3" />
                          {activity.distance}
                        </span>
                      )}
                    </div>

                    {/* Note */}
                    <p className="text-white/60 text-sm leading-relaxed mb-2 pl-0 md:pl-[7.5rem]">
                      {activity.note}
                    </p>

                    {/* Backup */}
                    {activity.backup && (
                      <div className="flex items-start gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mt-2 ml-0 md:ml-[7.5rem]">
                        <ArrowRightLeft className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <p className="text-emerald-300/80 text-xs leading-relaxed">
                          <span className="font-semibold">Backup:</span> {activity.backup}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function ItinerarySection() {
  return (
    <section id="itinerary" className="scroll-mt-16">
      {/* Section Header */}
      <div className="bg-[#0F2027] pt-16 md:pt-24 pb-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-400/60 text-xs uppercase tracking-widest font-[Outfit] font-semibold mb-3">
              Chi tiết từng ngày
            </p>
            <h2 className="font-[Outfit] text-4xl md:text-6xl font-black text-white mb-4">
              Lịch trình
            </h2>
            <p className="text-white/50 text-lg max-w-2xl">
              4 ngày 3 đêm khám phá vòng cung Đông Bắc — từ cao nguyên đá Đồng Văn 
              đến cực Bắc Lũng Cú, qua đèo Mã Pí Lèng huyền thoại.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Day Cards */}
      {days.map((day, i) => (
        <DayCard key={day.id} day={day} index={i} />
      ))}
    </section>
  );
}
