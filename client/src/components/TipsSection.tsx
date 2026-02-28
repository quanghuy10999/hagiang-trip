/*
 * WINDING ROAD DESIGN — Critical Tips Section
 * Bold warning-style cards for the most important travel tips
 */
import { motion } from "framer-motion";
import { criticalTips } from "@/data/tripData";

export default function TipsSection() {
  return (
    <section id="tips" className="scroll-mt-16 relative">
      {/* Curved divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px] overflow-hidden z-10">
        <svg viewBox="0 0 1440 60" className="w-full h-10 md:h-14" preserveAspectRatio="none">
          <path d="M0,60 C720,0 720,60 1440,0 L1440,0 L0,0 Z" fill="#111D24" />
        </svg>
      </div>

      <div className="bg-[#0F2027] pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-red-400/80 text-xs uppercase tracking-widest font-[Outfit] font-semibold mb-3">
              Quan trọng nhất
            </p>
            <h2 className="font-[Outfit] text-4xl md:text-6xl font-black text-white mb-4">
              Tips <span className="text-amber-400">sống còn</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl">
              8 điều bắt buộc phải nhớ khi đi Hà Giang. Bỏ qua bất kỳ điều nào 
              đều có thể ảnh hưởng đến chuyến đi.
            </p>
          </motion.div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {criticalTips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 md:p-6 hover:border-amber-500/30 transition-all duration-300"
              >
                {/* Number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="font-[Outfit] font-bold text-white/20 text-sm">{i + 1}</span>
                </div>

                <span className="text-3xl mb-3 block">{tip.icon}</span>
                <h3 className="font-[Outfit] font-bold text-white text-lg mb-2 pr-10">
                  {tip.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {tip.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
