'use client'
import Image from "next/image"

const brandLogos = [
    {id:1,src:'/images/emina.png'},
    {id:2,src:'/images/tavi.png'},
    {id:3,src:'/images/shopee.png'},
    {id:4,src:'/images/tiktok.png'},
    {id:5,src:'/images/zalora.webp'},
]

export default function Brands() {
    return(
        <div className="h-fit py-24 bg-gradient-to-b from-shade-a to-main-a">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-roca font-semibold mx-auto text-pretty text-2xl md:text-4xl lg:text-5xl text-center text-main-b">
              In Collaboration With
          </h2>
          <div className="px-6 rounded-lg shadow-lg bg-white max-w-5xl grid grid-cols-2 sm:grid-cols-5 items-center mt-12 mx-3 sm:mx-auto gap-2 sm:gap-4">
            {brandLogos.map((item) => (
                <Image
                  key={item.id}
                  alt=""
                  src={item.src}
                  width={200}
                  height={200}
                  className="max-h-20 sm:max-h-36 object-contain p-4"
                />
            ))}
          </div>
        </div>
      </div>
    )
}