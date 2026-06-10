# ◈ نوآوران — پلتفرم دیجیتال

یک وب‌اپلیکیشن مدرن ساخته‌شده با Laravel و React که به‌عنوان MVP (حداقل محصول قابل ارائه) برای یک استارتاپ فناوری طراحی شده است.

---

## 📸 تصاویر پروژه

### صفحه اصلی
![Home Page 1](screenshots/home-1.png)
![Home Page 2](screenshots/home-2.png)

### صفحه درباره ما
![About Page](screenshots/about.png)

### صفحه خدمات
![Services Page](screenshots/services.png)

### صفحه تماس
![Contact Page](screenshots/contact.png)

---

## 🛠️ تکنولوژی‌های استفاده‌شده

| لایه | تکنولوژی |
|---|---|
| Backend | Laravel 11 |
| Frontend | React 18 + TypeScript |
| Bridge | Inertia.js |
| Styling | Tailwind CSS v4 |
| Build Tool | Vite |
| محیط توسعه | Laravel Herd |
| Version Control | Git + GitHub |

---

## 📐 معماری پروژه

این پروژه از معماری **Monolithic + SPA** استفاده می‌کند:

- **Laravel** منطق سرور، routing و ارسال داده را مدیریت می‌کند
- **Inertia.js** نقش پل ارتباطی بین Laravel و React را دارد
- **React** رندر صفحات را در سمت کاربر انجام می‌دهد
- **Tailwind CSS v4** استایل‌دهی با سیستم طراحی سفارشی

---

## 🎨 سیستم طراحی و برند

رنگ‌های برند در `resources/css/app.css` با استفاده از `@theme` در Tailwind v4 تعریف شده‌اند:

| نام | کد رنگ | کاربرد |
|---|---|---|
| Primary | `#6C63FF` | دکمه‌ها، لینک‌ها، هایلایت |
| Secondary | `#F50057` | accent و تأکید |
| Brand Dark | `#1A1A2E` | Navbar، Footer، پس‌زمینه تاریک |
| Muted | `#6B7280` | متن‌های فرعی |

فونت اصلی: **Vazirmatn** (برای پشتیبانی از زبان فارسی)

---

## 🚀 صفحات پیاده‌سازی‌شده

- **/** — صفحه اصلی (Hero، ویژگی‌ها، CTA)
- **/about** — درباره ما (داستان، آمار، تیم)
- **/services** — خدمات (لیست سرویس‌ها)
- **/contact** — تماس (فرم ارتباطی)

---

## 💡 متدولوژی توسعه

### Agile
پروژه بر اساس اصول Agile توسعه یافته است — به جای برنامه‌ریزی کامل از ابتدا، کار به بخش‌های کوچک تقسیم شده و به‌صورت تکرارشونده پیش رفته است.

### Scrum
ساختار کار بر اساس Sprint تعریف شد:
- **Sprint 1** — راه‌اندازی پروژه و تنظیم محیط توسعه
- **Sprint 2** — طراحی سیستم رنگ‌بندی و Layout مشترک
- **Sprint 3** — پیاده‌سازی صفحات عمومی

### MVP
این پروژه یک MVP واقعی است — فقط صفحات عمومی ضروری پیاده‌سازی شده‌اند. قابلیت‌های پیشرفته‌تر (احراز هویت، پنل مدیریت، API) در Sprint‌های بعدی اضافه خواهند شد.

---

## ⚙️ نصب و راه‌اندازی

**پیش‌نیازها:**
- PHP 8.2+
- Node.js 20+
- Laravel Herd
- Composer

**مراحل:**

```bash
# کلون پروژه
git clone https://github.com/USERNAME/my-startup.git
cd my-startup

# نصب dependencies
composer install
npm install

# تنظیم env
cp .env.example .env
php artisan key:generate

# اجرای پروژه
npm run dev
```

سپس سایت روی آدرس `http://my-startup.test` در دسترس خواهد بود.

---

## 📁 ساختار پروژه
resources/js/
├── layouts/
│   └── MainLayout.tsx     # Layout مشترک (Navbar + Footer)
├── pages/
│   ├── home.tsx           # صفحه اصلی
│   ├── about.tsx          # درباره ما
│   ├── services.tsx       # خدمات
│   └── contact.tsx        # تماس
app/Http/Controllers/
└── PageController.php     # کنترل routing صفحات

---

## 👤 توسعه دهنده ساسان نیک جو

ساخته‌شده با ❤️ برای ایران سرور