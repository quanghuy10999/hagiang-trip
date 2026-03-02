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
  returnDate: "23h ngày 15/03/2026",
  totalCost: 27300000,
  costPerPerson: 3412500,
  totalDistance: "~600 km xe máy",
  route: "Hà Nội → TP Hà Giang → Quản Bạ → Yên Minh → Đồng Văn → Lũng Cú → Lô Lô Chải → Mã Pí Lèng → Sông Nho Quế → Mèo Vạc → Du Già → TP Hà Giang → Hà Nội",
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
        location: "Bến xe Mỹ Đình",
        cost: 2500000,
        mapLink: "https://maps.app.goo.gl/BenXeMyDinh",
        note: "Xe khách đi đêm.",
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
        location: "Đi Muôn Nơi Travel (Mã Pì Lèng Travel cũ)",
        distance: "~300 km từ HN",
        cost: 3500000,
        note: "Thuê 4 xe số Honda Wave, 180k/xe/ngày × 4 xe × 4 ngày. Kiểm tra phanh, đèn, lốp, xăng. Nhận giáp bảo hộ.",
        backup: "QT Motorbike (SĐT: 0975.xxx.xxx), Giang Sơn Motorbike",
      },
      {
        time: "05:00–06:30",
        title: "Nghỉ ngơi, vệ sinh cá nhân",
        location: "Quán cà phê gần bến xe / phòng nghỉ tạm",
        cost: 0,
        note: "Rửa mặt, thay đồ, sạc pin. Có thể thuê phòng nghỉ tạm 1-2h (100k/phòng).",
        backup: "Nghỉ tại chỗ thuê xe (nhiều nơi có phòng miễn phí cho khách thuê xe)",
      },
      {
        time: "06:30–07:15",
        title: "Ăn sáng tại TP Hà Giang",
        location: "Quán phở Khanh Hải hoặc Phở Lý Tự Trọng",
        cost: 480000,
        note: "Phở bò Hà Giang nổi tiếng, ~60k/người. Ăn chắc bụng vì cung đường dài.",
        backup: "Bánh cuốn Cô Cúc (78 Trường Chinh) hoặc Bún chả Lý Tự Trọng",
      },
      {
        time: "07:15–08:00",
        title: "Di chuyển, check-in Cột mốc Km0",
        location: "Cột mốc Km0 Hà Giang",
        distance: "~5 km",
        cost: 0,
        note: "Điểm bắt đầu hành trình vòng cung Đông Bắc. Chụp ảnh nhóm kỷ niệm. Miễn phí.",
        backup: "Có thể bỏ qua nếu muốn tiết kiệm thời gian",
      },
      {
        time: "08:00–09:30",
        title: "Di chuyển → Cổng trời Quản Bạ",
        location: "Cổng trời Quản Bạ + Núi Đôi",
        distance: "~46 km",
        cost: 0,
        note: "Đèo đẹp, view Núi Đôi Quản Bạ. Dừng chân 15-20 phút chụp ảnh. Miễn phí.",
        backup: "Nếu trời mù sương thì bỏ qua, đi thẳng Yên Minh",
      },
      {
        time: "09:30–10:00",
        title: "Tham quan Cây cô đơn",
        location: "Cây cô đơn (gần Quản Bạ)",
        distance: "~5 km",
        cost: 0,
        note: "Cây thông đơn độc giữa đồi, rất đẹp để chụp ảnh. Miễn phí.",
        backup: "Bỏ qua nếu hết thời gian",
      },
      {
        time: "10:00–11:30",
        title: "Di chuyển → Yên Minh, nghỉ chân",
        location: "Thị trấn Yên Minh",
        distance: "~50 km",
        cost: 0,
        note: "Đổ xăng, uống nước, vệ sinh. Yên Minh là điểm dừng chân quan trọng giữa cung.",
        backup: "Nếu đói có thể ăn nhẹ tại Yên Minh",
      },
      {
        time: "11:30–12:30",
        title: "Di chuyển qua Dốc Thẩm Mã",
        location: "Dốc Thẩm Mã",
        distance: "~15 km",
        cost: 0,
        note: "Dốc dài 2km, view thung lũng tuyệt đẹp. Dừng chụp ảnh 10-15 phút. Miễn phí.",
        backup: "Bỏ qua nếu hết thời gian",
      },
      {
        time: "12:30–13:30",
        title: "Ăn trưa tại Phố Cáo hoặc Sà Phìn",
        location: "Quán ăn dọc đường Phố Cáo",
        distance: "~10 km",
        cost: 800000,
        note: "Cơm bình dân vùng cao, ~100k/người. Thử gà đen, rau cải mèo.",
        backup: "Nhịn thêm 30 phút ăn trưa tại Đồng Văn (nhiều lựa chọn hơn)",
      },
      {
        time: "13:30–14:15",
        title: "Tham quan Nhà của Pao",
        location: "Nhà của Pao (Sà Phìn)",
        distance: "~5 km",
        cost: 0,
        note: "Bối cảnh phim 'Chuyện của Pao'. Kiến trúc H'Mông cổ. Miễn phí.",
        backup: "Bỏ qua nếu hết thời gian",
      },
      {
        time: "14:15–15:15",
        title: "Tham quan Dinh thự họ Vương",
        location: "Dinh thự Vua Mèo (Sà Phìn)",
        distance: "~2 km",
        cost: 320000,
        note: "Vé 40k/người × 8. Dinh thự hơn 100 năm tuổi, kiến trúc Pháp-Hoa-Mông độc đáo.",
        backup: "Bỏ qua nếu hết thời gian, ưu tiên Phố cổ Đồng Văn",
      },
      {
        time: "15:15–16:30",
        title: "Di chuyển → Phố cổ Đồng Văn",
        location: "Phố cổ Đồng Văn",
        distance: "~15 km",
        cost: 0,
        note: "Dạo phố cổ, chợ Đồng Văn, uống cà phê. Miễn phí.",
        backup: "Nếu muộn thì check-in homestay trước, tối quay lại dạo phố",
      },
      {
        time: "16:30–17:30",
        title: "Check-in homestay",
        location: "Aladdin Homestay Đồng Văn",
        cost: 2000000,
        note: "2 phòng 2 giường. 1000k x 2",
      },
      {
        time: "18:00–19:30",
        title: "Ăn tối",
        location: "Nhà hàng Tiến Nhị (15 đường 3/2, Đồng Văn)",
        cost: 1200000,
        note: "Lẩu gà đen đặc sản, ~150k/người. Đối diện lối vào phố cổ.",
        backup: "Quán bà Tú Lan (125 Tổ 3, phố cổ) hoặc Nhà hàng Đình Trường",
      },
      {
        time: "19:30–21:00",
        title: "Dạo phố cổ Đồng Văn buổi tối",
        location: "Phố cổ Đồng Văn",
        cost: 0,
        note: "Phố cổ đẹp về đêm, uống rượu ngô, thắng cố. Nghỉ ngơi sớm.",
        backup: "Nghỉ tại homestay nếu mệt",
      }
    ],
  },
  {
    id: 3,
    date: "13/03",
    weekday: "Thứ 6",
    title: "Đồng Văn → Lũng Cú → Lô Lô Chải",
    subtitle: "Cực Bắc Tổ quốc → Làng Thèn Pả → Lô Lô Chải",
    totalKm: "~28 km",
    image: LO_LO_CHAI_IMAGE,
    activities: [
      {
        time: "06:30–07:15",
        title: "Ăn sáng",
        location: "Quán bánh cuốn bà Hà (31 phố cổ Đồng Văn)",
        cost: 400000,
        note: "Bánh cuốn trứng lòng đào nổi tiếng, ~50k/người. Ăn chắc bụng.",
        backup: "Quán phở sáng trong phố cổ Đồng Văn",
      },
      {
        time: "07:15–07:30",
        title: "Trả phòng homestay",
        location: "Aladdin Homestay Đồng Văn",
        cost: 0,
        note: "Gửi hành lý lớn tại homestay nếu cần, mang balo nhỏ đi.",
      },
      {
        time: "07:30–08:30",
        title: "Di chuyển → Cột cờ Lũng Cú",
        location: "Cột cờ Lũng Cú (cực Bắc Tổ quốc)",
        distance: "~24 km",
        cost: 400000,
        note: "Vé 50k/người × 8. Leo 839 bậc thang lên đỉnh. View 360° tuyệt đẹp. Mang nước uống.",
        backup: "Nếu sương mù dày, đợi 30 phút hoặc bỏ qua leo lên đỉnh",
      },
      {
        time: "08:30–09:30",
        title: "Tham quan Làng Thèn Pả",
        location: "Làng Thèn Pả (xã Lũng Cú)",
        distance: "~1 km",
        cost: 0,
        note: "Làng người Mông cổ ngay dưới chân núi Rồng. Nhà trình tường, 2 hồ nước 'mắt Rồng'. Miễn phí.",
        backup: "Bỏ qua nếu muốn xuống Lô Lô Chải sớm",
      },
      {
        time: "09:30–10:30",
        title: "Tham quan Làng Lô Lô Chải",
        location: "Làng văn hóa Lô Lô Chải",
        distance: "~1 km",
        cost: 0,
        note: "'Làng du lịch tốt nhất thế giới'. Nhà trình tường, bích họa, dân tộc Lô Lô. Dạo bộ, chụp ảnh. Miễn phí.",
      },
      {
        time: "10:30–11:30",
        title: "Check-in homestay + Nghỉ ngơi",
        location: "Larana Homestay",
        cost: 2400000,
        note: "2 phòng 2 giường. 1200k x 2",
      },
      {
        time: "11:30–12:30",
        title: "Ăn trưa tại Lô Lô Chải",
        location: "Nhà hàng Lô Lô / Homestay",
        cost: 800000,
        note: "Cơm đặc sản Lô Lô, gà đen, rau rừng, ~100k/người. Ăn tại homestay hoặc quán trong làng.",
        backup: "Quán ăn Thèn Pả (ĐT: 0868.702.323)",
      },
      {
        time: "12:30–14:30",
        title: "Lang thang, tận hưởng Lô Lô Chải",
        location: "Làng Lô Lô Chải + Quán cà phê Cực Bắc",
        cost: 0,
        note: "Thả bộ quanh làng, ngắm bích họa, ghé quán cà phê Cực Bắc (biểu tượng Lô Lô Chải). Chụp ảnh thoải mái.",
        backup: "Thuê xe đạp dạo quanh làng",
      },
      {
        time: "14:30–16:00",
        title: "Dạo quanh các bản làng lân cận",
        location: "Khu vực xã Lũng Cú",
        distance: "~3 km",
        cost: 0,
        note: "Đi bộ hoặc xe máy thăm các bản làng xung quanh. Ngắm ruộng bậc thang, hàng rào đá, nhà trình tường cổ.",
        backup: "Quay lại homestay nghỉ ngơi nếu mệt",
      },
      {
        time: "16:00–17:30",
        title: "Ngắm hoàng hôn tại Lô Lô Chải",
        location: "Điểm ngắm hoàng hôn Lô Lô Chải",
        cost: 0,
        note: "Hoàng hôn tại Lô Lô Chải rất đẹp, ánh nắng chiếu qua núi Rồng. Nghỉ ngơi, thư giãn.",
        backup: "Lên đồi gần cột cờ ngắm hoàng hôn",
      },
      {
        time: "18:00–19:30",
        title: "Ăn tối tại homestay",
        location: "Lolo Village Homestay",
        cost: 1200000,
        note: "Cơm homestay đặc sản Lô Lô, gà đen, rau rừng, rượu ngô. ~150k/người.",
        backup: "Nấu ăn tại homestay nếu muốn tiết kiệm",
      },
      {
        time: "19:30–21:00",
        title: "Giao lưu văn hóa, đốt lửa trại",
        location: "Lolo Village Homestay",
        cost: 0,
        note: "Ngồi quanh bếp lửa, uống rượu ngô, nghe kể chuyện dân tộc Lô Lô. Nghỉ sớm, mai dậy sớm.",
        backup: "Nghỉ ngơi tại phòng nếu mệt",
      }
    ],
  },
  {
    id: 4,
    date: "14/03",
    weekday: "Thứ 7",
    title: "Lô Lô Chải → Mã Pí Lèng → Sông Nho Quế → Mèo Vạc",
    subtitle: "Trở lại Đồng Văn → Đèo Mã Pí Lèng → Hẻm Tu Sản → Mèo Vạc",
    totalKm: "~64 km",
    image: HERO_IMAGE,
    activities: [
      {
        time: "06:00–06:45",
        title: "Ăn sáng tại homestay",
        location: "Lolo Village Homestay",
        cost: 400000,
        note: "Bữa sáng homestay, ~50k/người. Xôi, trứng, bánh. Ăn sớm để kịp lịch trình.",
        backup: "Mang đồ ăn sáng mua từ hôm trước",
      },
      {
        time: "06:45–07:00",
        title: "Trả phòng, xuất phát",
        location: "Lolo Village Homestay",
        cost: 0,
        note: "Kiểm tra đồ đạc, trả phòng. Chào tạm biệt Lô Lô Chải.",
      },
      {
        time: "07:00–08:00",
        title: "Di chuyển Lô Lô Chải → Đồng Văn",
        location: "Qua phố cổ Đồng Văn",
        distance: "~24 km",
        cost: 0,
        note: "Quay lại Đồng Văn, đi tiếp hướng Mã Pí Lèng. Có thể dừng mua nước, đồ ăn nhẹ.",
      },
      {
        time: "08:00–09:30",
        title: "Di chuyển qua Đèo Mã Pí Lèng",
        location: "Đèo Mã Pí Lèng",
        distance: "~20 km",
        cost: 0,
        note: "Đèo huyền thoại, 1 trong 4 đèo lớn nhất Việt Nam. Dừng nhiều điểm chụp ảnh dọc đường. Đi chậm, cẩn thận.",
        backup: "Đi chậm, cẩn thận, dừng tại các điểm view đẹp",
      },
      {
        time: "09:30–10:30",
        title: "Nghỉ chân tại Panorama Café",
        location: "Panorama Café (Mã Pí Lèng)",
        cost: 400000,
        note: "Vé vào 30k + đồ uống 40-60k/người. View hẻm Tu Sản + sông Nho Quế tuyệt đẹp. Chụp ảnh thoải mái.",
        backup: "Quán café khác dọc đèo Mã Pí Lèng",
      },
      {
        time: "10:30–11:00",
        title: "Tham quan Hẻm Tu Sản",
        location: "Hẻm Tu Sản (Mèo Vạc)",
        distance: "~5 km",
        cost: 0,
        note: "Hẻm vực sâu nhất Đông Nam Á, dài 1,7km, sâu 1.000m. Ngắm từ trên cao. Miễn phí.",
        backup: "Bỏ qua nếu đã ngắm từ Panorama",
      },
      {
        time: "11:00–12:30",
        title: "Đi thuyền sông Nho Quế",
        location: "Bến thuyền sông Nho Quế",
        distance: "~5 km",
        cost: 1200000,
        note: "Thuyền ~150k/người × 8 = 1.200k. Ngắm hẻm Tu Sản từ dưới sông. Thời gian ~45-60 phút.",
        backup: "Nếu mưa to, bỏ qua thuyền",
      },
      {
        time: "12:30–13:30",
        title: "Ăn trưa ven sông Nho Quế",
        location: "Quán ăn ven bến thuyền sông Nho Quế",
        cost: 800000,
        note: "Cơm bình dân, cá suối, gà đen. ~100k/người.",
        backup: "Nhịn thêm 30 phút ăn trưa tại Mèo Vạc (nhiều lựa chọn hơn)",
      },
      {
        time: "13:30–14:30",
        title: "Di chuyển → Thị trấn Mèo Vạc",
        location: "Thị trấn Mèo Vạc",
        distance: "~10 km",
        cost: 0,
        note: "Đổ xăng, dạo phố Mèo Vạc. Mua đồ dùng cần thiết.",
      },
      {
        time: "14:30–15:30",
        title: "Check-in homestay Mèo Vạc",
        location: "Thào Gia Homestay",
        cost: 1200000,
        note: "2 phòng 2 giường. 600k x 2",
      },
      {
        time: "15:30–17:30",
        title: "Nghỉ ngơi, dạo thị trấn Mèo Vạc",
        location: "Thị trấn Mèo Vạc",
        cost: 0,
        note: "Dạo chợ Mèo Vạc, mua đặc sản. Nghỉ ngơi tại homestay. Chuẩn bị cho ngày mai dậy sớm đi chợ phiên.",
        backup: "Nghỉ tại homestay nếu mệt",
      },
      {
        time: "18:00–19:30",
        title: "Ăn tối tại Mèo Vạc",
        location: "Quán Hải Yến (gần cổng chợ) / Nhà hàng Thanh Phương",
        cost: 1200000,
        note: "Đồ nướng đặc sản vùng cao, ~150k/người. Quán Hải Yến nổi tiếng nướng ngon, giá hợp lý.",
        backup: "Nhà hàng 68, Nhà hàng Xuân Hạc, Quán Tuấn Hen",
      },
      {
        time: "19:30–21:00",
        title: "Nghỉ ngơi sớm",
        location: "Lo Lo Homestay & Cafe Mèo Vạc",
        cost: 0,
        note: "Nghỉ sớm, mai dậy 4h30 đi chợ phiên. Sạc pin, dọn đồ, chuẩn bị hành lý.",
      }
    ],
  },
  {
    id: 5,
    date: "15/03",
    weekday: "Chủ nhật",
    title: "Mèo Vạc (Chợ phiên) → Du Già → TP Hà Giang → Hà Nội",
    subtitle: "Chợ phiên Mèo Vạc → Thác Du Già → HN",
    totalKm: "~150 km xe máy + 300 km xe khách",
    image: DU_GIA_IMAGE,
    activities: [
      {
        time: "04:30–05:00",
        title: "Dậy sớm, chuẩn bị",
        location: "Lo Lo Homestay & Cafe Mèo Vạc",
        cost: 0,
        note: "Dậy sớm, vệ sinh cá nhân, sắp xếp hành lý. Gửi đồ lớn tại homestay.",
      },
      {
        time: "05:00–05:30",
        title: "Ăn sáng nhanh",
        location: "Quán ăn sáng gần chợ Mèo Vạc",
        cost: 400000,
        note: "Ăn sáng nhanh tại quán gần chợ, ~50k/người. Phở, bánh cuốn, xôi.",
        backup: "Ăn sáng tại homestay nếu có",
      },
      {
        time: "05:30–08:00",
        title: "Chợ phiên Mèo Vạc",
        location: "Chợ phiên Mèo Vạc (trung tâm thị trấn)",
        distance: "~1 km",
        cost: 200000,
        note: "CHỦ NHẬT = ĐÚNG NGÀY CHỢ PHIÊN! Đông nhất 6h-8h. Thắng cố, mèn mén, bánh ngô, cháo ấu tẩu. ~25k/người ăn vặt.",
        backup: "Mua đặc sản làm quà: thịt trâu gác bếp, mật ong, thổ cẩm",
      },
      {
        time: "08:00–08:30",
        title: "Trả phòng, xuất phát",
        location: "Lo Lo Homestay & Cafe Mèo Vạc",
        cost: 0,
        note: "Trả phòng, lấy hành lý. Đổ đầy xăng trước khi rời Mèo Vạc.",
      },
      {
        time: "08:30–11:30",
        title: "Di chuyển Mèo Vạc → Du Già",
        location: "Cung đường Mèo Vạc → Mậu Duệ → Du Già",
        distance: "~80 km",
        cost: 0,
        note: "Cung đường đẹp, hoang sơ nhưng hiểm trở. Nhiều cua tay áo. Đi chậm 25-30km/h. Dừng chụp ảnh tại Mậu Duệ.",
        backup: "Nếu đường xấu/mưa, cân nhắc đi chậm hơn. Mang áo mưa sẵn.",
      },
      {
        time: "11:30–12:30",
        title: "Dừng chân tại Du Già + Ăn trưa",
        location: "Quán ăn Du Già (gần thác Du Già)",
        cost: 800000,
        note: "Cơm bình dân, cá suối, gà đen. ~100k/người. Nghỉ ngơi 30 phút.",
        backup: "Ăn tại homestay Du Già nếu quán đóng cửa",
      },
      {
        time: "12:30–13:00",
        title: "Tham quan nhanh thác Du Già",
        location: "Thác Du Già (Thác Bản Ba)",
        distance: "~2 km",
        cost: 0,
        note: "Ghé nhanh thác Du Già, chụp ảnh. Không tắm suối vì cần tiết kiệm thời gian.",
        backup: "Bỏ qua nếu muộn hoặc mưa",
      },
      {
        time: "13:00–16:00",
        title: "Di chuyển Du Già → TP Hà Giang",
        location: "Cung đường Du Già → Đường Thượng → TP Hà Giang",
        distance: "~70 km",
        cost: 0,
        note: "Đi qua Đường Thượng (đường đẹp, cảnh đẹp). ~70km, 3 giờ. KHÔNG đi qua Yên Minh.",
        backup: "Nếu ĐT176 tốt, đi ĐT176 → Bắc Mê → TP Hà Giang (ngắn hơn ~2h nhưng đường xấu hơn)",
      },
      {
        time: "16:00–17:00",
        title: "Trả xe máy, ăn chiều nhẹ, nghỉ ngơi",
        location: "Đi Muôn Nơi Travel + Chợ TP Hà Giang",
        cost: 0,
        note: "Trả xe máy, kiểm tra xe. Mua đặc sản tại chợ hoặc cửa hàng OCOP: phở chua, thịt trâu gác bếp, mật ong.",
      },
      {
        time: "17:00",
        title: "Lên xe khách về Hà Nội",
        location: "Bến xe Hà Giang",
        cost: 2500000,
        note: "Lên xe khách giường nằm chiều về thủ đô.",
      },
      {
        time: "~23:00–00:00",
        title: "Về đến Hà Nội",
        location: "Bến xe Mỹ Đình / Điểm trả khách",
        distance: "~300 km",
        cost: 0,
        note: "Kết thúc chuyến đi. Về nhà nghỉ ngơi.",
      },
    ],
  },
];

