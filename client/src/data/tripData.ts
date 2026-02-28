/*
 * WINDING ROAD DESIGN — Trip data for Ha Giang 4N3D
 * All costs are for group of 8 people (VND)
 */

export interface Activity {
  time: string;
  title: string;
  location: string;
  distance?: string;
  cost: number;
  mapLink?: string;
  note: string;
  backup?: string;
}

export interface DaySchedule {
  id: number;
  date: string;
  weekday: string;
  title: string;
  subtitle: string;
  totalKm: string;
  image: string;
  activities: Activity[];
}

export interface CostItem {
  category: string;
  items: { name: string; amount: number; detail: string }[];
}

export interface PrepItem {
  category: string;
  icon: string;
  items: { name: string; quantity: string; tip: string }[];
}

export const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388215144/itQHEDxcapVKScZERLtH2T/hero-ha-giang-5STgueDo4FeCgQ8XVxHLmS.webp";
export const DONG_VAN_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388215144/itQHEDxcapVKScZERLtH2T/dong-van-town-DAa8vgAr6KfzNVzAgY2Dqm.webp";
export const LO_LO_CHAI_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388215144/itQHEDxcapVKScZERLtH2T/lo-lo-chai-LK2RdH3JytyKXxFeZiVqgQ.webp";
export const DU_GIA_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663388215144/itQHEDxcapVKScZERLtH2T/du-gia-waterfall-NdF4QVLGHRCKvDLp3xdzTC.webp";

export const tripOverview = {
  totalDays: "4 ngày 3 đêm",
  totalPeople: 8,
  departure: "22h ngày 11/03/2026",
  returnDate: "18h ngày 15/03/2026",
  totalCost: 26200000,
  costPerPerson: 3275000,
  totalDistance: "~600 km xe máy",
  route: "Hà Nội → TP Hà Giang → Quản Bạ → Yên Minh → Đồng Văn → Lũng Cú → Mã Pí Lèng → Mèo Vạc → Du Già → TP Hà Giang → Hà Nội",
};

