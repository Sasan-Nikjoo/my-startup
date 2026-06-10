import MainLayout from '@/layouts/MainLayout';
import { useState } from 'react';

export default function Contact() {
    const [sent, setSent] = useState(false);

    return (
        <MainLayout>
            <section className="bg-brand-dark text-white py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">تماس با ما</h1>
                <p className="text-gray-300">آماده‌ایم تا باهم پروژه‌ات رو شروع کنیم</p>
            </section>

            <section className="max-w-2xl mx-auto px-6 py-20">
                {sent ? (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">✅</div>
                        <h2 className="text-2xl font-bold text-brand-dark">پیام شما ارسال شد!</h2>
                        <p className="text-muted mt-2">به زودی با شما تماس می‌گیریم</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-1">نام و نام خانوادگی</label>
                                <input type="text" placeholder="علی رضایی"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-1">ایمیل</label>
                                <input type="email" placeholder="example@email.com"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-1">پیام</label>
                                <textarea rows={5} placeholder="چطور می‌تونیم کمکتون کنیم؟"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none" />
                            </div>
                            <button onClick={() => setSent(true)}
                                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02]">
                                ارسال پیام
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </MainLayout>
    );
}