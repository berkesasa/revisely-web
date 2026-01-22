'use client';

import { useLocale, Locale } from '@/hooks/useLocale';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
    currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
    const { setLocale, isPending } = useLocale();

    const handleChange = () => {
        const newLocale: Locale = currentLocale === 'en' ? 'tr' : 'en';
        setLocale(newLocale);
    };

    return (
        <button
            onClick={handleChange}
            disabled={isPending}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#252525] border border-[#333] hover:border-[#ff4757] transition-all duration-300 text-sm font-medium group"
            aria-label="Switch language"
        >
            <Globe
                size={16}
                className="text-[#888] group-hover:text-[#ff4757] transition-colors duration-300"
            />
            <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                {currentLocale.toUpperCase()}
            </span>
        </button>
    );
}
