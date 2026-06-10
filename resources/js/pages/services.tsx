import MainLayout from '@/layouts/MainLayout';

export default function Services() {
    const services = [
        { icon: '📱', title: 'توسعه وب', desc: 'طراحی و ساخت وب‌اپلیکیشن‌های مدرن با React و Laravel' },
        { icon: '🔄', title: 'مشاوره Agile', desc: 'پیاده‌سازی Scrum و فرآیندهای چابک در تیم شما' },
        { icon: '🎯', title: 'ساخت MVP', desc: 'تبدیل ایده به محصول قابل ارائه در کمترین زمان' },
        { icon: '☁️', title: 'DevOps', desc: 'استقرار و مدیریت زیرساخت ابری' },
    ];

    return (
        <MainLayout>
            <section className="bg-brand-dark text-white py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">خدمات ما</h1>
                <p className="text-gray-300">راه‌حل‌های دیجیتال برای کسب‌وکار شما</p>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((s) => (
                        <div key={s.title} className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300 group">
                            <div className="text-4xl mb-4">{s.icon}</div>
                            <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                            <p className="text-muted leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
}