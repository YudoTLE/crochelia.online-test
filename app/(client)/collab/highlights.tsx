import Image from "next/image";

const events = [
  {id:1 ,image:'/images/post1.jpg',href:'#'},
  {id:2 ,image:'/images/post2.jpg',href:'#'},
  {id:3 ,image:'/images/post3.jpg',href:'#'},
  {id:4 ,image:'/images/flower-pouch.jpg',href:'#'},
]

export default function Highlights(){
    return(
        <div className="h-fit flex lg:flex-row flex-col gap-2 py-12 lg:py-24 justify-center bg-gradient-to-b from-white to-main-a">
          <div className="relative">
            <Image key={events[0].id}
              className="object-cover rounded-lg aspect-[3/2.05]"
              src={events[0].image}
              alt=""
              width={900}
              height={600}
            />
          </div>
          <div className="flex lg:flex-col flex-row gap-2 ">
            <div className="flex-auto relative max-w-sm">
              <Image key={events[1].id}
                className="object-cover rounded-lg aspect-[3/2]"
                src={events[1].image}
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className="flex-auto relative max-w-sm">
              <Image key={events[2].id}
                className="object-cover rounded-lg aspect-[3/2]"
                src={events[2].image}
                alt=""
                width={300}
                height={300}
              />
            </div>
            <div className=" hidden md:flex relative max-w-sm">
              <Image key={events[3].id}
                className="object-cover rounded-lg  aspect-[3/2]"
                src={events[3].image}
                alt=""
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
    );
}