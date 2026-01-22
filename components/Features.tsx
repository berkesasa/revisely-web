'use client';

import Image from 'next/image';
import RichText from './RichText';

interface FeaturesProps {
    translations: {
        title: string;
        titleHighlight: string;
        feature1: {
            title: string;
            titleHighlight: string;
            description: string;
        };
        feature2: {
            title: string;
            titleHighlight: string;
            titleEnd: string;
            description: string;
        };
        feature3: {
            title: string;
            titleHighlight: string;
            description: string;
        };
        feature4: {
            title: string;
            titleHighlight: string;
            description: string;
        };
    };
}

export default function Features({ translations }: FeaturesProps) {
    const features = [
        {
            image: '/images/feature-4.png',
            title: translations.feature1.title,
            titleHighlight: translations.feature1.titleHighlight,
            description: translations.feature1.description,
            align: 'right' as const,
        },
        {
            image: '/images/feature-2.png',
            title: translations.feature2.title,
            titleHighlight: translations.feature2.titleHighlight,
            titleEnd: translations.feature2.titleEnd,
            description: translations.feature2.description,
            align: 'left' as const,
        },
        {
            image: '/images/feature-3.png',
            title: translations.feature3.title,
            titleHighlight: translations.feature3.titleHighlight,
            description: translations.feature3.description,
            align: 'right' as const,
        },
        {
            image: '/images/feature-1.png',
            title: translations.feature4.title,
            titleHighlight: translations.feature4.titleHighlight,
            description: translations.feature4.description,
            align: 'left' as const,
        },
    ];

    return (
        <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#ff4757]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#3b82f6]/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        <RichText>{translations.title}</RichText>{' '}
                        <span className="text-gradient"><RichText>{translations.titleHighlight}</RichText></span>
                    </h2>
                </div>

                {/* Features */}
                <div className="space-y-32">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${feature.align === 'left' ? 'lg:grid-flow-col-dense' : ''
                                }`}
                        >
                            {/* Text Content */}
                            <div
                                className={`${feature.align === 'left' ? 'lg:col-start-2' : ''
                                    }`}
                            >
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                                    <RichText>{feature.title}</RichText>{' '}
                                    <span className="text-gradient"><RichText>{feature.titleHighlight}</RichText></span>
                                    {feature.titleEnd && <> <RichText>{feature.titleEnd}</RichText></>}
                                </h3>
                                <RichText as="p" className="text-lg text-[#aaa] leading-relaxed">
                                    {feature.description}
                                </RichText>
                            </div>

                            {/* Image */}
                            <div
                                className={`${feature.align === 'left' ? 'lg:col-start-1' : ''
                                    }`}
                            >
                                <div className="relative group">
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#ff4757]/20 to-[#3b82f6]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Image Container */}
                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#333] group-hover:border-[#ff4757]/50 transition-colors duration-500 shadow-2xl shadow-black/30">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
