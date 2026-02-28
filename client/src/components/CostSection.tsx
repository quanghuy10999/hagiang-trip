/*
 * WINDING ROAD DESIGN — Cost Breakdown Section
 * Visual cost breakdown with category cards, progress bars, total summary
 */
import { motion } from "framer-motion";
import { Banknote, Bus, Home, UtensilsCrossed, Ticket, ShieldAlert } from "lucide-react";
import { costBreakdown, tripOverview } from "@/data/tripData";

const categoryIcons: Record<string, typeof Bus> = {
  "Di chuyển": Bus,
  "Lưu trú": Home,
  "Ăn uống": UtensilsCrossed,
  "Tham quan & Trải nghiệm": Ticket,
  "Dự phòng": ShieldAlert,
};

const categoryColors: Record<string, string> = {
  "Di chuyển": "from-blue-500 to-blue-600",
  "Lưu trú": "from-emerald-500 to-emerald-600",
  "Ăn uống": "from-orange-500 to-orange-600",
  "Tham quan & Trải nghiệm": "from-purple-500 to-purple-600",
  "Dự phòng": "from-gray-400 to-gray-500",
};

const categoryBg: Record<string, string> = {
  "Di chuyển": "bg-blue-500/10 border-blue-500/20",
  "Lưu trú": "bg-emerald-500/10 border-emerald-500/20",
  "Ăn uống": "bg-orange-500/10 border-orange-500/20",
  "Tham quan & Trải nghiệm": "bg-purple-500/10 border-purple-500/20",
  "Dự phòng": "bg-gray-500/10 border-gray-500/20",
};

function formatVND(amount: number): string {
  return new Intl.NumberFormat("vi-VN").format(amount);
}

export default function CostSection() {
  const totalCost = tripOverview.totalCost;

  return (
    <section id="costs" className="scroll-mt-16 relative">
      {/* Curved divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px] overflow-hidden z-10">
        <svg viewBox="0 0 1440 60" className="w-full h-10 md:h-14" preserveAspectRatio="none">
          <path d="M0,60 C480,0 960,60 1440,0 L1440,0 L0,0 Z" fill="#0F2027" />
        </svg>
      </div>

      <div className="bg-gradient-to-b from-[#0a1a20] to-[#0F2027] pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-amber-400/60 text-xs uppercase tracking-widest font-[Outfit] font-semibold mb-3">
              Ngân sách dự kiến
            </p>
            <h2 className="font-[Outfit] text-4xl md:text-6xl font-black text-white mb-4">
              Chi phí
            </h2>
            <p className="text-white/50 text-lg max-w-2xl">
              Tất cả chi phí tính cho tổng 8 người. Tiêu chí: ngon, bổ, rẻ.
            </p>
          </motion.div>

          {/* Total Summary Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          >
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-2xl p-6 md:p-8">
              <Banknote className="w-8 h-8 text-amber-400 mb-3" />
              <p className="text-white/50 text-sm font-[Outfit] mb-1">Tổng chi phí (8 người)</p>
              <p className="font-[Outfit] text-3xl md:text-4xl font-black text-white">
                {formatVND(totalCost)}<span className="text-lg text-white/50 ml-1">VND</span>
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-2xl p-6 md:p-8">
              <Banknote className="w-8 h-8 text-emerald-400 mb-3" />
              <p className="text-white/50 text-sm font-[Outfit] mb-1">Trung bình mỗi người</p>
              <p className="font-[Outfit] text-3xl md:text-4xl font-black text-white">
                ~{formatVND(tripOverview.costPerPerson)}<span className="text-lg text-white/50 ml-1">VND</span>
              </p>
              <p className="text-emerald-400/60 text-sm mt-1">Làm tròn ~3.300.000đ</p>
            </div>
          </motion.div>

          {/* Category Breakdown */}
          <div className="space-y-6">
            {costBreakdown.map((cat, ci) => {
              const Icon = categoryIcons[cat.category] || Banknote;
              const catTotal = cat.items.reduce((sum, item) => sum + item.amount, 0);
              const percentage = (catTotal / totalCost) * 100;

              return (
                <motion.div
                  key={ci}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 }}
                  className={`border rounded-2xl p-5 md:p-6 ${categoryBg[cat.category]}`}
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-white/70" />
                      <h3 className="font-[Outfit] font-bold text-white text-lg">{cat.category}</h3>
                    </div>
                    <div className="text-right">
                      <p className="font-[JetBrains_Mono] font-bold text-white text-lg">
                        {formatVND(catTotal)}đ
                      </p>
                      <p className="text-white/40 text-xs">{percentage.toFixed(1)}% tổng</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1.5 bg-white/5 rounded-full mb-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={`h-full rounded-full bg-gradient-to-r ${categoryColors[cat.category]}`}
                    />
                  </div>

                  {/* Items */}
                  <div className="space-y-2">
                    {cat.items.map((item, ii) => (
                      <div key={ii} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                        <div className="flex-1 min-w-0">
                          <p className="text-white/80 text-sm">{item.name}</p>
                          <p className="text-white/40 text-xs">{item.detail}</p>
                        </div>
                        <p className="font-[JetBrains_Mono] text-white/70 text-sm ml-4 flex-shrink-0">
                          {formatVND(item.amount)}đ
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
