import MainLayout from '@/layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function Home() {
    const features = [
        { icon: '⚡', title: 'توسعه چابک', desc: 'با متدولوژی Agile و Scrum، پروژه‌ها رو سریع و با کیفیت تحویل می‌دیم' },
        { icon: '🎯', title: 'رویکرد MVP', desc: 'اول مهم‌ترین قابلیت‌ها رو می‌سازیم، بعد بر اساس بازخورد رشد می‌دیم' },
        { icon: '🤝', title: 'همکاری مستمر', desc: 'در تمام مراحل کنار شما هستیم و شفافیت کامل داریم' },
    ];

    return (
        <MainLayout>

            {/*  Hero */}
            <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
                
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-secondary blur-3xl" />
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-6">
                        استارتاپ فناوری نوآوران 🚀
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        آینده دیجیتال را
                        <span className="text-primary"> با ما </span>
                        بسازید
                    </h1>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        ما با استفاده از روش‌های Agile و Scrum، بهترین محصولات دیجیتال را
                        برای کسب‌وکار شما طراحی و پیاده‌سازی می‌کنیم
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact"
                            className="bg-primary hover:bg-primary-dark px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105">
                            همین الان شروع کنید
                        </Link>
                        <Link href="/services"
                            className="border border-white/30 hover:border-primary px-8 py-4 rounded-full font-medium text-lg transition-all duration-200">
                            خدمات ما
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-dark mb-4">چرا نوآوران؟</h2>
                    <p className="text-muted max-w-xl mx-auto">
                        ما با تکیه بر اصول چابک، محصول درست رو در زمان درست تحویل می‌دیم
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f) => (
                        <div key={f.title}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 text-center transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                            <div className="text-5xl mb-5">{f.icon}</div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">{f.title}</h3>
                            <p className="text-muted leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary text-white py-20 text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">آماده شروع هستید؟</h2>
                    <p className="mb-8 opacity-90">با ما تماس بگیرید و اولین قدم رو بردارید</p>
                    <Link href="/contact"
                        className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition">
                        تماس با ما
                    </Link>
                </div>
            </section>

        </MainLayout>
    );
}