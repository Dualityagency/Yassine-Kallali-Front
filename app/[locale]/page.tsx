import Autorise from '@/components/home/Autorise';
import Confiance from '@/components/home/Confiance';
import HeroSection from '@/components/home/HeroSection';
import Marches from '@/components/home/Marches';
import Pourquoi from '@/components/home/Pourquoi';
import Prendre from '@/components/home/Prendre';

export default async function Home() {
  return (
    < >
      <HeroSection /> 

      <Pourquoi />


      <Confiance />


      <Autorise />


      <Marches />


      <Prendre />
    </>
  );
}
