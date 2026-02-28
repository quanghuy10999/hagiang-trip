/*
 * WINDING ROAD DESIGN — Map Section
 * Leaflet integration showing the Ha Giang loop route with markers for key stops.
 * Features: checkbox to mark visited stops, "+" button to add custom stops.
 */
import { useRef, useState, useCallback, useEffect } from "react";
import { MapView } from "@/components/Map";
import L from "leaflet";
import { MapPin, Navigation, ChevronDown, ChevronUp, ExternalLink, Plus, X, Check, SquareCheck, Square, Trash2 } from "lucide-react";

/* ── Tọa độ các điểm dừng chân chính ── */
interface RouteStop {
  id: string;
  name: string;
  lat: number;
  lng: number;
  day: number;
  dayLabel: string;
  description: string;
  type: "start" | "scenic" | "food" | "sleep" | "landmark" | "end" | "custom";
  mapLink?: string;
  isCustom?: boolean;
}

const DEFAULT_STOPS: RouteStop[] = [
  // Ngày 1 — Hà Nội → Hà Giang
  { id: "hanoi", name: "Bến xe Mỹ Đình", lat: 21.0285, lng: 105.7823, day: 1, dayLabel: "Ngày 1 · 11/03", description: "Xuất phát 22h, xe giường nằm Bằng Phấn", type: "start" },

  // Ngày 2 — TP Hà Giang → Đồng Văn
  { id: "tp-hagiang", name: "TP Hà Giang", lat: 22.8233, lng: 104.9833, day: 2, dayLabel: "Ngày 2 · 12/03", description: "Nhận xe máy, ăn sáng phở Khanh Hải", type: "food" },
  { id: "km0", name: "Cột mốc Km0", lat: 22.8127, lng: 104.9785, day: 2, dayLabel: "Ngày 2 · 12/03", description: "Điểm bắt đầu hành trình vòng cung Đông Bắc", type: "landmark" },
  { id: "quan-ba", name: "Cổng trời Quản Bạ", lat: 23.0667, lng: 104.9833, day: 2, dayLabel: "Ngày 2 · 12/03", description: "View Núi Đôi Quản Bạ, đèo đẹp", type: "scenic", mapLink: "https://maps.app.goo.gl/CongTroiQuanBa" },
  { id: "yen-minh", name: "Thị trấn Yên Minh", lat: 23.1167, lng: 105.1500, day: 2, dayLabel: "Ngày 2 · 12/03", description: "Điểm dừng chân, đổ xăng", type: "food", mapLink: "https://maps.app.goo.gl/YenMinh" },
  { id: "tham-ma", name: "Dốc Thẩm Mã", lat: 23.1500, lng: 105.2000, day: 2, dayLabel: "Ngày 2 · 12/03", description: "Dốc dài 2km, view thung lũng tuyệt đẹp", type: "scenic", mapLink: "https://maps.app.goo.gl/DocThamMa" },
  { id: "nha-pao", name: "Nhà của Pao", lat: 23.1833, lng: 105.3167, day: 2, dayLabel: "Ngày 2 · 12/03", description: "Bối cảnh phim, kiến trúc H'Mông cổ", type: "landmark", mapLink: "https://maps.app.goo.gl/NhaCuaPao" },
  { id: "dinh-vuong", name: "Dinh thự Vua Mèo", lat: 23.1850, lng: 105.3200, day: 2, dayLabel: "Ngày 2 · 12/03", description: "Dinh thự hơn 100 năm, kiến trúc Pháp-Hoa-Mông", type: "landmark", mapLink: "https://maps.app.goo.gl/DinhThuHoVuong" },
  { id: "dong-van", name: "Phố cổ Đồng Văn", lat: 23.2767, lng: 105.3633, day: 2, dayLabel: "Ngày 2 · 12/03", description: "Ngủ đêm tại Đồng Văn, dạo phố cổ", type: "sleep", mapLink: "https://maps.app.goo.gl/PhoCoĐongVan" },

  // Ngày 3 — Đồng Văn → Lũng Cú → Mã Pí Lèng → Mèo Vạc
  { id: "lung-cu", name: "Cột cờ Lũng Cú", lat: 23.3650, lng: 105.3167, day: 3, dayLabel: "Ngày 3 · 13/03", description: "Cực Bắc Tổ quốc, 839 bậc thang, view 360°", type: "landmark", mapLink: "https://maps.app.goo.gl/CotCoLungCu" },
  { id: "lo-lo-chai", name: "Làng Lô Lô Chải", lat: 23.3583, lng: 105.3083, day: 3, dayLabel: "Ngày 3 · 13/03", description: "Làng dân tộc Lô Lô cổ, nhà trình tường, bích họa", type: "sleep", mapLink: "https://maps.app.goo.gl/LoLoChaiVillage" },
  { id: "ma-pi-leng", name: "Đèo Mã Pí Lèng", lat: 23.2500, lng: 105.4167, day: 3, dayLabel: "Ngày 3 · 13/03", description: "Đèo huyền thoại, 1 trong 4 đèo lớn nhất VN", type: "scenic", mapLink: "https://maps.app.goo.gl/MaPiLeng" },
  { id: "panorama", name: "Panorama Café", lat: 23.2333, lng: 105.4333, day: 3, dayLabel: "Ngày 3 · 13/03", description: "View hẻm Tu Sản + sông Nho Quế", type: "scenic", mapLink: "https://maps.app.goo.gl/PanoramaCafe" },
  { id: "nho-que", name: "Sông Nho Quế", lat: 23.2167, lng: 105.4500, day: 3, dayLabel: "Ngày 3 · 13/03", description: "Đi thuyền sông Nho Quế, ăn trưa ven sông", type: "scenic", mapLink: "https://maps.app.goo.gl/SongNhoQue" },
  { id: "meo-vac", name: "Thị trấn Mèo Vạc", lat: 23.1667, lng: 105.4000, day: 3, dayLabel: "Ngày 3 · 13/03", description: "Dạo chợ, đổ xăng", type: "food", mapLink: "https://maps.app.goo.gl/MeoVac" },

  // Ngày 4 — Lô Lô Chải → Mèo Vạc → Du Già
  { id: "cho-phien", name: "Chợ phiên Mèo Vạc", lat: 23.1650, lng: 105.3983, day: 4, dayLabel: "Ngày 4 · 14/03", description: "Thứ 7 có chợ phiên! Đặc sắc nhất vùng cao", type: "landmark", mapLink: "https://maps.app.goo.gl/ChoPhienMeoVac" },
  { id: "hem-tu-san", name: "Hẻm Tu Sản", lat: 23.1833, lng: 105.4167, day: 4, dayLabel: "Ngày 4 · 14/03", description: "Hẻm vực sâu nhất Đông Nam Á", type: "scenic", mapLink: "https://maps.app.goo.gl/HemTuSan" },
  { id: "du-gia", name: "Du Già", lat: 23.0333, lng: 105.1667, day: 4, dayLabel: "Ngày 4 · 14/03", description: "Ngủ đêm tại Du Gia Stream Lodge, tắm suối", type: "sleep", mapLink: "https://maps.app.goo.gl/DuGia" },
  { id: "thac-du-gia", name: "Thác Du Già", lat: 23.0250, lng: 105.1600, day: 4, dayLabel: "Ngày 4 · 14/03", description: "Thác nước đẹp giữa rừng, tắm suối", type: "scenic", mapLink: "https://maps.app.goo.gl/ThacDuGia" },

  // Ngày 5 — Du Già → TP Hà Giang → Hà Nội
  { id: "tp-hagiang-2", name: "TP Hà Giang (trả xe)", lat: 22.8233, lng: 104.9833, day: 5, dayLabel: "Ngày 5 · 15/03", description: "Trả xe máy, ăn trưa, mua đặc sản", type: "food" },
  { id: "hanoi-2", name: "Bến xe Mỹ Đình (về)", lat: 21.0285, lng: 105.7823, day: 5, dayLabel: "Ngày 5 · 15/03", description: "Về đến Hà Nội ~18-20h. Kết thúc chuyến đi!", type: "end" },
];

