'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const images=[
    {id:1,src:'/images/workshop1.jpg'},
    {id:2,src:'/images/workshop2.jpg'},
    {id:3,src:'/images/workshop3.jpg'},
    {id:4,src:'/images/workshop4.jpg'},
    {id:5,src:'/images/workshop5.jpg'},
]

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function Showcase(){
    return(
        <div className="h-fit py-12 overflow-hidden z-auto bg-gradient-to-b from-white to-shade-a">
          <h2 className="font-roca font-semibold mx-auto pb-12 max-w-xs md:max-w-md lg:max-w-3xl text-pretty text-2xl md:text-4xl lg:text-5xl text-center text-main-b">
              Handcrafted Accessories, Bags, Dolls, and many more
          </h2>
          <div className='mt-6 p-4 transition ease-in-out'>
              <Carousel 
                responsive={responsive}
                showDots={true}
                arrows={false}
                swipeable={true}
                draggable={false}
                infinite={true}
                autoPlay={true} 
                autoPlaySpeed={2000}
                transitionDuration={1000}
                itemClass='px-1 pb-12'
              >
              {images.map((item) => (
                  <div key={item.id} className='aspect-square rounded-full bg-cover bg-center max-w-lg mx-auto' style={{backgroundImage:"url("+item.src+")"}}>
                  </div>
              ))}
              </Carousel>
          </div>
        </div>
    )
}