export const days: DaySchedule[] = [
  {
    id: 1,
    date: "11/03",
    weekday: "Thứ 4",
    title: "Hà Nội → Hà Giang",
    subtitle: "Xuất phát đêm, xe khách giường nằm",
    totalKm: "~300 km xe khách",
    image: HERO_IMAGE,
    activities: [
      {
        time: "22:00",
        title: "Xuất phát từ Hà Nội",
        location: "Bến xe Mỹ Đình / Điểm đón nhà xe Bằng Phấn",
        cost: 2800000,
        mapLink: "https://maps.app.goo.gl/BenXeMyDinh",
        note: "Xe giường nằm Bằng Phấn, 350k/người. Mang nước, đồ ăn nhẹ, gối cổ. Lên xe ngủ luôn.",
        backup: "Nhà xe Hải Vân (20h30), Hưng Thành (21h), Cầu Mế (22h30)",
      },
    ],
  },
  {
    id: 2,
    date: "12/03",
    weekday: "Thứ 5",
    title: "TP Hà Giang → Đồng Văn",
    subtitle: "Km0 → Quản Bạ → Yên Minh → Thẩm Mã → Dinh Vương → Phố cổ",
    totalKm: "~142 km",
    image: DONG_VAN_IMAGE,
    activities: [
      {
        time: "04:00–05:00",
        title: "Đến TP Hà Giang, nhận xe máy",
        location: "Đi Muôn Nơi Travel",
        distance: "~300 km từ HN",
        cost: 2400000,
        mapLink: "https://maps.app.goo.gl/DiMuonNoiTravel",
        note: "Thuê 4 xe số Honda Wave/Future, 200k/xe/ngày × 4 xe × 3 ngày. Kiểm tra phanh, đèn, lốp, xăng.",
        backup: "QT Motorbike, Giang Sơn Motorbike",
      },
      {
        time: "05:00–06:30",
        title: "Nghỉ ngơi, vệ sinh cá nhân",
        location: "Quán cà phê / phòng nghỉ tạm",
        cost: 0,
        note: "Rửa mặt, thay đồ, sạc pin. Nhiều chỗ thuê xe có phòng nghỉ miễn phí.",
      },
      {
        time: "06:30–07:15",
        title: "Ăn sáng tại TP Hà Giang",
        location: "Quán phở Khanh Hải",
        cost: 480000,
        mapLink: "https://maps.app.goo.gl/PhoKhanhHai",
        note: "Phở bò Hà Giang nổi tiếng, ~60k/người. Ăn chắc bụng vì cung đường dài.",
        backup: "Bánh cuốn Cô Cúc (78 Trường Chinh)",
      },
      {
        time: "07:15–08:00",
        title: "Check-in Cột mốc Km0",
        location: "Cột mốc Km0 Hà Giang",
        distance: "~5 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/CotMocKm0HaGiang",
        note: "Điểm bắt đầu hành trình vòng cung Đông Bắc. Chụp ảnh nhóm kỷ niệm.",
      },
      {
        time: "08:00–09:30",
        title: "Cổng trời Quản Bạ + Núi Đôi",
        location: "Cổng trời Quản Bạ",
        distance: "~46 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/CongTroiQuanBa",
        note: "Đèo đẹp, view Núi Đôi Quản Bạ. Dừng chân 15-20 phút chụp ảnh.",
        backup: "Nếu trời mù sương thì bỏ qua, đi thẳng Yên Minh",
      },
      {
        time: "10:00–11:30",
        title: "Di chuyển → Yên Minh",
        location: "Thị trấn Yên Minh",
        distance: "~50 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/YenMinh",
        note: "Đổ xăng, uống nước, vệ sinh. Điểm dừng chân quan trọng giữa cung.",
      },
      {
        time: "11:30–12:30",
        title: "Dốc Thẩm Mã",
        location: "Dốc Thẩm Mã",
        distance: "~15 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/DocThamMa",
        note: "Dốc dài 2km, view thung lũng tuyệt đẹp. Dừng chụp ảnh 10-15 phút.",
      },
      {
        time: "12:30–13:30",
        title: "Ăn trưa",
        location: "Quán ăn dọc đường Phố Cáo",
        distance: "~10 km",
        cost: 800000,
        mapLink: "https://maps.app.goo.gl/PhoCao",
        note: "Cơm bình dân vùng cao, ~100k/người. Thử gà đen, rau cải mèo.",
        backup: "Ăn trưa tại Đồng Văn (nhiều lựa chọn hơn)",
      },
      {
        time: "13:30–14:15",
        title: "Nhà của Pao",
        location: "Nhà của Pao (Sà Phìn)",
        distance: "~5 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/NhaCuaPao",
        note: "Bối cảnh phim 'Chuyện của Pao'. Kiến trúc H'Mông cổ. Miễn phí.",
      },
      {
        time: "14:15–15:15",
        title: "Dinh thự họ Vương",
        location: "Dinh thự Vua Mèo (Sà Phìn)",
        distance: "~2 km",
        cost: 320000,
        mapLink: "https://maps.app.goo.gl/DinhThuHoVuong",
        note: "Vé 40k/người. Dinh thự hơn 100 năm tuổi, kiến trúc Pháp-Hoa-Mông.",
      },
      {
        time: "15:15–16:30",
        title: "Phố cổ Đồng Văn",
        location: "Phố cổ Đồng Văn",
        distance: "~15 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/PhoCoĐongVan",
        note: "Dạo phố cổ, chợ Đồng Văn, uống cà phê.",
      },
      {
        time: "16:30–17:30",
        title: "Check-in homestay",
        location: "Ha Giang Holic Homestay (Đồng Văn)",
        cost: 1200000,
        mapLink: "https://maps.app.goo.gl/HaGiangHolic",
        note: "4 phòng đôi × 300k/phòng. Nhận phòng, tắm rửa.",
        backup: "Đồng Văn Ethnic House, Lá Homestay, Old Quarter Homestay",
      },
      {
        time: "18:00–19:30",
        title: "Ăn tối",
        location: "Nhà hàng Tiến Nhị (15 đường 3/2)",
        cost: 1200000,
        mapLink: "https://maps.app.goo.gl/NhaHangTienNhi",
        note: "Lẩu gà đen đặc sản, ~150k/người. Đối diện lối vào phố cổ.",
        backup: "Quán bà Tú Lan (125 Tổ 3, phố cổ)",
      },
      {
        time: "19:30–21:00",
        title: "Dạo phố cổ buổi tối",
        location: "Phố cổ Đồng Văn",
        cost: 0,
        note: "Phố cổ đẹp về đêm, uống rượu ngô, thắng cố. Nghỉ ngơi sớm.",
      },
    ],
  },
  {
    id: 3,
    date: "13/03",
    weekday: "Thứ 6",
    title: "Đồng Văn → Lũng Cú → Mã Pí Lèng → Mèo Vạc",
    subtitle: "Cực Bắc Tổ quốc → Lô Lô Chải → Hẻm Tu Sản → Sông Nho Quế",
    totalKm: "~90 km",
    image: LO_LO_CHAI_IMAGE,
    activities: [
      {
        time: "06:30–07:15",
        title: "Ăn sáng",
        location: "Quán bánh cuốn bà Hà (31 phố cổ Đồng Văn)",
        cost: 400000,
        mapLink: "https://maps.app.goo.gl/BanhCuonBaHa",
        note: "Bánh cuốn trứng lòng đào nổi tiếng, ~50k/người.",
        backup: "Quán phở sáng trong phố cổ Đồng Văn",
      },
      {
        time: "07:30–08:30",
        title: "Cột cờ Lũng Cú",
        location: "Cột cờ Lũng Cú (cực Bắc Tổ quốc)",
        distance: "~24 km",
        cost: 400000,
        mapLink: "https://maps.app.goo.gl/CotCoLungCu",
        note: "Vé 50k/người. Leo 839 bậc thang lên đỉnh. View 360° tuyệt đẹp.",
        backup: "Nếu sương mù dày, đợi 30 phút hoặc bỏ qua leo đỉnh",
      },
      {
        time: "08:30–10:30",
        title: "Làng Lô Lô Chải",
        location: "Làng văn hóa Lô Lô Chải",
        distance: "~3 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/LoLoChaiVillage",
        note: "Làng dân tộc Lô Lô cổ, nhà trình tường, bích họa. Giao lưu văn hóa.",
      },
      {
        time: "10:30–11:00",
        title: "Check-in homestay Lô Lô Chải",
        location: "Lolo Village Homestay",
        cost: 1600000,
        mapLink: "https://maps.app.goo.gl/LoloVillageHomestay",
        note: "4 phòng đôi × 400k/phòng. Gửi đồ, lấy phòng.",
        backup: "À Lôi Homestay, Auberge de Meovac",
      },
      {
        time: "11:00–12:00",
        title: "Đèo Mã Pí Lèng",
        location: "Đèo Mã Pí Lèng",
        distance: "~44 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/MaPiLeng",
        note: "Đèo huyền thoại, 1 trong 4 đèo lớn nhất Việt Nam. Dừng nhiều điểm chụp ảnh.",
      },
      {
        time: "12:00–13:00",
        title: "Panorama Café",
        location: "Panorama Café (Mã Pí Lèng)",
        cost: 400000,
        mapLink: "https://maps.app.goo.gl/PanoramaCafe",
        note: "Café view hẻm Tu Sản + sông Nho Quế. ~50k/người đồ uống.",
      },
      {
        time: "13:00–14:30",
        title: "Đi thuyền sông Nho Quế + Ăn trưa",
        location: "Bến thuyền sông Nho Quế",
        distance: "~10 km",
        cost: 2800000,
        mapLink: "https://maps.app.goo.gl/SongNhoQue",
        note: "Thuyền ~150k/người + ăn trưa ven sông ~200k/người. Tổng ~350k/người.",
        backup: "Nếu mưa to, bỏ qua thuyền, ăn trưa tại Mèo Vạc",
      },
      {
        time: "14:30–15:30",
        title: "Dạo thị trấn Mèo Vạc",
        location: "Thị trấn Mèo Vạc",
        distance: "~20 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/MeoVac",
        note: "Dạo chợ Mèo Vạc, mua đặc sản. Đổ xăng.",
      },
      {
        time: "15:30–17:00",
        title: "Quay về Lô Lô Chải",
        location: "Lolo Village Homestay",
        distance: "~44 km",
        cost: 0,
        note: "Quay lại homestay. Tắm rửa, nghỉ ngơi. Ngắm hoàng hôn tại làng.",
        backup: "Nếu muộn, ngủ lại Mèo Vạc thay vì quay về",
      },
      {
        time: "18:00–19:30",
        title: "Ăn tối tại homestay",
        location: "Lolo Village Homestay",
        cost: 1200000,
        note: "Cơm homestay đặc sản Lô Lô, ~150k/người. Gà đen, rau rừng, rượu ngô.",
      },
      {
        time: "19:30–21:00",
        title: "Giao lưu văn hóa, đốt lửa trại",
        location: "Lolo Village Homestay",
        cost: 0,
        note: "Ngồi quanh bếp lửa, uống rượu ngô, nghe kể chuyện dân tộc Lô Lô.",
      },
    ],
  },
  {
    id: 4,
    date: "14/03",
    weekday: "Thứ 7",
    title: "Lô Lô Chải → Mèo Vạc → Du Già",
    subtitle: "Chợ phiên Mèo Vạc (thứ 7!) → Hẻm Tu Sản → Thác Du Già",
    totalKm: "~140 km",
    image: DU_GIA_IMAGE,
    activities: [
      {
        time: "06:30–07:15",
        title: "Ăn sáng tại homestay",
        location: "Lolo Village Homestay",
        cost: 400000,
        note: "Bữa sáng homestay, ~50k/người. Xôi, trứng, bánh.",
      },
      {
        time: "07:30–08:30",
        title: "Di chuyển → Mèo Vạc",
        location: "Qua đèo Mã Pí Lèng (chiều ngược)",
        distance: "~44 km",
        cost: 0,
        note: "Đi qua Mã Pí Lèng chiều ngược lại, view khác.",
      },
      {
        time: "08:30–09:30",
        title: "Chợ phiên Mèo Vạc",
        location: "Chợ phiên Mèo Vạc",
        cost: 200000,
        mapLink: "https://maps.app.goo.gl/ChoPhienMeoVac",
        note: "THỨ 7 CÓ CHỢ PHIÊN! Đặc sắc nhất vùng cao. Mua đặc sản, đồ lưu niệm.",
      },
      {
        time: "09:30–10:00",
        title: "Hẻm Tu Sản",
        location: "Hẻm Tu Sản (Mèo Vạc)",
        distance: "~5 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/HemTuSan",
        note: "Hẻm vực sâu nhất Đông Nam Á. Chụp ảnh.",
      },
      {
        time: "10:00–12:00",
        title: "Di chuyển Mèo Vạc → Du Già",
        location: "Cung đường Mèo Vạc → Mậu Duệ → Du Già",
        distance: "~72 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/DuGia",
        note: "Cung đường đẹp, hoang sơ. Đường khó, đi cẩn thận.",
        backup: "Nếu đường xấu/mưa, đi Mèo Vạc → Yên Minh → Du Già",
      },
      {
        time: "12:00–13:00",
        title: "Ăn trưa tại Du Già",
        location: "Quán ăn Du Già",
        cost: 800000,
        note: "Cơm bình dân, cá suối, gà đen. ~100k/người.",
        backup: "Ăn tại homestay Du Già",
      },
      {
        time: "13:00–14:30",
        title: "Thác Du Già",
        location: "Thác Du Già (Thác Bản Ba)",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/ThacDuGia",
        note: "Thác nước đẹp giữa rừng. Tắm suối nếu thời tiết đẹp.",
        backup: "Bỏ qua nếu mưa hoặc nước lớn",
      },
      {
        time: "15:30–16:30",
        title: "Check-in homestay Du Già",
        location: "Du Gia Stream Lodge",
        cost: 1400000,
        mapLink: "https://maps.app.goo.gl/DuGiaStreamLodge",
        note: "4 phòng đôi × 350k/phòng. View suối, yên tĩnh.",
        backup: "Local Homestay Du Gia, Du Gia Family Homestay",
      },
      {
        time: "16:30–18:00",
        title: "Nghỉ ngơi, tắm suối",
        location: "Khu vực suối gần homestay",
        cost: 0,
        note: "Tắm suối, thư giãn. Ngắm hoàng hôn tại Du Già.",
      },
      {
        time: "18:30–20:00",
        title: "Ăn tối tại homestay",
        location: "Du Gia Stream Lodge",
        cost: 1200000,
        note: "Cơm homestay, cá suối nướng, lẩu gà đen. ~150k/người.",
      },
    ],
  },
  {
    id: 5,
    date: "15/03",
    weekday: "Chủ nhật",
    title: "Du Già → TP Hà Giang → Hà Nội",
    subtitle: "Trả xe máy, mua đặc sản, xe khách về Hà Nội",
    totalKm: "~150 km xe máy + 300 km xe khách",
    image: HERO_IMAGE,
    activities: [
      {
        time: "06:30–07:15",
        title: "Ăn sáng tại homestay",
        location: "Du Gia Stream Lodge",
        cost: 400000,
        note: "Bữa sáng nhẹ, ~50k/người.",
      },
      {
        time: "07:30–11:30",
        title: "Di chuyển Du Già → TP Hà Giang",
        location: "Du Già → Yên Minh → TP Hà Giang",
        distance: "~150 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/HaGiangCity",
        note: "Đường dài ~150km, đi khoảng 4 tiếng. Dừng chân 1-2 lần.",
        backup: "Dừng tham quan thêm tại Lũng Hồ hoặc Quản Bạ",
      },
      {
        time: "11:30–12:30",
        title: "Ăn trưa tại TP Hà Giang",
        location: "Nhà hàng Bếp Việt (87E Nguyễn Thái Học)",
        cost: 1200000,
        mapLink: "https://maps.app.goo.gl/BepVietHaGiang",
        note: "Bữa trưa cuối cùng tại Hà Giang. ~150k/người.",
        backup: "Nhà hàng Bản Nguyên hoặc Lẩu Dê Đức Hiến",
      },
      {
        time: "12:30–13:30",
        title: "Trả xe máy, mua đặc sản",
        location: "Đi Muôn Nơi Travel + Chợ TP Hà Giang",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/DiMuonNoiTravel",
        note: "Trả 4 xe máy, nhận lại cọc. Mua mật ong bạc hà, thịt bò khô, rượu ngô.",
      },
      {
        time: "14:00–14:30",
        title: "Lên xe khách về Hà Nội",
        location: "Bến xe Hà Giang / Nhà xe Bằng Phấn",
        cost: 2800000,
        mapLink: "https://maps.app.goo.gl/BenXeHaGiang",
        note: "Xe giường nằm Bằng Phấn, 350k/người.",
        backup: "Nhà xe Hải Vân, Hưng Thành, Cầu Mế",
      },
      {
        time: "~18:00–20:00",
        title: "Về đến Hà Nội",
        location: "Bến xe Mỹ Đình",
        distance: "~300 km",
        cost: 0,
        mapLink: "https://maps.app.goo.gl/BenXeMyDinh",
        note: "Kết thúc chuyến đi. Về nhà nghỉ ngơi!",
      },
    ],
  },
];

