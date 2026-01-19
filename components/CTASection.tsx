'use client';

import Link from 'next/link';
import { Chrome, ArrowRight } from 'lucide-react';

interface CTASectionProps {
    translations: {
        title: string;
        titleHighlight: string;
        description: string;
        button: string;
    };
}

export default function CTASection({ translations }: CTASectionProps) {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff4757]/5 to-transparent" />
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#ff4757]/10 rounded-full blur-[200px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-[#1e1e1e] border border-[#333] rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#ff4757]/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#3b82f6]/20 rounded-full blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            {translations.title}
                            <br />
                            <span className="text-gradient">{translations.titleHighlight}</span>
                        </h2>

                        <p className="text-lg text-[#aaa] max-w-2xl mx-auto mb-10">
                            {translations.description}
                        </p>

                        <Link
                            href="https://chromewebstore.google.com/detail/revisely-visual-feedback/cnfnhdpdfljogkhfmagobeieoagakfnn"
                            target="_blank"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff4757] to-[#ff6b7a] text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff4757]/40 hover:scale-105 group"
                        >
                            <Chrome size={22} />
                            {translations.button}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
