'use client'

import { Button, Modal, Popover } from "flowbite-react";
import Image from "next/image"
import { useState } from "react";
import { EMPTY_ARRAY } from "sanity";

const products = [
  {
    id:0,
    name: 'Chunky Bag',
    description: 'Functional and stylish bag',
    src: '/images/main.jpg',
    alt: 'Functional and stylish bag.',
    default: 'default',
    colors:[
      {id:0, name:'Gray',src:'/images/handbag-gray.jpg',},
      {id:1, name:'Blue',src:'/images/handbag-blue.jpg',},
      {id:2, name:'Cream',src:'/images/handbag-cream.jpg',},
      {id:3, name:'Green',src:'/images/handbag-green.jpg'},
      {id:4, name:'Orange',src:'/images/handbag-orange.jpg'},
      {id:5, name:'Pink',src:'/images/handbag-pink.jpg'},
      {id:6, name:'Purple',src:'/images/handbag-purple.jpg'},
      {id:7, name:'Red',src:'/images/handbag-red.jpg'},
      {id:8, name:'White',src:'/images/handbag-white.jpg'},
    ]
  },
  {
    id:1,
    name: 'Cloud Bag',
    description: 'Functional and stylish bag',
    src: '/images/cloud-bag2.jpg',
    alt: 'Functional and stylish bag.',
    default: 'default',
    colors:[]
  },
  {
    id:2,
    name: 'Flower Pouch',
    description: 'Cute Accessory',
    src: '/images/flower-pouch.jpg',
    alt: 'Cute accessory',
    default: 'default',
    colors:[]
  },
  {
    id:3,
    name: 'Net Handbag',
    description: 'Functional and stylish bag',
    src: '/images/net-handbag.jpg',
    alt: 'Functional and stylish bag.',
    default: 'default',
    colors:[]
  },
  {
    id:4,
    name: 'Nara Headband',
    description: 'Cute wearable accessory',
    src: '/images/nara-headband.jpg',
    alt: 'Cute wearable accessory',
    default: 'default',
    colors:[]
  },
]

export default function Product() {
  const [openModal, setOpenModal] = useState(false);
  const [itemColor, setColor] = useState(' ');
  const [selectedItem, setItem] = useState(0);
  
  return (
    <div className="bg-gradient-to-b from-white to-shade-a">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 lg:max-w-none">
          <div className="font-opensauce mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
            {products.map((item) => (
                <div key={item.id} onClick={() => {setOpenModal(true),setItem(item.id)}} className="mx-auto group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer group-hover:-translate-y-2 group-hover:shadow-xl">
                        <Image 
                            src={item.src} 
                            alt={item.alt}
                            width={400}
                            height={400}
                            className="object-cover object-center w-64 h-80"
                            />
                    </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-gray-800">
                        <a>
                          <span className="absolute inset-0"></span>
                          {item.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          <Modal show={openModal} onClose={() => setOpenModal(false)} className="font-opensauce">
            <Modal.Header>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">{products[selectedItem].name}</h1>
            </Modal.Header>
            <Modal.Body className="mx-auto max-w-lg">
              <Image 
                src={((itemColor == ' ') ? products[selectedItem].src : itemColor)} 
                alt={products[selectedItem].alt}
                width={500}
                height={500}
                className="mx-auto w-80 aspect-[3/4] object-cover object-center rounded-lg shadow-lg"
              />
              <div className="pt-4">
                  <div className="lg:row-span-3">
                    <h2 className="sr-only">Product information</h2>
                    {(products[selectedItem].colors.length != 0) && (
                      <div>
                        <h3 className="text-md text-gray-900">Color Option:</h3>
                        <fieldset className="mt-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            {products[selectedItem].colors.map((color) => (
                                <Button key={color.id} onClick={() => setColor(color.src)} className="bg-white text-gray-700 ring-1 ring-gray-300 hover:bg-gray-100 focus:ring-main-b">
                                  {color.name}
                                </Button>
                              ))
                              }
                          </div>
                        </fieldset>
                      </div>
                    )}
                  </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  )
}