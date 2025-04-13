'use client'

import { Button, Modal, Popover } from "flowbite-react";
import Image from "next/image"
import { defineQuery, PortableText } from "next-sanity";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { EMPTY_ARRAY } from "sanity";
import { PortableTextBlock } from 'sanity';

const PRODUCT_QUERY = defineQuery(`*[
  _type == "product"
]{
  _id,
  title: coalesce(title, "Untitled Product"),
  description: coalesce(description, []),
  image: coalesce(image, null),
  colors: coalesce(colors, []).[]{
    name: coalesce(name, "Unnamed Color"),
    image: coalesce(image, null)
  },
  href: coalesce(href, "#")
}`)

type SanityImageAsset = {
  _ref: string;
  _type: 'reference';
};
type SanityImage = {
  _type: 'image';
  asset: SanityImageAsset;
};
type ProductColor = {
  name: string;
  image: SanityImage;
  imageUrl: string;
};
type RawProductProps = {
  _id: string;
  name: string;
  description: PortableTextBlock[];
  image: SanityImage;
  colors: ProductColor[];
  href: string;
};

type ProductProps = RawProductProps & {
  imageUrl: string;
  colors: (ProductColor & { imageUrl: string })[];
};

const ProductSkeleton = () => (
  <div className="mx-auto group relative animate-pulse">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-300 lg:aspect-none cursor-pointer">
      <div className="object-cover object-center w-64 h-80 bg-gray-300" />
    </div>
    <div className="mt-4 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  </div>
);

export default function Product() {
  const [openModal, setOpenModal] = useState(false);
  const [customColorName, setCustomColorName] = useState('');
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [selectedItem, setItem] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductProps[]>([]); // Explicit type
  
  useEffect(() => {
    client.fetch<RawProductProps[]>(PRODUCT_QUERY).then((data) => {
      const processedData: ProductProps[] = data.map((product) => ({
        ...product,
        imageUrl: product.image ? urlFor(product.image)?.url() : '',
        colors: product.colors.map((color) => ({
          ...color,
          imageUrl: color.image ? urlFor(color.image)?.url() : '',
        })),
      }));
      setProducts(processedData);
      setLoading(false);
    });
  }, []);
  
  return (
    <div className="bg-gradient-to-b from-white to-shade-a">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 lg:max-w-none">
          <div className="font-opensauce mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))
              : products.map((item, index) => (
              <div key={item._id} onClick={() => {setOpenModal(true),setItem(index)}} className="mx-auto group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer group-hover:-translate-y-2 group-hover:shadow-xl">
                  <Image
                    alt={item.name}
                    src={item.imageUrl}
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
                    <div className="mt-1 text-sm text-gray-500" >
                      <PortableText
                        value={item.description}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!loading &&
            <Modal
              show={openModal}
              onClose={() => {
                setOpenModal(false)
                setCustomColorName('')
                setCustomImageUrl('')
              }}
              className="font-opensauce"
            >
              <Modal.Header>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">{products[selectedItem].name}</h1>
              </Modal.Header>
              <Modal.Body className="mx-auto max-w-lg">
                <Image
                  alt={customImageUrl === ''
                    ? products[selectedItem].name
                    : `${products[selectedItem].name} - ${customColorName}`
                  }
                  src={customImageUrl === ''
                    ? products[selectedItem].imageUrl
                    : customImageUrl
                  } 
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
                              <Button
                                key={color.id}
                                onClick={() => {
                                  setCustomImageUrl(color.imageUrl)
                                  setCustomColorName(color.name)
                                }}
                                className="bg-white text-gray-700 ring-1 ring-gray-300 hover:bg-gray-100 focus:ring-main-b"
                              >
                                {color.name}
                              </Button>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                    )}
                    <button className="mx-auto block w-fit px-10 py-2 bottom-4 rounded-full bg-main-b text-white m-4">
                      <a
                        className="font-roca text-lg tracking-wide"
                        href={products[selectedItem].href
                      }>
                        Buy Now
                      </a>  
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          }
        </div>
      </div>
    </div>
  )
}