# Auth Module Guide

Dự án NestJS với module Auth cơ bản đã được tạo thành công!

## Cấu trúc Auth Module

```
src/auth/
├── dto/
│   └── auth.dto.ts          # Data Transfer Objects
├── auth.controller.ts       # Auth endpoints
├── auth.service.ts          # Auth business logic
└── auth.module.ts          # Auth module configuration
```

## API Endpoints

### 1. Kiểm tra trạng thái Auth
```
GET /auth/status
```

### 2. Đăng nhập
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### 3. Đăng ký
```
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "User Name"
}
```

### 4. Lấy thông tin profile
```
GET /auth/profile/1
```

## Cách chạy dự án

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy development server:
```bash
npm run start:dev
```

3. Truy cập: http://localhost:3000

## Ghi chú

- Đây là version cơ bản, chưa có validation thực sự
- JWT token hiện tại chỉ là mock data
- Chưa có database connection
- Chưa có password hashing
- Chưa có authentication guards

## Next Steps

Để phát triển thêm, bạn có thể:
- Thêm class-validator cho DTOs
- Tích hợp database (TypeORM/Prisma)
- Implement JWT thật sự
- Thêm password hashing với bcrypt
- Tạo guards và strategies
