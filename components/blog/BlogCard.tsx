import { Badge } from "../ui/badge";
import CtaButton from "../ui/CtaButton";
import Flesh from "../ui/Flesh";

export default function BlogCard() {
  return (
    <div className="w-full h-97.5 lg:w-99.5 lg:h-114.75 rounded-[12.74px] lg:rounded-[15px] border border-border overflow-hidden">
      {/* Image */}
      <div
        className="w-full h-52.25 lg:h-61.75"
        style={{
          backgroundImage: `url("/blog/header.webp")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="h-45 lg:h-[212px] pl-[22.93px] lg:pl-6.75 pr-[27.18px] lg:pr-8 py-[19.53px] lg:py-5.75 flex flex-col justify-between">
        <Badge variant={"gray"}>IMPLANTOLOGIE</Badge>
        <h2 className="title4 text-[15.29px]! lg:text-[18px]!">
          Implant immédiat post-extraction : ce que personne ne vous dit avant
          de partir à l'étranger.
        </h2>
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-[#959595] text-[11.89px] lg:text-[14px]">
            Janvier 26, 2026 <span className="px-0.75">.</span> 5 min
          </h3>
          <Flesh />
        </div>
      </div>
    </div>
  );
}
