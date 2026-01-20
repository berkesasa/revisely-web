'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
    translations: {
        description: string;
        rights: string;
        madeWith: string;
        by: string;
    };
}

export default function Footer({ translations }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-[#252525] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left - Logo & Description */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#404040]">
                                <Image
                                    src="/images/logo.png"
                                    alt="Revisely"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xl font-bold text-white">Revisely</span>
                        </Link>
                        <p className="text-sm text-[#666] max-w-xs text-center md:text-left">
                            {translations.description}
                        </p>
                    </div>

                    {/* Center - Social Links */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://github.com/berkesasa"
                            target="_blank"
                            className="w-10 h-10 rounded-lg bg-[#252525] border border-[#333] flex items-center justify-center hover:border-[#ff4757] hover:text-[#ff4757] transition-all duration-300 text-[#666]"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/berkesasa"
                            target="_blank"
                            className="w-10 h-10 rounded-lg bg-[#252525] border border-[#333] flex items-center justify-center hover:border-[#ff4757] hover:text-[#ff4757] transition-all duration-300 text-[#666]"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </Link>
                        <Link
                            href="mailto:berkesasa.dev@gmail.com"
                            className="w-10 h-10 rounded-lg bg-[#252525] border border-[#333] flex items-center justify-center hover:border-[#ff4757] hover:text-[#ff4757] transition-all duration-300 text-[#666]"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </Link>
                    </div>

                    {/* Right - Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-sm text-[#666]">
                            © {currentYear} Revisely. {translations.rights}
                        </p>
                        <p className="text-sm text-[#555] mt-1 flex items-center justify-center md:justify-end gap-1">
                            {translations.by} <Heart size={14} className="text-[#ff4757] fill-[#ff4757]" /> {translations.madeWith}{' '}
                            <Link
                                href="https://berkesasa.com"
                                target="_blank"
                                className="text-[#ff4757] hover:underline"
                            >
                                Berke Sasa
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
