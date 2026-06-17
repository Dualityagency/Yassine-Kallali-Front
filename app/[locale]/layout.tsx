import Navbar from "@/components/layout/Navbar";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";


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
        </NextIntlClientProvider>
</>
  
  );
}