export const costBreakdown: CostItem[] = [
  {
    category: "Di chuyển",
    items: [
      { name: "Xe khách HN → HG (lượt đi)", amount: 2800000, detail: "350k/người × 8" },
      { name: "Xe khách HG → HN (lượt về)", amount: 2800000, detail: "350k/người × 8" },
      { name: "Thuê xe máy 3 ngày (4 xe)", amount: 2400000, detail: "200k/xe/ngày × 4 xe × 3 ngày" },
      { name: "Xăng xe máy (~600km)", amount: 600000, detail: "~150k/xe × 4 xe" },
    ],
  },
  {
    category: "Lưu trú",
    items: [
      { name: "Đêm 1 — Đồng Văn", amount: 1200000, detail: "300k/phòng × 4 phòng" },
      { name: "Đêm 2 — Lô Lô Chải", amount: 1600000, detail: "400k/phòng × 4 phòng" },
      { name: "Đêm 3 — Du Già", amount: 1400000, detail: "350k/phòng × 4 phòng" },
    ],
  },
  {
    category: "Ăn uống",
    items: [
      { name: "Ăn sáng (4 bữa)", amount: 1680000, detail: "~50-60k/người/bữa × 8 × 4" },
      { name: "Ăn trưa (4 bữa, gồm thuyền NQ)", amount: 4000000, detail: "~100-150k/người/bữa × 8 × 4" },
      { name: "Ăn tối (3 bữa)", amount: 3600000, detail: "~150k/người/bữa × 8 × 3" },
    ],
  },
  {
    category: "Tham quan & Trải nghiệm",
    items: [
      { name: "Vé tham quan (Lũng Cú, Dinh Vương)", amount: 720000, detail: "90k/người × 8" },
      { name: "Đi thuyền sông Nho Quế", amount: 1200000, detail: "~150k/người × 8" },
      { name: "Café Panorama + đồ uống", amount: 600000, detail: "~75k/người × 8" },
    ],
  },
  {
    category: "Dự phòng",
    items: [
      { name: "Chi phí phát sinh", amount: 1600000, detail: "200k/người × 8 (ăn vặt, nước, lặt vặt)" },
    ],
  },
];

