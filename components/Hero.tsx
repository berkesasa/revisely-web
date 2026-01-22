'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Chrome } from 'lucide-react';
import RichText from './RichText';

interface HeroProps {
    translations: {
        badge: string;
        title: string;
        titleHighlight: string;
        titleEnd: string;
        description: string;
        cta: string;
    };
}

export default function Hero({ translations }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#ff4757]/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[150px] animate-pulse delay-500" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#252525] border border-[#333] mb-8 animate-fade-in-up">
                            <Chrome size={16} className="text-[#ff4757]" />
                            <span className="text-sm text-[#aaa]">{translations.badge}</span>
                        </div>

                        {/* Title - Using RichText to support HTML tags from i18n */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
                            <RichText>{translations.title}</RichText>
                            <span className="text-gradient">{translations.titleHighlight}</span> {translations.titleEnd}
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-[#aaa] max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up delay-200">
                            {translations.description}
                        </p>

                        {/* CTA Button */}
                        <div className="animate-fade-in-up delay-300">
                            <Link
                                href="https://chromewebstore.google.com/detail/revisely-visual-feedback/jcomekjleekgpnbpbihopehidpjnfkcl"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#ff4757] hover:bg-[#ff6b7a] text-white font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#ff4757]/30 animate-pulse-glow"
                            >
                                <Chrome size={20} />
                                {translations.cta}
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative animate-fade-in-up delay-400">
                        <div className="relative animate-float">
                            {/* Main Image */}
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#333] shadow-2xl shadow-black/50">
                                <Image
                                    src="/images/feature-4.png"
                                    alt="Revisely Extension"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ff4757]/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3b82f6]/20 rounded-full blur-2xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-[#333] flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 bg-[#ff4757] rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
