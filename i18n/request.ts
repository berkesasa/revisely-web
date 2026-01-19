import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const headersList = await headers();
  
  // Check cookie first
  let locale = cookieStore.get('locale')?.value as Locale | undefined;
  
  // If no cookie, check Accept-Language header
  if (!locale) {
    const acceptLanguage = headersList.get('accept-language');
    if (acceptLanguage) {
      const preferredLocale = acceptLanguage.split(',')[0].split('-')[0];
      if (locales.includes(preferredLocale as Locale)) {
        locale = preferredLocale as Locale;
      }
    }
  }
  
  // Default to English
  if (!locale) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
