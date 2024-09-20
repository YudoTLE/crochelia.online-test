'use client'
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const posts = [
    {id:0, img:"/images/post1.jpg", href:"/collab/post?id=1" ,type:"Workshop", date:"August 5th, 2024", title:"Workshop di Cafe", slug:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.." },
    {id:1, img:"/images/post2.jpg", href:"/collab/post?id=2" ,type:"Event",date:"July 26th, 2024", title:"Pameran bisnis Crochet", slug:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.." },
    {id:2, img:"/images/post3.jpg", href:"/collab/post?id=3" ,type:"Collaboration",date:"June 2nd, 2024", title:"Pattern Crochet Populer", slug:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.." },
]

export default function Post(){
    const searchParams = useSearchParams();
    const id = Number(searchParams.get('id'));
    const post = posts[id];
    return(
        <section className="mx-auto sm:max-w-4xl flex flex-col items-center py-16 sm:py-24">

            <article className="flex flex-col shadow mt-4">
                <Image
                    src={post.img}
                    alt=""
                    className="lg:rounded-t-[20px] object-cover object-center max-h-96"
                    width={1000}
                    height={500}
                />
                <div className="font-opensauce text-black bg-white flex flex-col justify-start p-6">
                    <a href="#" className="text-main-b text-sm font-bold uppercase pb-4">{post.type}</a>
                    <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{post.title}</a>
                    <p className="text-sm pb-8">{post.date}</p>
                    <h1 className="text-xl sm:text-2xl font-bold pb-3">Introduction</h1>
                    <p className="text-sm sm:text-base pb-3">{post.slug}</p>
                    <h1 className="text-xl sm:text-2xl  font-bold pb-3">Body</h1>
                    <p className="text-sm sm:text-base pb-3">Vivamus nec facilisis elit, quis congue justo. In non augue ex. Aenean pretium facilisis hendrerit. Sed sed imperdiet dui. Etiam faucibus a diam sed vehicula. Nullam commodo lacus tincidunt, tincidunt orci sed, dapibus leo. Vivamus vulputate quis risus a ultricies. Aliquam luctus id tellus non condimentum. Aenean maximus viverra ipsum eget vestibulum. Morbi ut tincidunt sem, efficitur volutpat tortor. Donec scelerisque, ipsum eu efficitur semper, neque turpis sodales quam, in aliquam elit lacus varius lorem. Ut ut diam id leo efficitur malesuada eget in velit. Pellentesque tristique orci nunc, vitae fermentum nibh luctus eu. Mauris condimentum justo sed ipsum egestas varius.</p>
                    <p className="text-sm sm:text-base pb-3">Vivamus sed neque nec massa scelerisque imperdiet eget id sapien. Fusce elementum mi id malesuada luctus. Proin quis lorem id leo porta interdum non ac nisl. Integer nulla sem, ultrices sed neque eget, blandit condimentum metus. Aliquam eget malesuada sapien. Curabitur aliquet orci sit amet ex tincidunt convallis. Mauris urna mi, consequat mattis mollis a, dignissim eget sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam facilisis sem diam, viverra consequat metus consequat vel. Cras a mi eu ex luctus malesuada quis eu ante. Aliquam erat volutpat.</p>
                </div>
            </article>
            <div className="w-full flex text-shade-b">
                <a href={"/collab/post?id="+(post.id-1)} className="w-1/2 bg-white shadow hover:shadow-md text-left p-6">
                    {post.id == 0 ? (null):(
                            <p className="text-lg font-bold flex items-center"><ArrowLeftIcon className="size-6 mx-2"/>Previous</p>
                        )
                    }
                </a>
                <a href={"/collab/post?id="+(post.id+1)}  className="w-1/2 bg-white shadow hover:shadow-md text-right p-6">
                    <p className="text-lg font-bold flex items-center justify-end">Next<ArrowRightIcon className="size-6  mx-2"/></p>
                </a>
            </div>
        </section>        
    )
}