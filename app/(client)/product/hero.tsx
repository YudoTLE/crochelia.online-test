import Image from "next/image"

export default function Hero() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 pt-40 pb-20 h-fit">
        <Image
            alt=""
            src="/images/product1.jpg"
            className="absolute blur-sm brightness-75 inset-0 -z-10 h-full w-full object-cover object-center"
            width={1280}
            height={720}
        />
        <div className="mx-auto flex flex-col max-w-4xl py-12 px-6 lg:px-8 font-sans text-center">
          <h2 className="font-roca text-4xl tracking-tight text-white sm:text-6xl">
            Our Products
          </h2>
          <p className="font-opensauce mt-6 text-lg leading-8 text-white text-pretty">
            100% Handcrafted with high-quality environmentally conscious fabrics and textiles.
          </p>
        </div>
    </div>
    );
  }
  