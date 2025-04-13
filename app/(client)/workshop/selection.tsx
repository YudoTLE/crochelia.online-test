"use client";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { defineQuery, PortableText } from "next-sanity";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";
import { enGB } from 'date-fns/locale'
import { PortableTextBlock } from 'sanity';

const WORKSHOP_QUERY = defineQuery(`*[
  _type == "workshop"
]{
  _id,
  name: coalesce(name, "Untitled Workshop"),
  description: coalesce(description, []),
  date: coalesce(date, now()),
  location: coalesce(location, "Unknown Location"),
  image: coalesce(image, null),
  href: coalesce(href, "#")
}`)

type SanityImageAsset = {
  _ref: string;
  _type: 'reference';
};
type SanityImage = {
  _type: 'image';
  asset: SanityImageAsset;
};
type RawWorkshopProps = {
  _id: string;
  name: string;
  description: PortableTextBlock[];
  date: string;
  location: string;
  image: SanityImage;
  href: string;
};
type WorkshopProps = RawWorkshopProps & {
  imageUrl: string;
  dateString: string;
};

const WorkshopSkeleton = () => (
  <div className="animate-pulse relative rounded-lg bg-white w-80 mx-auto">
    <div className="overflow-hidden aspect-square bg-gray-300 rounded-t-lg" />
    <div className="p-6 space-y-3">
      <div className="h-5 bg-gray-300 rounded w-3/5" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-4/5" />
      <div className="bottom-5 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="size-6 bg-gray-300 rounded-full" />
          <div className="h-4 w-32 bg-gray-300 rounded" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="size-6 bg-gray-300 rounded-full" />
          <div className="h-4 w-24 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  </div>
);

export default function Selection() {
  const [loading, setLoading] = useState<boolean>(true)
  const [workshops, setWorkshops] = useState<WorkshopProps[]>([]);

  useEffect(() => {
    client.fetch<RawWorkshopProps[]>(WORKSHOP_QUERY).then((data) => {
      const processedData = data.map((workshop) => ({
        ...workshop,
        imageUrl: workshop.image?.asset?._ref 
          ? urlFor(workshop.image)?.url() ?? '' 
          : '',
        dateString: format(new Date(workshop.date), "EEEE, do MMMM yyyy", { locale: enGB }),
      }));
      setWorkshops(processedData);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-shade-a to-main-a">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-16">
        <h2 className="font-roca font-semibold mx-auto pb-12 max-w-xs md:max-w-md lg:max-w-3xl text-pretty text-3xl md:text-4xl lg:text-5xl text-center text-main-b">
            Upcoming Workshops
        </h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-y-6 lg:space-y-0 max-w-5xl mx-auto">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                <WorkshopSkeleton key={index} />
              ))
              : workshops.map((item) => (
              <div key={item._id} className="group relative rounded-lg hover:shadow-lg bg-white transition-all w-80 mx-auto">
                <div className="relative overflow-hidden aspect-square hover:opacity-70">
                  <Image
                    alt={item.name}
                    src={item.imageUrl}
                    className="h-full w-full object-cover object-center rounded-t-lg"
                    height={800}
                    width={800}
                  />
                </div>
                <div className="font-opensauce p-6">
                  <a href={item.href} className="text-lg font-semibold text-shade-e no-underline hover:underline decoration-2">
                    {item.name}
                  </a>
                  <p className="mb-6 pb-12 text-sm text-gray-500">
                    <PortableText value={item.description} />
                  </p>
                  <div className="absolute bottom-5">
                    <div className="flex items-center pb-1">
                      <CalendarIcon className="size-6 text-main-b"/>
                      <p className="text-sm font-semibold text-shade-e px-2">{item.dateString}</p>
                    </div>
                    <div className="flex items-center pb-1">
                      <MapPinIcon className="size-6 text-main-b"/>
                      <p className="text-sm font-semibold text-shade-e px-2">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}