export const costBreakdown: CostItem[] = [
  {
    category: "Di chuyển",
    items: [
      { name: "Xe khách HN → HG (lượt đi)", amount: 2500000, detail: "xăng xe/vé khứ hồi ~350k/người × 8 (ước tính)" },
      { name: "Xe khách HG → HN (lượt về)", amount: 2500000, detail: "chiều về x 8" },
      { name: "Thuê xe máy 4 ngày (4 xe)", amount: 3500000, detail: "180k/xe/ngày × 4 xe × 4 ngày (kèm giáp)" },
      { name: "Xăng xe máy (~600km)", amount: 600000, detail: "~150k/xe × 4 xe" },
    ],
  },
  {
    category: "Lưu trú",
    items: [
      { name: "Đêm 1 — Đồng Văn (Aladdin Homestay)", amount: 2000000, detail: "1000k/phòng × 2 phòng" },
      { name: "Đêm 2 — Lô Lô Chải (Larana Homestay)", amount: 2400000, detail: "1200k/phòng × 2 phòng" },
      { name: "Đêm 3 — Mèo Vạc (Thào Gia Homestay)", amount: 1200000, detail: "600k/phòng × 2 phòng" }
    ],
  },
  {
    category: "Ăn uống",
    items: [
      { name: "Ăn sáng (4 bữa)", amount: 1680000, detail: "~50k/người × 8 × 4 + ăn vặt chợ phiên" },
      { name: "Ăn trưa (4 bữa)", amount: 3200000, detail: "~100k/người × 8 × 4" },
      { name: "Ăn tối (3 bữa)", amount: 3600000, detail: "~150k/người/bữa × 8 × 3" },
    ],
  },
  {
    category: "Tham quan & Trải nghiệm",
    items: [
      { name: "Vé tham quan (Lũng Cú, Dinh Vương)", amount: 720000, detail: "90k/người × 8 (vé Lũng Cú 50k, Dinh Vương 40k)" },
      { name: "Đi thuyền sông Nho Quế", amount: 1200000, detail: "~150k/người × 8" },
      { name: "Café Panorama + Chợ phiên Mèo Vạc", amount: 600000, detail: "Panorama 400k + Chợ phiên 200k" },
    ],
  },
  {
    category: "Dự phòng",
    items: [
      { name: "Chi phí phát sinh", amount: 1600000, detail: "200k/người × 8 (lặt vặt, nước dọc đường)" },
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
