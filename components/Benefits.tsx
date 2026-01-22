'use client';

import { Gift, Shield, Globe, Sparkles } from 'lucide-react';
import RichText from './RichText';

interface BenefitsProps {
    translations: {
        title: string;
        titleHighlight: string;
        benefit1: {
            title: string;
            description: string;
        };
        benefit2: {
            title: string;
            description: string;
        };
        benefit3: {
            title: string;
            description: string;
        };
        benefit4: {
            title: string;
            description: string;
        };
    };
}

export default function Benefits({ translations }: BenefitsProps) {
    const benefits = [
        {
            icon: Gift,
            title: translations.benefit1.title,
            description: translations.benefit1.description,
            color: '#22c55e',
        },
        {
            icon: Shield,
            title: translations.benefit2.title,
            description: translations.benefit2.description,
            color: '#3b82f6',
        },
        {
            icon: Globe,
            title: translations.benefit3.title,
            description: translations.benefit3.description,
            color: '#a855f7',
        },
        {
            icon: Sparkles,
            title: translations.benefit4.title,
            description: translations.benefit4.description,
            color: '#ff4757',
        },
    ];

    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#ff4757]/5 rounded-full blur-[150px]" />
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#3b82f6]/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        <RichText>{translations.title}</RichText>{' '}
                        <span className="text-gradient"><RichText>{translations.titleHighlight}</RichText></span>
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#1e1e1e] border border-[#333] rounded-2xl p-6 hover:border-[#404040] transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                        >
                            {/* Glow */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                style={{ backgroundColor: `${benefit.color}10` }}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: `${benefit.color}20` }}
                                >
                                    <benefit.icon size={24} style={{ color: benefit.color }} />
                                </div>

                                {/* Text */}
                                <h3 className="text-lg font-bold mb-2 text-white">
                                    <RichText>{benefit.title}</RichText>
                                </h3>
                                <RichText as="p" className="text-sm text-[#888] leading-relaxed">
                                    {benefit.description}
                                </RichText>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