export const prepCategories: PrepItem[] = [
  {
    category: "Trang phục & Phụ kiện",
    icon: "👕",
    items: [
      { name: "Áo khoác gió / áo giữ nhiệt", quantity: "1-2 cái", tip: "Tháng 3 sáng sớm 8-12°C, trưa 18-22°C. Đi xe máy gió lạnh." },
      { name: "Áo mưa (loại bộ)", quantity: "1 bộ/người", tip: "Tháng 3 hay mưa phùn. Áo mưa bộ tiện hơn poncho khi đi xe máy." },
      { name: "Quần dài (jean/kaki)", quantity: "2-3 cái", tip: "Tránh quần short khi đi xe máy, dễ cháy ống bô." },
      { name: "Giày thể thao bám đường", quantity: "1 đôi", tip: "KHÔNG đi dép lê/sandal. Đường đèo trơn, cần giày bám." },
      { name: "Găng tay (loại có grip)", quantity: "1 đôi", tip: "Giữ ấm tay + bám tay lái tốt hơn." },
      { name: "Khăn buff đa năng", quantity: "1-2 cái", tip: "Che gió, bụi, giữ ấm cổ khi đi xe máy trên đèo." },
      { name: "Kính râm / kính chắn gió", quantity: "1 cái", tip: "Bảo vệ mắt khỏi gió, bụi, nắng." },
    ],
  },
  {
    category: "Thuốc men & Y tế",
    icon: "💊",
    items: [
      { name: "Thuốc say xe (Nautamine)", quantity: "1 vỉ", tip: "Uống trước 30 phút khi lên xe khách." },
      { name: "Paracetamol (hạ sốt, đau đầu)", quantity: "1 vỉ", tip: "Phòng cảm lạnh, nhức đầu do thay đổi độ cao." },
      { name: "Thuốc tiêu hóa, đau bụng", quantity: "1 vỉ", tip: "Ăn đồ lạ, nước lạ có thể bị đau bụng." },
      { name: "Băng cá nhân, cồn sát trùng", quantity: "1 bộ nhỏ", tip: "Phòng trầy xước khi leo núi, đi bộ." },
      { name: "Kem chống nắng SPF50+", quantity: "1 tuýp", tip: "Nắng vùng cao rất gắt dù trời lạnh." },
      { name: "Son dưỡng môi", quantity: "1 cái", tip: "Gió lạnh khiến môi nứt nẻ rất nhanh." },
    ],
  },
  {
    category: "Thiết bị & Đồ dùng",
    icon: "🎒",
    items: [
      { name: "Sạc dự phòng (≥10.000mAh)", quantity: "1 cái", tip: "Nhiều homestay điện yếu hoặc ít ổ cắm." },
      { name: "Điện thoại + cáp sạc", quantity: "1 bộ", tip: "Tải sẵn Google Maps offline. Mạng Viettel tốt nhất." },
      { name: "Túi zip-lock chống nước", quantity: "5-10 cái", tip: "Bọc điện thoại, giấy tờ, tiền khi trời mưa. RẤT QUAN TRỌNG." },
      { name: "Balo chống nước 20-30L", quantity: "1 cái", tip: "Đựng đồ cá nhân khi đi xe máy. Không nên dùng vali." },
      { name: "Đèn pin nhỏ / đèn đội đầu", quantity: "1 cái", tip: "Một số homestay vùng cao điện yếu." },
    ],
  },
  {
    category: "Giấy tờ & Tài chính",
    icon: "💳",
    items: [
      { name: "CCCD / CMND gốc", quantity: "1 cái", tip: "Bắt buộc để thuê xe máy + check-in homestay." },
      { name: "Bằng lái xe máy (A1/A2)", quantity: "1 cái", tip: "Cần thiết nếu bị kiểm tra. Người lái phải có bằng." },
      { name: "Tiền mặt", quantity: "1-1.5 triệu/người", tip: "Nhiều nơi KHÔNG có ATM, KHÔNG chấp nhận chuyển khoản." },
    ],
  },
  {
    category: "Đồ ăn mang theo",
    icon: "🍫",
    items: [
      { name: "Nước lọc (chai 500ml)", quantity: "2-3 chai/người/ngày", tip: "Mua sẵn tại TP Hà Giang. Dọc đường ít cửa hàng." },
      { name: "Bánh quy, kẹo, socola, hạt", quantity: "1 túi nhỏ/người", tip: "Ăn dọc đường khi đói, bổ sung năng lượng nhanh." },
      { name: "Trà gừng / gừng tươi", quantity: "1 túi nhỏ", tip: "Chống lạnh, chống say xe rất hiệu quả." },
    ],
  },
];

