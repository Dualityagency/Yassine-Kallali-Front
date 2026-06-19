import Navbar from "@/components/layout/Navbar";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/layout/Footer";


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