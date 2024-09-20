import { CheckIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const classes = [
  {
    id:1,
    name: 'Handknit Class',
    price: 'Free Trial',
    location: 'Online',
    benefit:['Downloadable guides', 'Flexible class hours', 'Beginner-friendly class'],
    src: '/images/chunky-bag.jpg',
    href: '#',
  },
  {
    id:2,
    name: 'Crochet Class',
    price: 'Rp150.000',
    location: 'Offline',
    benefit:['Free patterns', 'Goodies and gifts from our partner', 'Opportunities for networking'],
    src: '/images/cloud-bag2.jpg',
    href: '#',
  },
  {
    id:3,
    name: 'Handknit Class',
    price: 'Rp135.000',
    location: 'Offline',
    benefit:['No tools required', 'Goodies and gifts from our partner', 'Opportunities for networking'],
    src: '/images/product3.jpg',
    href: '#',
  },
  {
    id:4,
    name: 'Handknit Class',
    price: 'Rp135.000',
    location: 'Offline',
    benefit:['No tools required', 'Goodies and gifts from our partner', 'Opportunities for networking'],
    src: '/images/product3.jpg',
    href: '#',
  },
  {
    id:5,
    name: 'Handknit Class',
    price: 'Free Trial',
    location: 'Online',
    benefit:['Downloadable guides', 'Flexible class hours', 'Beginner-friendly class'],
    src: '/images/chunky-bag.jpg',
    href: '#',
  },
  {
    id:6,
    name: 'Crochet Class',
    price: 'Rp150.000',
    location: 'Offline',
    benefit:['Free patterns', 'Goodies and gifts from our partner', 'Opportunities for networking'],
    src: '/images/cloud-bag2.jpg',
    href: '#',
  },
]
export default function Selection() {
    return (
      <div className="bg-gradient-to-b from-white to-shade-a">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-4xl lg:py-16">
            <h2 className="font-roca font-bold text-center text-4xl text-main-b">
              Available Classes
            </h2>
            <div className="mt-6 space-y-12 lg:grid grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6 lg:space-y-0">
              {classes.map((item) => (
                  <div key={item.id} className="relative group rounded-lg hover:shadow-lg transition-all bg-white pb-24">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        src={item.src}
                        width={500}
                        height={500}
                        alt=""
                        className="object-cover cover-top h-36 w-full"
                      />
                    </div>
                    <div className="p-6">
                      <a href={item.href} className="font-opensauce font-bold text-xl text-gray-800">
                        {item.name}
                      </a>
                      <p className={((item.location=='Online') ? 'text-[#2196f3] bg-[#2196f3]/25' : 'text-[#00CF00] bg-[#00CF00]/25') + " font-opensauce font-bold text-sm text-center w-16 rounded-lg"}>
                        {item.location}
                      </p>
                      <ul className="list-none text-gray-800 mt-4 min-h-20">
                        {item.benefit.map((list, i) => (
                          <li key={i} className="text-sm flex">
                            <CheckIcon className="text-main-b size-6"/>
                            {list}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="absolute inset-x-4 bottom-16 font-opensauce font-bold text-xl text-main-b">
                      {item.price}
                    </p>
                    <button className="absolute inset-x-0 bottom-4 rounded-full bg-main-b text-white p-2 mx-4">
                      <a className="font-roca text-lg tracking-wide" href="#">
                          Pick this class
                      </a>  
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }