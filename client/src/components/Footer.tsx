/*
 * WINDING ROAD DESIGN — Footer
 * Simple footer with trip summary and emergency contacts
 */
import { MapPin, Phone, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080E12] border-t border-white/5">
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="font-[Outfit] font-bold text-white text-lg">Hà Giang Loop</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Hành trình vòng cung Đông Bắc<br />
              4 ngày 3 đêm · 8 người<br />
              11–15/03/2026
            </p>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="font-[Outfit] font-bold text-white text-sm uppercase tracking-wider mb-3">
              Số điện thoại quan trọng
            </h4>
            <div className="space-y-2">
              {[
                { label: "Cấp cứu", number: "115" },
                { label: "Công an", number: "113" },
                { label: "Xe Bằng Phấn", number: "0986 635 986" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400/50" />
                  <span className="text-white/60 text-sm">{item.label}:</span>
                  <a href={`tel:${item.number.replace(/\s/g, "")}`} className="text-amber-400/80 text-sm font-[JetBrains_Mono] hover:text-amber-300">
                    {item.number}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="overflow-visible">
            <h4 className="font-[Outfit] font-bold text-white text-sm uppercase tracking-wider mb-3">
              Mục lục
            </h4>
            <div className="space-y-2">
              {[
                { label: "Bản đồ", id: "map" },
                { label: "Lịch trình", id: "itinerary" },
                { label: "Chi phí", id: "costs" },
                { label: "Chuẩn bị", id: "preparation" },
                { label: "Tips quan trọng", id: "tips" },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-white/40 text-sm hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-center gap-1 text-white/20 text-xs">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-red-400/50" />
          <span>for the crew</span>
        </div>
      </div>
    </footer>
  );
}
