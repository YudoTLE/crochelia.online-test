"use client"

import Image from "next/image"

const socials = [
    {name:"Shopee", src:"/images/shopee-logo.png",href:"https://shopee.co.id/crochelia"},
    {name:"Instagram", src:"/images/instagram-logo.png",href:"https://instagram.com/crochelia.co"},
    {name:"TikTok", src:"/images/tiktok-logo.png", href:"https://tiktok.com/@crochelia.co"},
    {name:"Youtube", src:"/images/youtube-logo.png", href:"https://www.youtube.com/@crocheliaco"},
];

export default function Socials(){
    return(
        <div className="h-fit pb-40 lg:pb-56 overflow-hidden bg-gradient-to-b from-main-a to-shade-b">
            <h2 className="font-roca font-semibold py-12 px-4 mx-auto max-w-lg md:max-w-xl lg:max-w-5xl text-center lg:text-left text-4xl lg:text-5xl text-main-b">
              Follow us On:
            </h2>
             <div className="mb-12 p-4 flex flex-col lg:flex-row gap-12 mx-auto max-w-lg md:max-w-xl lg:max-w-5xl">
                <div className="basis-1/4">
                    <div className="grid grid-cols-4 lg:grid-cols-2 mx-auto gap-4 lg:gap-12 w-fit">
                        {socials.map((item) => (
                            <Image
                            key={item.name}
                            alt=""
                            src={item.src}
                            width={64}
                            height={64}
                            className="aspect-square object-contain transition duration-150 ease-in-out hover:scale-125 lg:scale-110"
                            />
                        ))}
                    </div>
                </div>
                <div className="basis-3/4">
                    <div className="relative scale-50 lg:scale-100 ml-36 sm:ml-0">
                        <div className="absolute right-4">
                            <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                    <Image
                                        src="/images/mockup.png"
                                        className="w-[272px] h-[572px]" 
                                        alt=""
                                        width={390}
                                        height={844}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-12 right-72">
                            <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                    <Image
                                        src="/images/icon-t.png"
                                        className="absolute inset-0 my-auto h-64" 
                                        alt=""
                                        width={390}
                                        height={844}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}