'use client'

import { ChevronRightIcon,ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const reviewData = [
  {id:1,name:"Ninda, Ibu Rumah Tangga",content:"Awalnya saya Ibu Rumah Tangga yang kebetulan mau cari penghasilan tambahan. Saya ada dasar merajut tapi sudah lama sekali tidak terlatih. Crochelia ngajarinnya asik dibantu dari awal dan sabar sekali, hasilnya cantiikkk!", src:"/images/privat.jpg"},
  {id:2,name:"Bimo",content:"Workshop yang sangat informatif. Saya belajar banyak hal dan bertemu teman-teman yang juga tertarik dengan hobi ini. Thanks Crochelia!", src:"/images/background.jpg"},
  {id:3,name:"Chika",content:"Ternyata buat crochet itu ga susah ya. Saya yang awalnya gatau apa-apa, setelah dapet tutorial jadi bisa buat sendiri. Hasilnya cantik banget!", src:"/images/nara-headband.jpg"},
  {id:4,name:"Andy",content:"Seneng banget sama produk nya. Bagus buat hadiah atau kado, ga kalah sama produk lain.", src:"/images/handbag-green.jpg"},
  {id:5,name:"Salsa",content:"Kelas privatnya sangat bagus untuk pemula, diajarin bener-bener dari awal sampai kita bisa. Udah gitu dapet banyak bahan belajarnya juga. Pokoknya dijamin auto jago deh.", src:"/images/privat.jpg"},
]

const leftarrow = (<ChevronLeftIcon className="text-main-b size-12 bg-white outline rounded-full"/>)
const rightarrow = (<ChevronRightIcon className="text-main-b size-12 bg-white outline rounded-full"/>)

export default function Reviews() {
  return (
    <div className="h-fit overflow-hidden py-24 bg-gradient-to-b from-shade-a to-main-a">
      <h2 className="font-roca font-semibold mx-auto pb-12 max-w-xs md:max-w-md lg:max-w-3xl text-pretty text-2xl md:text-4xl lg:text-5xl text-center text-main-b">
          Here&apos;s What they say
      </h2>
      <div className="m-auto max-w-7xl bg-white shadow-lg py-12 text-shade-e tracking-tight rounded-[50px]">
        <div className="font-opensauce mx-auto h-96 max-w-xl md:max-w-3xl lg:max-w-5xl">
          <Carousel indicators={false} leftControl={leftarrow} rightControl={rightarrow}>
            {reviewData.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row max-w-xl md:max-w-xl lg:max-w-4xl">
                <Image
                  src={item.src}
                  alt=""
                  className="lg:ml-12 aspect-square object-cover mx-auto rounded-[50px] w-64"
                  width={400}
                  height={400}
                />
                <div className="px-14 pt-6 lg:pl-12 lg:mr-12 my-auto text-center sm:text-justify text-xs sm:text-md md:text-lg lg:text-xl">
                  <p>{item.content}</p>
                  <p className="font-semibold pt-4">{item.name}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="pt-6 text-center">
          <button className="transition duration-150 ease-in-out rounded-full bg-main-b px-3 py-2 text-white hover:bg-white hover:text-main-b hover:outline hover:scale-110 delay-150">
              <a className="font-roca text-md sm:text-lg lg:text-3xl py-5 m-5" href="http://wa.me/6285175017713">
                  Register Now
              </a>  
          </button>
        </div>
      </div>
    </div>
  );
}
