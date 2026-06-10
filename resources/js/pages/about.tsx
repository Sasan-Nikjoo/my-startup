import MainLayout from '@/layouts/MainLayout';

export default function About() {
    const team = [
        { name: 'علی رضایی', role: 'مدیر فنی', emoji: '👨‍💻' },
        { name: 'ساسان نیک جو', role: 'طراح UI/UX', emoji: '👩‍🎨' },
        { name: 'اشکان فلاحی', role: 'توسعه‌دهنده ارشد', emoji: '🧑‍💻' },
    ];

    return (
        <MainLayout>
            {/* Header */}
            <section className="bg-brand-dark text-white py-20 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-4">درباره ما</h1>
                    <p className="text-gray-300 text-lg">
                        داستان تیمی که می‌خواد فناوری رو ساده‌تر کنه
                    </p>
                </div>
            </section>

            {/* our story */}
            <section className="max-w-4xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-brand-dark mb-4">داستان ما</h2>
                        <p className="text-muted leading-relaxed mb-4">
                            نوآوران در سال ۱۴۰۲ با هدف کمک به کسب‌وکارهای ایرانی برای
                            ورود به دنیای دیجیتال تأسیس شد.
                        </p>
                        <p className="text-muted leading-relaxed">
                            ما باور داریم که با روش‌های چابک و ارائه MVP،
                            می‌تونیم سریع‌تر از رقبا، محصول بهتری به دست کاربر برسونیم.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { num: '+۵۰', label: 'پروژه موفق', color: 'bg-primary' },
                            { num: '+۳۰', label: 'مشتری راضی', color: 'bg-secondary' },
                            { num: '۳', label: 'سال تجربه', color: 'bg-brand-dark' },
                            { num: '۱۰۰٪', label: 'تعهد کیفیت', color: 'bg-primary' },
                        ].map((s) => (
                            <div key={s.label} className={`${s.color} text-white rounded-2xl p-6 text-center`}>
                                <div className="text-3xl font-bold">{s.num}</div>
                                <div className="text-sm mt-1 opacity-90">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* team */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center text-brand-dark mb-12">تیم ما</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member) => (
                            <div key={member.name} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
                                <div className="text-6xl mb-4">{member.emoji}</div>
                                <h3 className="font-bold text-brand-dark">{member.name}</h3>
                                <p className="text-muted text-sm mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}