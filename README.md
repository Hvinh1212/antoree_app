# Sàn Giáo Dục Trực Tuyến

Đây là dự án web sàn giáo dục trực tuyến, nơi học viên có thể tìm kiếm, đăng ký các khoá học chất lượng, kết nối với giáo viên uy tín và quản lý lộ trình học tập của mình.

## Tính năng nổi bật
- Khám phá khoá học đa lĩnh vực
- Gợi ý khoá học phù hợp dựa trên lịch sử và sở thích
- Danh sách yêu thích, lịch sử học tập
- Giao diện hiện đại, responsive, dễ sử dụng

## Công nghệ sử dụng
- ReactJS 
- React Router DOM
- TailwindCSS
- FontAwesome
- LocalStorage (lưu trạng thái yêu thích, lịch sử)

## 📁 Cấu trúc thư mục
```
├── public/
│   └── ...
├── src/
│   ├── assets/           # Hình ảnh, banner, avatar
│   ├── components/       # Các component dùng chung (ProductCard, ProductList, ...)
│   ├── layouts/          # Header, Footer
│   ├── pages/            # Trang chính: Home, About, AllProducts, Wishlist, History
│   ├── routes/           # Định tuyến
│   └── index.jsx         # Điểm vào ứng dụng
├── package.json
└── README.md
```

## Hướng dẫn cài đặt & sử dụng

### 1. Clone project về máy
```bash
git clone <repo-url>
cd antoree_app
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Chạy ứng dụng
```bash
npm start
```
Sau đó truy cập [http://localhost:3000](http://localhost:3000) trên trình duyệt.

### 4. Build production
```bash
npm run build
```