/* ── Route path ── */
const ROUTE_PATH = DEFAULT_STOPS.map((s) => [s.lat, s.lng] as [number, number]);

/* ── Màu cho từng ngày ── */
const DAY_COLORS: Record<number, string> = {
  1: "#f59e0b",
  2: "#22d3ee",
  3: "#a78bfa",
  4: "#34d399",
  5: "#fb923c",
};

const DAY_BG_COLORS: Record<number, string> = {
  1: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  2: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  3: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  4: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  5: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

const TYPE_LABELS: Record<string, string> = {
  start: "Xuất phát",
  scenic: "Cảnh đẹp",
  food: "Ăn uống",
  sleep: "Ngủ đêm",
  landmark: "Tham quan",
  end: "Kết thúc",
  custom: "Tùy chỉnh",
};

const DAY_LABELS: Record<number, string> = {
  1: "Ngày 1 · 11/03",
  2: "Ngày 2 · 12/03",
  3: "Ngày 3 · 13/03",
  4: "Ngày 4 · 14/03",
  5: "Ngày 5 · 15/03",
};

/* ── LocalStorage keys ── */
const LS_VISITED = "hagiang-visited-stops";
const LS_CUSTOM = "hagiang-custom-stops";

function loadVisited(): Set<string> {
  try {
    const raw = localStorage.getItem(LS_VISITED);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch { return new Set(); }
}

function saveVisited(set: Set<string>) {
  localStorage.setItem(LS_VISITED, JSON.stringify(Array.from(set)));
}

function loadCustomStops(): RouteStop[] {
  try {
    const raw = localStorage.getItem(LS_CUSTOM);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveCustomStops(stops: RouteStop[]) {
  localStorage.setItem(LS_CUSTOM, JSON.stringify(stops));
}

/* ── Component ── */
export default function MapSection() {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedStop, setSelectedStop] = useState<RouteStop | null>(null);
  const [visitedStops, setVisitedStops] = useState<Set<string>>(() => loadVisited());
  const [customStops, setCustomStops] = useState<RouteStop[]>(() => loadCustomStops());
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStop, setNewStop] = useState({ name: "", description: "", day: 2, lat: "", lng: "" });
  const mapInitializedRef = useRef(false);

  // All stops = default + custom
  const allStops = [...DEFAULT_STOPS, ...customStops];

  /* ── Persist visited ── */
  useEffect(() => { saveVisited(visitedStops); }, [visitedStops]);
  useEffect(() => { saveCustomStops(customStops); }, [customStops]);

  /* ── Toggle visited ── */
  const toggleVisited = (stopId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setVisitedStops((prev) => {
      const next = new Set(prev);
      if (next.has(stopId)) next.delete(stopId);
      else next.add(stopId);
      return next;
    });
  };

  /* ── Create marker icon ── */
  const createMarkerIcon = (stop: RouteStop, visited: boolean) => {
    const color = stop.isCustom ? "#f472b6" : DAY_COLORS[stop.day] || "#f59e0b";
    return L.divIcon({
      className: 'custom-div-icon',
      html: `
        <div style="
          display:flex; align-items:center; justify-content:center;
          width:32px; height:32px; border-radius:50%;
          background:${visited ? "#CBD5E1" : color}; border:3px solid #FFFFFF;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          font-size:13px; font-weight:700; color:${visited ? "#64748B" : "#FFFFFF"};
          cursor:pointer; transition: transform 0.2s;
          ${visited ? "opacity:0.5;" : ""}
        ">${stop.isCustom ? "+" : stop.day}</div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
  };

  /* ── Add marker to map ── */
  const addMarkerToMap = useCallback((stop: RouteStop, map: L.Map) => {
    const visited = visitedStops.has(stop.id);
    const color = stop.isCustom ? "#f472b6" : DAY_COLORS[stop.day] || "#f59e0b";

    const marker = L.marker([stop.lat, stop.lng], {
      icon: createMarkerIcon(stop, visited),
      title: stop.name
    }).addTo(map);

    const popupContent = `
      <div style="
        background:#FFFFFF; color:#1E293B; padding:4px;
        border-radius:8px; min-width:200px; max-width:250px;
        font-family:'Nunito Sans',sans-serif;
      ">
        <div style="font-size:11px; color:${color}; font-weight:700; margin-bottom:4px; text-transform:uppercase; letter-spacing:0.5px;">
          ${stop.dayLabel} · ${TYPE_LABELS[stop.type]}${stop.isCustom ? " · Tùy chỉnh" : ""}
        </div>
        <div style="font-size:15px; font-weight:700; font-family:'Outfit',sans-serif; margin-bottom:6px; color:#0F172A;">
          ${stop.name}
        </div>
        <div style="font-size:12px; color:#94a3b8; line-height:1.5;">
          ${stop.description}
        </div>
        ${stop.mapLink ? `<a href="${stop.mapLink}" target="_blank" rel="noopener" style="
          display:inline-flex; align-items:center; gap:4px;
          margin-top:8px; font-size:11px; color:${color};
          text-decoration:none; font-weight:600;
        ">Mở Google Maps →</a>` : ""}
      </div>
    `;

    marker.bindPopup(popupContent, {
      className: 'light-popup'
    });

    marker.on("click", () => {
      setSelectedStop(stop);
      map.panTo([stop.lat, stop.lng]);
    });

    markersRef.current.set(stop.id, marker);
    return marker;
  }, [visitedStops]);

  /* ── Map ready ── */
  const handleMapReady = useCallback((map: L.Map) => {
    mapRef.current = map;
    mapInitializedRef.current = true;

    // Draw route polyline
    L.polyline(ROUTE_PATH, {
      color: "#f59e0b",
      opacity: 0.7,
      weight: 3,
    }).addTo(map);

    // Add all markers
    [...DEFAULT_STOPS, ...customStops].forEach((stop) => {
      addMarkerToMap(stop, map);
    });
  }, [customStops, addMarkerToMap]);

  /* ── Update marker appearance when visited changes ── */
  useEffect(() => {
    if (!mapInitializedRef.current || !mapRef.current) return;
    allStops.forEach((stop) => {
      const marker = markersRef.current.get(stop.id);
      if (marker) {
        const visited = visitedStops.has(stop.id);
        marker.setIcon(createMarkerIcon(stop, visited));
      }
    });
  }, [visitedStops, customStops]);

  /* ── Filter markers by day ── */
  const filterByDay = (day: number | null) => {
    setActiveDay(day);
    setSelectedStop(null);
    if (mapRef.current) mapRef.current.closePopup();

    allStops.forEach((stop) => {
      const marker = markersRef.current.get(stop.id);
      if (marker) {
        if (day === null || stop.day === day) {
          marker.addTo(mapRef.current!);
        } else {
          marker.remove();
        }
      }
    });

    if (mapRef.current) {
      const visibleStops = day === null ? allStops : allStops.filter((s) => s.day === day);
      if (visibleStops.length > 0) {
        const bounds = L.latLngBounds(visibleStops.map(s => [s.lat, s.lng]));
        mapRef.current.fitBounds(bounds, { padding: [60, 60] });
      }
    }
  };

  /* ── Click on stop in sidebar list ── */
  const focusStop = (stop: RouteStop) => {
    setSelectedStop(stop);
    if (mapRef.current) {
      mapRef.current.panTo([stop.lat, stop.lng]);
      mapRef.current.setZoom(13);
    }
    const marker = markersRef.current.get(stop.id);
    if (marker) {
      marker.openPopup();
    }
  };

  /* ── Add custom stop ── */
  const handleAddStop = () => {
    if (!newStop.name.trim()) return;
    const lat = parseFloat(newStop.lat) || (22.8 + Math.random() * 0.6);
    const lng = parseFloat(newStop.lng) || (104.9 + Math.random() * 0.6);
    const id = `custom-${Date.now()}`;
    const stop: RouteStop = {
      id,
      name: newStop.name.trim(),
      lat,
      lng,
      day: newStop.day,
      dayLabel: DAY_LABELS[newStop.day] || `Ngày ${newStop.day}`,
      description: newStop.description.trim() || "Địa điểm tùy chỉnh",
      type: "custom",
      isCustom: true,
    };

    setCustomStops((prev) => [...prev, stop]);

    // Add marker to map
    if (mapRef.current) {
      addMarkerToMap(stop, mapRef.current);
      mapRef.current.panTo([lat, lng]);
      mapRef.current.setZoom(12);
    }

    setNewStop({ name: "", description: "", day: 2, lat: "", lng: "" });
    setShowAddForm(false);
  };

  /* ── Remove custom stop ── */
  const removeCustomStop = (stopId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const marker = markersRef.current.get(stopId);
    if (marker) {
      marker.remove();
      markersRef.current.delete(stopId);
    }
    setCustomStops((prev) => prev.filter((s) => s.id !== stopId));
    setVisitedStops((prev) => {
      const next = new Set(prev);
      next.delete(stopId);
      return next;
    });
  };

  const filteredStops = activeDay ? allStops.filter((s) => s.day === activeDay) : allStops;
  const visibleStops = isExpanded ? filteredStops : filteredStops.slice(0, 6);
  const visitedCount = allStops.filter((s) => visitedStops.has(s.id)).length;

  return (
    <section id="map" className="relative py-16 md:py-24">
      <style dangerouslySetInnerHTML={{
        __html: `
            .light-popup .leaflet-popup-content-wrapper {
                background: #FFFFFF;
                color: #1E293B;
                border: 1px solid rgba(0,0,0,0.05);
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            }
            .light-popup .leaflet-popup-tip {
                background: #FFFFFF;
            }
        `}} />
      {/* Section header */}
      <div className="container mb-8">
        <p className="text-amber-400 font-[Outfit] font-bold text-xs uppercase tracking-[0.2em] mb-2">
          Bản đồ cung đường
        </p>
        <h2 className="font-[Outfit] font-black text-3xl md:text-5xl text-white mb-3">
          Hà Giang Loop
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <p className="text-white/50 max-w-xl text-sm md:text-base leading-relaxed">
            Toàn bộ {allStops.length} điểm dừng chân trên cung đường vòng cung Đông Bắc.
            Click vào marker để xem chi tiết.
          </p>
          {/* Visited counter badge */}
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 shrink-0">
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-bold font-[Outfit]">
              {visitedCount}/{allStops.length}
            </span>
            <span className="text-emerald-400/60 text-xs">đã đến</span>
          </div>
        </div>
      </div>

      {/* Day filter tabs + Add button */}
      <div className="container mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => filterByDay(null)}
            className={`px-4 py-2 rounded-full text-xs font-bold font-[Outfit] uppercase tracking-wider transition-all border ${activeDay === null
              ? "bg-amber-400/20 text-amber-400 border-amber-400/40"
              : "bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/70"
              }`}
          >
            Tất cả
          </button>
          {[1, 2, 3, 4, 5].map((day) => (
            <button
              key={day}
              onClick={() => filterByDay(day)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-[Outfit] uppercase tracking-wider transition-all border ${activeDay === day
                ? DAY_BG_COLORS[day]
                : "bg-white/5 text-white/50 border-white/10 hover:bg-white/10 hover:text-white/70"
                }`}
            >
              Ngày {day}
            </button>
          ))}
          {/* Add stop button */}
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className={`px-3 py-2 rounded-full text-xs font-bold font-[Outfit] uppercase tracking-wider transition-all border flex items-center gap-1.5 ${showAddForm
              ? "bg-pink-500/20 text-pink-400 border-pink-500/40"
              : "bg-white/5 text-white/50 border-white/10 hover:bg-pink-500/10 hover:text-pink-400 hover:border-pink-500/30"
              }`}
          >
            {showAddForm ? <X className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
            {showAddForm ? "Đóng" : "Thêm điểm"}
          </button>
        </div>
      </div>

      {/* Add stop form */}
      {showAddForm && (
        <div className="container mb-6">
          <div className="bg-[#0a1a20] rounded-2xl border border-pink-500/20 p-5 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Plus className="w-4 h-4 text-pink-400" />
              <span className="font-[Outfit] font-bold text-white text-sm">Thêm điểm dừng mới</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-white/50 text-xs mb-1 block">Tên địa điểm *</label>
                <input
                  type="text"
                  value={newStop.name}
                  onChange={(e) => setNewStop({ ...newStop, name: e.target.value })}
                  placeholder="VD: Hang Lùng Khúy"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-pink-500/40"
                />
              </div>
              <div>
                <label className="text-white/50 text-xs mb-1 block">Ngày</label>
                <select
                  value={newStop.day}
                  onChange={(e) => setNewStop({ ...newStop, day: parseInt(e.target.value) })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-pink-500/40"
                >
                  {[1, 2, 3, 4, 5].map((d) => (
                    <option key={d} value={d} className="bg-[#0a1a20]">Ngày {d}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-white/50 text-xs mb-1 block">Mô tả</label>
                <input
                  type="text"
                  value={newStop.description}
                  onChange={(e) => setNewStop({ ...newStop, description: e.target.value })}
                  placeholder="VD: Hang động đẹp, vé 50k/người"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-pink-500/40"
                />
              </div>
              <div>
                <label className="text-white/50 text-xs mb-1 block">Vĩ độ (Lat) — tùy chọn</label>
                <input
                  type="text"
                  value={newStop.lat}
                  onChange={(e) => setNewStop({ ...newStop, lat: e.target.value })}
                  placeholder="VD: 23.15"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-pink-500/40"
                />
              </div>
              <div>
                <label className="text-white/50 text-xs mb-1 block">Kinh độ (Lng) — tùy chọn</label>
                <input
                  type="text"
                  value={newStop.lng}
                  onChange={(e) => setNewStop({ ...newStop, lng: e.target.value })}
                  placeholder="VD: 105.20"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-pink-500/40"
                />
              </div>
            </div>
            <p className="text-white/30 text-xs mt-2 mb-3">
              Nếu không nhập tọa độ, điểm sẽ được đặt ngẫu nhiên trong khu vực Hà Giang. Bạn có thể tìm tọa độ trên Google Maps.
            </p>
            <button
              onClick={handleAddStop}
              disabled={!newStop.name.trim()}
              className="bg-pink-500/20 hover:bg-pink-500/30 disabled:opacity-30 disabled:cursor-not-allowed text-pink-400 border border-pink-500/30 rounded-lg px-5 py-2 text-sm font-bold font-[Outfit] transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Thêm vào bản đồ
            </button>
          </div>
        </div>
      )}

      {/* Map + sidebar layout */}
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <MapView
              className="w-full h-[400px] md:h-[550px] lg:h-[600px]"
              initialCenter={{ lat: 23.15, lng: 105.20 }}
              initialZoom={10}
              onMapReady={handleMapReady}
            />
            {/* Map legend overlay */}
            <div className="absolute bottom-4 left-4 z-[1000] bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-black/5 shadow-lg">
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px]">
                {Object.entries(DAY_COLORS).map(([day, color]) => (
                  <div key={day} className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: color }} />
                    <span className="text-white/60">Ngày {day}</span>
                  </div>
                ))}
                {customStops.length > 0 && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: "#f472b6" }} />
                    <span className="text-white/60">Tùy chỉnh</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar: stop list with checkboxes */}
          <div className="bg-[#0a1a20] rounded-2xl border border-white/10 overflow-hidden flex flex-col">
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span className="font-[Outfit] font-bold text-white text-sm">
                  {activeDay ? `Ngày ${activeDay}` : "Tất cả"} — {filteredStops.length} điểm
                </span>
              </div>
              <span className="text-emerald-400/60 text-[10px] font-[Outfit] font-bold">
                Tick = đã đến
              </span>
            </div>
            <div className="flex-1 overflow-y-auto max-h-[500px] lg:max-h-[540px]">
              {visibleStops.map((stop) => {
                const visited = visitedStops.has(stop.id);
                const color = stop.isCustom ? "#f472b6" : DAY_COLORS[stop.day] || "#f59e0b";
                return (
                  <div
                    key={stop.id}
                    className={`w-full text-left px-3 py-3 border-b border-white/5 hover:bg-white/5 transition-colors group ${selectedStop?.id === stop.id ? "bg-white/10" : ""
                      } ${visited ? "opacity-60" : ""}`}
                  >
                    <div className="flex items-start gap-2">
                      {/* Checkbox */}
                      <button
                        onClick={(e) => toggleVisited(stop.id, e)}
                        className="shrink-0 mt-1 transition-all hover:scale-110"
                        title={visited ? "Bỏ đánh dấu" : "Đánh dấu đã đến"}
                      >
                        {visited ? (
                          <SquareCheck className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <Square className="w-5 h-5 text-white/25 hover:text-white/50" />
                        )}
                      </button>

                      {/* Day number circle */}
                      <button
                        onClick={() => focusStop(stop)}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                        style={{
                          background: visited ? "#47556920" : `${color}25`,
                          color: visited ? "#64748b" : color,
                          border: `2px solid ${visited ? "#47556940" : `${color}40`}`,
                        }}
                      >
                        {stop.isCustom ? "+" : stop.day}
                      </button>

                      {/* Stop info */}
                      <button onClick={() => focusStop(stop)} className="min-w-0 flex-1 text-left">
                        <div className={`font-semibold text-sm truncate ${visited ? "line-through text-white/40" : "text-white"}`}>
                          {stop.name}
                        </div>
                        <div className="text-white/40 text-xs mt-0.5 line-clamp-1">{stop.description}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="text-[10px] px-1.5 py-0.5 rounded-full"
                            style={{
                              background: visited ? "#47556915" : `${color}15`,
                              color: visited ? "#64748b" : color,
                            }}
                          >
                            {TYPE_LABELS[stop.type]}
                          </span>
                          {stop.mapLink && (
                            <a
                              href={stop.mapLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-[10px] text-amber-400/60 hover:text-amber-400 flex items-center gap-0.5"
                            >
                              <ExternalLink className="w-2.5 h-2.5" /> Maps
                            </a>
                          )}
                        </div>
                      </button>

                      {/* Delete button for custom stops */}
                      {stop.isCustom && (
                        <button
                          onClick={(e) => removeCustomStop(stop.id, e)}
                          className="shrink-0 mt-1 opacity-100 transition-opacity text-red-400/60 hover:text-red-400"
                          title="Xóa điểm tùy chỉnh"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {filteredStops.length > 6 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-4 py-2.5 border-t border-white/10 text-xs text-white/50 hover:text-amber-400 transition-colors flex items-center justify-center gap-1 font-[Outfit] font-bold"
              >
                {isExpanded ? (
                  <>Thu gọn <ChevronUp className="w-3.5 h-3.5" /></>
                ) : (
                  <>Xem tất cả {filteredStops.length} điểm <ChevronDown className="w-3.5 h-3.5" /></>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Route summary below map */}
        <div className="mt-6 bg-[#0a1a20] rounded-2xl border border-white/10 p-5">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="font-[Outfit] font-bold text-white text-sm">Cung đường</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-white/60">
            {["Hà Nội", "TP Hà Giang", "Quản Bạ", "Yên Minh", "Đồng Văn", "Lũng Cú", "Lô Lô Chải", "Mã Pí Lèng", "Mèo Vạc", "Du Già", "TP Hà Giang", "Hà Nội"].map((place, i, arr) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="text-white/80 font-medium">{place}</span>
                {i < arr.length - 1 && <span className="text-amber-400/40">→</span>}
              </span>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-2">Tổng ~600 km xe máy · Không lặp lại cung đường</p>
        </div>
      </div>
    </section>
  );
}
