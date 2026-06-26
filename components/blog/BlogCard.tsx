import { Badge } from "../ui/badge";
import Flesh from "../ui/Flesh";

type BlogCardProps = {
  img: string;
  badge: string;
  title: string;
  date: string;
  readTime: string;
  slug: string;
};

export default function BlogCard({
  img,
  badge,
  title,
  date,
  readTime,
  slug,
}: BlogCardProps) {
  return (
    <div className="w-full h-97.5 lg:w-99.5 lg:h-114.75 rounded-[12.74px] lg:rounded-[15px] border border-border overflow-hidden">
      <div
        className="w-full h-52.25 lg:h-61.75"
        style={{
          backgroundImage: `url("${img}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <div className="h-45 lg:h-[212px] pl-[22.93px] lg:pl-6.75 pr-[27.18px] lg:pr-8 py-[19.53px] lg:py-5.75 flex flex-col justify-between">
        <Badge variant={"gray"}>{badge}</Badge>
        <h2 className="title4 text-[15.29px]! lg:text-[18px]!">{title}</h2>
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-[#959595] text-[11.89px] lg:text-[14px]">
            {date} <span className="px-0.75">.</span> {readTime}
          </h3>
          <Flesh href={`/blog/${slug}`} />
        </div>
      </div>
    </div>
  );
}
