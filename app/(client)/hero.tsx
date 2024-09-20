import Image from "next/image";


export default function Hero(){
    return(
        <div className="h-fit py-24 lg:py-52 relative isolate overflow-hidden bg-white">
            <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-2xl" aria-hidden="true">
                <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-main-b to-shade-c opacity-20" style={{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
            </div>
            <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
            </div>
            <div className="m-auto place-items-center flex flex-col lg:flex-row max-w-6xl ">
                <div className="container my-auto">
                    <Image
                        alt=""
                        src="/images/main.jpg"
                        className="mx-auto object-cover object-bottom aspect-square max-w-xs lg:max-w-xl rounded-2xl"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="mx-4 pt-6 lg:pt-0 mb-24 lg:mb-0 md:max-w-2xl lg:max-w-xl text-center lg:text-right text-pretty">
                    <h1 className="font-roca font-semibold text-3xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-shade-b to-main-c brightness-110">
                            Learn How To Crochet
                        </span>
                    </h1>
                    <p className="font-opensauce m-4 lg:mt-4 lg:m-0 text-sm md:text-lg lg:text-lg text-gray-900">
                        Here in Crochelia Co where all the goods came by our own hands. 
                        We provide Workshops and Private Classes for beginners and experts alike.
                        Wether you're just starting or want to imporve your skills, Crochelia Co provides the most value for our customers.  
                    </p>
                    <button className="transition duration-150 ease-in-out rounded-full bg-main-b px-3 py-2 text-white hover:bg-white hover:text-main-b hover:outline hover:scale-110 delay-150 lg:mt-4">
                        <a className="font-roca text-md sm:text-lg lg:text-3xl py-5 m-5" href="#">
                            Register Now
                        </a>  
                    </button>
                </div>
            </div>
        </div>
)
}