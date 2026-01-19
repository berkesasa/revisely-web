'use client';

import { Download, MousePointer, Share2 } from 'lucide-react';

interface HowItWorksProps {
    translations: {
        title: string;
        titleHighlight: string;
        step1: {
            title: string;
            description: string;
        };
        step2: {
            title: string;
            description: string;
        };
        step3: {
            title: string;
            description: string;
        };
    };
}

export default function HowItWorks({ translations }: HowItWorksProps) {
    const steps = [
        {
            icon: Download,
            number: '01',
            title: translations.step1.title,
            description: translations.step1.description,
        },
        {
            icon: MousePointer,
            number: '02',
            title: translations.step2.title,
            description: translations.step2.description,
        },
        {
            icon: Share2,
            number: '03',
            title: translations.step3.title,
            description: translations.step3.description,
        },
    ];

    return (
        <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#151515]" />
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff4757]/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        {translations.title}{' '}
                        <span className="text-gradient">{translations.titleHighlight}</span>
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#333] to-transparent z-0" />
                            )}

                            {/* Card */}
                            <div className="relative z-10 bg-[#1e1e1e] border border-[#333] rounded-2xl p-8 group-hover:border-[#ff4757]/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#ff4757]/10">
                                {/* Icon */}
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff4757] to-[#ff6b7a] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <step.icon size={28} className="text-white" />
                                    </div>
                                    <span className="absolute -top-2 -right-2 text-6xl font-black text-[#252525] group-hover:text-[#ff4757]/20 transition-colors duration-500">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#ff4757] transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-[#888] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
