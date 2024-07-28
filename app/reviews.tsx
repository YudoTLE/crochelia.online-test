'use client'

import { Carousel } from "flowbite-react";

const reviewData = [
  {id:1,name:"Andy",role:"Produk",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:"/images/product2.jpg"},
  {id:2,name:"Brandon",role:"Workshop",content:"Nam tincidunt turpis sed mauris feugiat, vel porta dui faucibus.",image:"/images/workshop1.jpg"},
  {id:3,name:"Chika",role:"Workshop",content:"Maecenas maximus malesuada augue eu laoreet.",image:"/images/workshop2.jpg"},
  {id:4,name:"Ferguso",role:"Produk",content:"Ut mollis iaculis nunc, et ultrices lectus faucibus in.",image:"/images/nara-headband.jpg"},
  {id:5,name:"Alfan",role:"Produk",content:"Ut mollis iaculis nunc, et ultrices lectus faucibus in.",image:"/images/chunky-bag.jpg"},
  {id:6,name:"Febri",role:"Produk",content:"Ut mollis iaculis nunc, et ultrices lectus faucibus in.",image:"/images/net-handbag.jpg"},
]

export default function Reviews() {
  return (
    <div className=" py-10 mx-2 md:mx-40 h-56 sm:h-64 lg:h-96">
      <Carousel>
        {reviewData.map((item) => (
          <div key={item.id} className="flex flex-col h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <blockquote className="px-10 font-semibold">{item.content}</blockquote>
            <span></span>
            <p>{item.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
