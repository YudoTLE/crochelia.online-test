import Image from "next/image";

const posts = [
    {id:0, img:"/images/post1.jpg", href:"/collab/post?id=0" ,type:"Workshop", date:"August 5th, 2024", title:"Workshop di Cafe", slug:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.." },
    {id:1, img:"/images/post2.jpg", href:"/collab/post?id=1" ,type:"Event",date:"July 26th, 2024", title:"Pameran bisnis Crochet", slug:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.." },
    {id:2, img:"/images/post3.jpg", href:"/collab/post?id=2" ,type:"Collaboration",date:"June 2nd, 2024", title:"Pattern Crochet Populer", slug:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.." },
]

export default function Blog(){
    return(
        <div className="flex flex-wrap py-6 bg-gradient-to-b from-main-a to-shade-a">
            <section className="max-w-5xl mx-auto font-opensauce text-gray-800 flex flex-col items-center px-3">
            {posts.map((item) => (
                <article key={item.id} className="flex flex-col shadow-lg my-4 bg-white rounded-[20px]">
                    <a href={item.href} className="my-auto hover:opacity-75">
                        <Image
                            src={item.img}
                            alt=""
                            className="rounded-t-[20px] object-cover object-center max-h-64"
                            width={1000}
                            height={500}
                        />
                    </a>
                    <div className="flex flex-col justify-start p-6">
                        <a href={item.href} className="text-main-b text-sm font-bold uppercase pb-4">{item.type}</a>
                        <a href={item.href} className="text-xl sm:text-3xl font-bold hover:text-gray-700 pb-4">{item.title}</a>
                        <p className="text-xs sm:text-sm pb-3">
                            Published on {item.date}
                        </p>
                        <a href={item.href} className="pb-6 text-xs sm:text-base ">{item.slug}</a>
                            <button className="w-fit transition duration-150 ease-in-out bg-shade-b rounded-lg px-3 py-1 text-gray-800 hover:opacity-75">
                                <a className="text-md" href={item.href}>
                                    Read More
                                </a>  
                            </button>
                    </div>
                </article>
                ))}
                <div className="flex items-center py-8">
                    <a href="#" className="h-10 w-10 bg-shade-b hover:bg-main-b font-semibold text-white text-sm flex items-center justify-center">1</a>
                    <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-main-b hover:text-white text-sm flex items-center justify-center">2</a>
                    <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-main-b text-sm flex items-center justify-center ml-3">Next</a>
                </div>

            </section>
        </div>
    )
}