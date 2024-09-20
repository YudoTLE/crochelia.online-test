"use client";
import { faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const links = [
    {name:"How to Order",href:"#"},
    {name:"FAQs",href:"#"},
    {name:"Workshop Registration",href:"#"},
];

const socials = [
    {name:"Shopee", icon:faBagShopping,href:"https://shopee.co.id/crochelia"},
    {name:"Instagram", icon:faInstagram,href:"https://instagram.com/crochelia.co"},
    {name:"WhatsApp", icon:faWhatsapp,href:"https://wa.me/+6285175017713"},
    {name:"TikTok", icon:faTiktok,href:"https://tiktok.com/@crochelia.co"},
];

export default function Footer(){
  return (
    <div className="bg-white bottom-0 shadow-inner justify-center">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-2 sm:mb-0 space-x-3">
            <Image
              className="object-fit h-8 aspect-[6/1]"
              style={{
                width:"auto"
              }}
              src="/images/half-t.png"
              alt=""
              width={200}
              height={200}
            />

          </a>
          <div className="flex flex-wrap items-center mb-4 text-sm font-medium text-gray-500 sm:mb-0">
            {links.map((item) => (
                <a key={item.name} href={item.href} className="hover:underline me-4 md:me-6">
                  {item.name}
                </a>
              ))} 
          </div>
        </div>
        <hr className="my-2 border-gray-200 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 
              <a href="/" className="hover:underline">
                crochelia.co
              </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-2 sm:justify-center sm:mt-0">
            {socials.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-900 me-4 md:me-6">
                <FontAwesomeIcon icon={item.icon} className="w-4 h-4"/>
                <span className="sr-only">{item.name}</span>
              </a>
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
};
