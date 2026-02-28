/*
 * WINDING ROAD DESIGN — Preparation Section
 * Checklist-style preparation items grouped by category
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp, Info } from "lucide-react";
import { prepCategories } from "@/data/tripData";

export default function PreparationSection() {
  const [expandedCats, setExpandedCats] = useState<Set<number>>(new Set([0, 1]));
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleCat = (idx: number) => {
    setExpandedCats((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const toggleCheck = (key: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const totalItems = prepCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = checkedItems.size;

  return (
    <section id="preparation" className="scroll-mt-16 relative">
      {/* Curved divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px] overflow-hidden z-10">
        <svg viewBox="0 0 1440 60" className="w-full h-10 md:h-14" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="#111D24" />
        </svg>
      </div>

      <div className="bg-[#111D24] pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-amber-400/60 text-xs uppercase tracking-widest font-[Outfit] font-semibold mb-3">
              Đồ đạc & vật dụng
            </p>
            <h2 className="font-[Outfit] text-4xl md:text-6xl font-black text-white mb-4">
              Chuẩn bị
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mb-6">
              Danh sách đầy đủ những gì cần mang theo. Tick vào để đánh dấu đã chuẩn bị.
            </p>

            {/* Progress */}
            <div className="flex items-center gap-4">
              <div className="flex-1 max-w-xs h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${totalItems > 0 ? (checkedCount / totalItems) * 100 : 0}%` }}
                />
              </div>
              <span className="text-white/60 text-sm font-[JetBrains_Mono]">
                {checkedCount}/{totalItems}
              </span>
            </div>
          </motion.div>

          {/* Categories */}
          <div className="space-y-4">
            {prepCategories.map((cat, ci) => {
              const isExpanded = expandedCats.has(ci);
              const catChecked = cat.items.filter((_, ii) => checkedItems.has(`${ci}-${ii}`)).length;

              return (
                <motion.div
                  key={ci}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.08 }}
                  className="bg-white/5 border border-white/8 rounded-2xl overflow-hidden"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCat(ci)}
                    className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-white/3 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{cat.icon}</span>
                      <div className="text-left">
                        <h3 className="font-[Outfit] font-bold text-white text-lg">{cat.category}</h3>
                        <p className="text-white/40 text-xs">{catChecked}/{cat.items.length} đã chuẩn bị</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-white/40" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white/40" />
                    )}
                  </button>

                  {/* Items */}
                  {isExpanded && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-2">
                      {cat.items.map((item, ii) => {
                        const key = `${ci}-${ii}`;
                        const isChecked = checkedItems.has(key);

                        return (
                          <div
                            key={ii}
                            className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 ${
                              isChecked ? "bg-emerald-500/10 border border-emerald-500/20" : "bg-white/3 border border-transparent hover:border-white/10"
                            }`}
                          >
                            {/* Checkbox */}
                            <button
                              onClick={() => toggleCheck(key)}
                              className={`flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 transition-all ${
                                isChecked
                                  ? "bg-emerald-500 border-emerald-500"
                                  : "border-white/30 hover:border-amber-400"
                              }`}
                            >
                              {isChecked && <Check className="w-3 h-3 text-white" />}
                            </button>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <p className={`font-semibold text-sm ${isChecked ? "text-emerald-300 line-through" : "text-white"}`}>
                                  {item.name}
                                </p>
                                <span className="text-white/30 text-xs px-2 py-0.5 rounded-full bg-white/5">
                                  {item.quantity}
                                </span>
                              </div>
                              <div className="flex items-start gap-1 mt-1">
                                <Info className="w-3 h-3 text-amber-400/50 mt-0.5 flex-shrink-0" />
                                <p className="text-white/40 text-xs leading-relaxed">{item.tip}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
