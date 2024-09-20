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
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function Showcase(){
    return(
        <div className="h-fit py-12 overflow-hidden z-auto bg-gradient-to-b from-white to-shade-a">
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
                  <div key={item.id} className='aspect-video bg-cover bg-center rounded-lg max-w-4xl mx-auto' style={{backgroundImage:"url("+item.src+")"}}>
                  </div>
              ))}
              </Carousel>
          </div>
        </div>
    )
}