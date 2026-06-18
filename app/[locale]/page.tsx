import HeroSection from '@/components/home/HeroSection';
import CtaButton from '@/components/ui/CtaButton';
import {getTranslations} from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('test');
  return (
    < >
      {/* <HeroSection /> */}

    </>
  );
}