export const criticalTips = [
  { icon: "📱", title: "Tải Google Maps OFFLINE", desc: "Tải bản đồ offline toàn bộ tỉnh Hà Giang. Nhiều đoạn mất sóng hoàn toàn." },
  { icon: "📶", title: "Dùng mạng Viettel", desc: "Viettel phủ sóng tốt nhất tại Hà Giang. Mobi và Vina mất sóng nhiều đoạn." },
  { icon: "⛽", title: "Đổ xăng NGAY khi thấy cây xăng", desc: "Cây xăng rất thưa, có đoạn 50-70km không có cây xăng." },
  { icon: "🌙", title: "Không lái xe khi trời tối", desc: "Đường đèo không có đèn, sương mù, rất nguy hiểm." },
  { icon: "🐌", title: "Đi chậm, an toàn", desc: "Đường đèo hẹp, nhiều cua gấp, xe tải ngược chiều. Tối đa 30-40km/h." },
  { icon: "🦺", title: "Mang giáp bảo hộ", desc: "Thuê cùng xe máy. Bảo vệ đầu gối, khuỷu tay, lưng." },
  { icon: "🌤️", title: "Kiểm tra thời tiết mỗi ngày", desc: "Nếu mưa to, điều chỉnh lịch trình. An toàn là trên hết." },
  { icon: "📞", title: "Lưu số điện thoại quan trọng", desc: "SĐT nhà xe, chỗ thuê xe, homestay, cấp cứu 115." },
];
