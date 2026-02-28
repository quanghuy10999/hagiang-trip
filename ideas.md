# Brainstorm Thiết Kế — Trang Web Lịch Trình Hà Giang

## Bối cảnh
Trang web tổng hợp lịch trình du lịch Hà Giang 4N3Đ cho nhóm 8 người. Cần hiển thị: lịch trình theo ngày, chi phí chi tiết, danh sách chuẩn bị, tips quan trọng. Đối tượng: nhóm bạn trẻ, cần giao diện dễ đọc trên mobile lẫn desktop.

---

<response>
<idea>

## Ý tưởng 1: "Topographic Journey" — Phong cách Bản đồ Địa hình

**Design Movement**: Cartographic Modernism — lấy cảm hứng từ bản đồ địa hình, đường đồng mức, và hệ thống wayfinding.

**Core Principles**:
1. Đường đồng mức (contour lines) làm motif xuyên suốt — gợi nhớ núi non Hà Giang
2. Thông tin phân tầng rõ ràng theo độ cao (hierarchy = elevation)
3. Màu sắc lấy từ bản đồ thực tế: xanh lá đậm, nâu đất, xanh sông nước

**Color Philosophy**: Bảng màu "Earth Terrain" — xanh rêu đậm (#2D5016) cho núi rừng, nâu ấm (#8B6914) cho đất đá, xanh ngọc (#1A6B5C) cho sông suối, trắng kem (#F5F0E8) cho nền giấy bản đồ cũ.

**Layout Paradigm**: Vertical scroll dạng "hành trình leo núi" — mỗi ngày là một "tầng cao" khác nhau, scroll xuống = đi sâu vào hành trình. Sidebar cố định bên trái hiển thị mini-map tiến trình.

**Signature Elements**:
- Đường contour SVG animated chạy dọc background
- Marker pins kiểu bản đồ cho mỗi điểm đến
- Progress bar dạng đường đèo uốn lượn

**Interaction Philosophy**: Hover vào điểm đến → hiện tooltip với thông tin chi tiết. Click vào ngày → smooth scroll đến section tương ứng.

**Animation**: Contour lines nhẹ nhàng pulse, markers bounce nhẹ khi scroll vào view, sections fade-in từ dưới lên.

**Typography System**: Heading dùng font condensed bold (Barlow Condensed), body dùng font humanist (Source Sans 3). Số liệu dùng monospace (JetBrains Mono).

</idea>
<probability>0.07</probability>
<text>Phong cách bản đồ địa hình với đường contour, marker pins, và bảng màu đất núi rừng.</text>
</response>

<response>
<idea>

## Ý tưởng 2: "Mountain Journal" — Phong cách Nhật Ký Hành Trình

**Design Movement**: Editorial Travel Design — kết hợp giữa tạp chí du lịch cao cấp và sổ tay ghi chép cá nhân.

**Core Principles**:
1. Mỗi ngày là một "trang nhật ký" với layout editorial khác nhau
2. Ảnh lớn full-bleed xen kẽ với typography mạnh mẽ
3. Chi tiết thực tế (giá, khoảng cách) được trình bày như annotation bên lề

**Color Philosophy**: "Misty Highlands" — nền trắng ngà (#FAFAF7) với accent xanh đậm (#1B3A4B) cho heading, cam ấm (#D4763B) cho highlight quan trọng, xám đá (#6B7280) cho body text. Gợi cảm giác sương mù buổi sáng trên cao nguyên đá.

**Layout Paradigm**: Magazine-style asymmetric grid — text và hình ảnh đan xen không đối xứng. Timeline dọc bên trái với các node tròn. Mỗi section có layout riêng biệt nhưng thống nhất về rhythm.

**Signature Elements**:
- Timeline dọc với node tròn và đường kẻ dashed
- Card thông tin dạng "sticky note" nghiêng nhẹ cho tips
- Badge nhỏ cho chi phí, khoảng cách

**Interaction Philosophy**: Scroll-triggered reveal — nội dung hiện dần khi cuộn. Click vào timeline node → jump đến section. Tabs cho chuyển đổi giữa Lịch trình / Chi phí / Chuẩn bị.

**Animation**: Staggered fade-in cho các card, subtle parallax cho hero image, smooth counter animation cho số tiền.

**Typography System**: Display heading dùng Playfair Display (serif, sang trọng), body dùng Inter hoặc DM Sans (clean, dễ đọc). Accent text dùng handwriting font cho cảm giác nhật ký.

</idea>
<probability>0.06</probability>
<text>Phong cách nhật ký hành trình editorial với timeline dọc, layout bất đối xứng, và typography magazine.</text>
</response>

<response>
<idea>

## Ý tưởng 3: "Winding Road" — Phong cách Con Đường Uốn Lượn

**Design Movement**: Kinetic Wayfinding — thiết kế lấy cảm hứng từ cung đường đèo Hà Giang, con đường là nhân vật chính.

**Core Principles**:
1. Đường cong (curves) là ngôn ngữ thiết kế chủ đạo — không có góc vuông
2. Chuyển động liên tục (continuous flow) — scroll = lái xe trên đèo
3. Tương phản mạnh giữa không gian rộng (núi) và thông tin cô đọng (biển báo)

**Color Philosophy**: "Dusk on the Pass" — gradient từ xanh đậm (#0F2027) qua teal (#203A43) đến xanh nhạt (#2C5364) cho background sections. Vàng amber (#F59E0B) cho CTA và highlight — như ánh đèn xe trong đêm. Trắng (#FFFFFF) cho text trên nền tối.

**Layout Paradigm**: Full-width sections xen kẽ sáng-tối, mỗi section có clip-path cong tạo cảm giác đường đèo. Nội dung centered nhưng stagger left-right xen kẽ. Hero section toàn màn hình với parallax.

**Signature Elements**:
- SVG path animated mô phỏng cung đường vòng cung Hà Giang
- Clip-path curves giữa các section
- Icon set custom dạng road sign (biển báo đường)

**Interaction Philosophy**: Smooth scroll với snap points tại mỗi ngày. Hover effects mượt mà. Navigation dạng floating dots bên phải — như cột mốc km.

**Animation**: SVG path draw animation cho route map, parallax layers cho depth, counter animation cho chi phí, staggered card reveals.

**Typography System**: Heading dùng Outfit (geometric sans, hiện đại, mạnh mẽ), body dùng Nunito Sans (rounded, thân thiện). Số liệu dùng Outfit Bold.

</idea>
<probability>0.08</probability>
<text>Phong cách con đường uốn lượn với gradient tối, SVG path animated, clip-path curves, và cảm giác lái xe trên đèo.</text>
</response>

---

## Lựa chọn: Ý tưởng 3 — "Winding Road"

Lý do: Phong cách này phù hợp nhất với tinh thần chuyến đi Hà Giang — cung đường đèo là linh hồn của hành trình. Gradient tối tạo cảm giác huyền bí, mạnh mẽ, phù hợp với vùng cao nguyên đá. SVG animated path sẽ tạo ấn tượng mạnh ngay từ hero section. Layout full-width sections phù hợp để hiển thị lượng thông tin lớn mà không bị rối.
