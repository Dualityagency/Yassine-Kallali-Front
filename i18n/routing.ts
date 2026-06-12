import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'fr','ar' , 'it'],
    defaultLocale: 'fr',
    localePrefix : 'as-needed',
});