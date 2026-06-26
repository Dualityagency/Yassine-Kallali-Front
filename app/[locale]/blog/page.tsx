import BlogContainer from "@/components/blog/BlogContainer";
import Contact from "@/components/blog/Contact";
import Header from "@/components/blog/Header";




export default function Page(){


    return(
        <div className="flex flex-col gap-y-6 lg:gap-y-18.5">
            <Header/>
            <BlogContainer/>
            <Contact/>
        </div>
    )


}