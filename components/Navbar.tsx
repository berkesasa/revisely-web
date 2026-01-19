'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
    locale: string;
    translations: {
        features: string;
        howItWorks: string;
        download: string;
    };
}

export default function Navbar({ locale, translations }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#features', label: translations.features },
        { href: '#how-it-works', label: translations.howItWorks },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#404040] group-hover:border-[#ff4757] transition-colors duration-300">
                            <Image
                                src="/images/logo.png"
                                alt="Revisely"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xl font-bold text-white group-hover:text-[#ff4757] transition-colors duration-300">
                            Revisely
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[#aaa] hover:text-white transition-colors duration-300 text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSwitcher currentLocale={locale} />
                        <Link
                            href="https://chromewebstore.google.com/detail/revisely-visual-feedback/cnfnhdpdfljogkhfmagobeieoagakfnn"
                            target="_blank"
                            className="px-5 py-2.5 rounded-lg bg-[#ff4757] hover:bg-[#ff6b7a] text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#ff4757]/25"
                        >
                            {translations.download}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-[#333] pt-4">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-[#aaa] hover:text-white transition-colors duration-300 text-sm font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 mt-2">
                                <LanguageSwitcher currentLocale={locale} />
                                <Link
                                    href="https://chromewebstore.google.com/detail/revisely-visual-feedback/cnfnhdpdfljogkhfmagobeieoagakfnn"
                                    target="_blank"
                                    className="px-5 py-2.5 rounded-lg bg-[#ff4757] hover:bg-[#ff6b7a] text-white font-semibold text-sm transition-all duration-300"
                                >
                                    {translations.download}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
