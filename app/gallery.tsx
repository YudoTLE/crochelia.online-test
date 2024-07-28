import Image from "next/image";

const products = [
  {name: 'Chunky Bag',image:'/images/product3.jpg',href:'#'},
  {name: 'Net Handbag',image:'/images/product1.jpg',href:'#'},
  {name: 'Cloud Bag',image:'/images/cloud-bag1.jpg',href:'#'},
  {name: 'Flower Pouch',image:'/images/flower-pouch.jpg',href:'#'},
]

export default function Gallery(){
    return(
        <div className="flex lg:flex-row flex-col gap-2 pt-10 lg:pt-20 m-2 justify-center">
          <div className="relative">
            <Image
              className="object-cover rounded-lg aspect-[3/2.05]"
              src={products[0].image}
              alt=""
              width={900}
              height={600}
            />
            <a href={products[0].href} className="absolute bottom-3 left-5 text-xl text-white hover:underline">
              {products[0].name}
            </a>
          </div>
          <div className="flex lg:flex-col flex-row gap-2 ">
            <div className="flex-auto relative max-w-sm">
              <Image
                className="object-cover rounded-lg aspect-[3/2]"
                src={products[1].image}
                alt=""
                width={300}
                height={300}
              />
              <a href={products[1].href} className="absolute bottom-3 left-5 text-xl text-white hover:underline">
                {products[1].name}
              </a>
            </div>
            <div className="flex-auto relative max-w-sm">
              <Image
                className="object-cover rounded-lg aspect-[3/2]"
                src={products[2].image}
                alt=""
                width={300}
                height={300}
              />
              <a href={products[2].href} className="absolute bottom-3 left-5 text-xl text-white hover:underline">
                {products[2].name}
              </a>
            </div>
            <div className=" hidden md:flex relative max-w-sm">
              <Image
                className="object-cover rounded-lg  aspect-[3/2]"
                src={products[3].image}
                alt=""
                width={300}
                height={300}
              />
              <a href={products[3].href} className="absolute bottom-3 left-5 text-xl text-white hover:underline">
                {products[3].name}
              </a>
            </div>
          </div>
        </div>
    );
}