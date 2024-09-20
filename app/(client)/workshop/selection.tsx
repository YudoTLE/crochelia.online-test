import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const events = [
  {
    id:1,
    name: 'Handknit Class',
    description: 'Learn to make Chunky Bag step by step with live tutorial from us. Beginners and enthusiasts are welcome. You can also win doorprizes from our sponsor: Tavi!',
    date:"Sunday, 19th November 2023",
    location:"Kopi Klan, Bogor",
    src: '/images/event1.jpeg',
    href: '#',
  },
  {
    id:2,
    name: 'Crochet Workshop',
    description: 'Trendy Net Bag that you can make yourself! Join now to learn how to make one. Emina helped us to also give out doorprizes for participants.',
    date:"Saturday, 29th June 2024",
    location:"0251 Societeit, Bogor",
    src: '/images/event2.jpeg',
    href: '#',
  },
  {
    id:3,
    name: 'Handknit Class',
    description: "We are back with another Chunky Bag class. If you missed it before, you can win doorprizes from Tavi now!",
    date:"Sunday, 28th July 2024",
    location:"0251 Societeit, Bogor",
    src: '/images/event3.jpeg',
    href: '#',
  },
]
export default function Selection() {
    return (
      <div className="bg-gradient-to-b from-shade-a to-main-a">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-16">
          <h2 className="font-roca font-semibold mx-auto pb-12 max-w-xs md:max-w-md lg:max-w-3xl text-pretty text-3xl md:text-4xl lg:text-5xl text-center text-main-b">
              Upcoming Workshops
          </h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-y-6 lg:space-y-0 max-w-5xl mx-auto">
            {events.map((item) => (
                  <div key={item.id} className="group relative rounded-lg hover:shadow-lg bg-white transition-all w-80 mx-auto">
                    <div className="relative overflow-hidden aspect-square hover:opacity-70">
                      <Image
                        alt=""
                        src={item.src}
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
                        {item.description}
                      </p>
                      <div className="absolute bottom-5">
                        <div className="flex items-center pb-1">
                          <CalendarIcon className="size-6 text-main-b"/>
                          <p className="text-sm font-semibold text-shade-e px-2">{item.date}</p>
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