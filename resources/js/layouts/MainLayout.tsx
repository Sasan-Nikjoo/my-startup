import { Link } from '@inertiajs/react';
import { ReactNode, useState } from 'react';

interface Props {
    children: ReactNode;
}

export default function MainLayout({ children }: Props) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-brand-light font-sans" dir="rtl">

            {/* Navbar */}
            <nav className="bg-brand-dark text-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    {/* logo */}
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                        <span className="text-primary text-2xl">◈</span>
                        <span>نوآوران</span>
                    </Link>

                    {/*  menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="hover:text-primary transition-colors duration-200">خانه</Link>
                        <Link href="/about" className="hover:text-primary transition-colors duration-200">درباره ما</Link>
                        <Link href="/services" className="hover:text-primary transition-colors duration-200">خدمات</Link>
                        <Link href="/contact"
                            className="bg-primary hover:bg-primary-dark px-5 py-2 rounded-full transition-colors duration-200 font-medium">
                            تماس با ما
                        </Link>
                    </div>

                    {/*  mobile */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/*  mobile menu */}
                {menuOpen && (
                    <div className="md:hidden bg-brand-dark border-t border-gray-700 px-6 py-4 flex flex-col gap-4">
                        <Link href="/" onClick={() => setMenuOpen(false)}>خانه</Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)}>درباره ما</Link>
                        <Link href="/services" onClick={() => setMenuOpen(false)}>خدمات</Link>
                        <Link href="/contact" onClick={() => setMenuOpen(false)}>تماس با ما</Link>
                    </div>
                )}
            </nav>

            {/* content */}
            <main>{children}</main>

            {/* footer */}
            <footer className="bg-brand-dark text-white mt-20">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-2 text-xl font-bold mb-3">
                            <span className="text-primary">◈</span>
                            <span>نوآوران</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            ساخت آینده دیجیتال با روش‌های چابک و خلاقانه
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3 text-primary">لینک‌های سریع</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/" className="hover:text-white transition">خانه</Link></li>
                            <li><Link href="/about" className="hover:text-white transition">درباره ما</Link></li>
                            <li><Link href="/services" className="hover:text-white transition">خدمات</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3 text-primary">تماس</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>📧 info@noavaran.ir</li>
                            <li>📞 051-44234235</li>
                            <li>📍  ایران، مشهد</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
                    © ۱۴۰۵ نوآوران — تمامی حقوق محفوظ است
                </div>
            </footer>
        </div>
    );
}