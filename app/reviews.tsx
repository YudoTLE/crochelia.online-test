'use client';

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Reviews() {
  return (
    <div className="grid h-80 md:grid-cols-2 gap-4 2xl:h-96">
      <Carousel>
        <img src="/images/workshop1.jpg" />
        <img src="/images/workshop2.jpg" />
        <img src="/images/workshop3.jpg" />
        <img src="/images/workshop4.jpg" />
        <img src="/images/workshop5.jpg" />
      </Carousel>
      <Carousel indicators>
        <img src="/images/product1.jpg"/>
        <img src="/images/product2.jpg"/>
        <img src="/images/product3.jpg"/>
        <img src="/images/product4.jpg"/>
        <img src="/images/product5.jpg"/>
      </Carousel>
    </div>
  );
}