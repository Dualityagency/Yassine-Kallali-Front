import Navbar from "@/components/layout/Navbar";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/layout/Footer";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "MetaData",
  });

  const keywords: string[] = t.raw("keywords") as string[];

  return {
    title: {
      template: "%s | Dr. Yassine Kallali",
      default: t("title"),
    },
    description: t("description"),
    keywords,

    authors: [
      {
        name: "Dr. Yassine Kallali",
        url: "https://www.dr-yassine-kallali.com",
      },
    ],

    applicationName: "Dr. Yassine Kallali",

    alternates: {
      canonical: `https://www.dryassinekallali.com/${locale}`,
      languages: {
        en: "https://www.dryassinekallali.com/en",
        fr: "https://www.dryassinekallali.com/fr",
        ar: "https://www.dryassinekallali.com/ar",
        it: "https://www.dryassinekallali.com/it",
      },
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://www.dryassinekallali.com.com/${locale}`,
      siteName: "Dr. Yassine Kallali",
      locale:
        locale === "ar"
          ? "ar_TN"
          : locale === "fr"
          ? "fr_TN"
          : locale === "it"
          ? "it_IT"
          : "en_US",
      type: "website",
    },

    icons: {
      icon: "/logo_black.png",
      apple: "/logo_black.png",
    },
  };
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextIntlClientProvider>
        <Navbar /> 
        {children}
        <Footer />
        </NextIntlClientProvider>
</>
  
  );
}