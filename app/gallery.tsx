import Image from "next/image";


export default function Gallery(){
    return(
      <div className="m-5 flex flex-wrap">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <Image 
              className="block rounded-lg object-cover object-center" 
              src="/images/cloud-bag2.jpg"
              alt=""
              style={{
                width: '100%',
                height: '100%',
              }}
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image 
              className="block rounded-lg object-cover object-center" 
              src="/images/chunky-bag.jpg" 
              alt=""
              style={{
                width: '100%',
                height: '100%',
              }}
              width={500}
              height={500}
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <Image 
              className="block rounded-lg object-cover object-center" 
              src="/images/cloud-bag1.jpg"  
              alt=""
              style={{
                width: '100%',
                height: '100%',
              }}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <Image 
              className="block rounded-lg object-cover object-center" 
              src="/images/net-handbag.jpg" 
              alt=""
              style={{
                width: '100%',
                height: '100%',
              }}
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image 
              className="block rounded-lg object-cover object-center" 
              src="/images/flower-pouch.jpg" 
              alt=""
              style={{
                width: '100%',
                height: '100%',
              }}
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image 
              className="block rounded-lg object-cover object-center" 
              src="/images/nara-headband.jpg" 
              alt=""
              style={{
                width: '100%',
                height: '100%',
              }}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    );
}