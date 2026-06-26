import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import FeaturedBlog from "./FeaturedBlog";



export default function Header(){

    const t = useTranslations('blog')

    return(
        <div className="flex flex-col gap-y-5.5 lg:gap-y-6.75">
              <Badge className="container-x">{t('header-badge')}</Badge>
              <FeaturedBlog/>
        </div>
    )
}