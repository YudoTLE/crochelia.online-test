'use client'
import {useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Drawer, DrawerHeader, Sidebar } from 'flowbite-react'

const pages = [
  { id: 0, name: 'Home', href: '/' },
  { id: 1, name: 'Collaborations', href: '/collab' },
  { id: 2, name: 'Products', href: '/product' },
  { id: 3, name: 'Workshops', href: '/workshop' },
  { id: 4, name: 'Private Class', href: '/class' },
]

export default function Navigation(){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClose = ()=> setMobileMenuOpen(false);

  return (
  <header className="bg-white shadow-lg transition ease-in-out duration-100 header fixed x-0 top-0 left-0 right-0 z-50">
    <div
      className="absolute inset-y-0 left-0 w-full bg-[url('/images/nav-shade-left.png')] bg-cover bg-left z-[-1]"
      style={{ transform: "translateX(min(calc(30% - 396px), 0px))" }}
    ></div>
    <div
      className="absolute inset-y-0 right-0 w-full bg-[url('/images/nav-shade-right.png')] bg-cover bg-right z-[-1]"
      style={{ transform: "translateX(max(calc(396px - 30%), 0px))" }}
    ></div>
    <div className="absolute inset-0 bg-[url('/images/nav-pattern.png')] bg-repeat-x bg-[length:auto_100%] z-[-1]"></div>
      <nav aria-label="Global" className="mx-auto flex items-center justify-between p-4 lg:p-6 max-w-5xl z-10">
        <div className="hidden lg:flex">
          <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Crochelia</span>
              <Image
                className="object-fit h-8 aspect-[6/1]"
                style={{
                  width:"auto"
                }}
                src="/images/half-t.png"
                alt=""
                width={200}
                height={200}
              />
            </a>
        </div>
        <div className="flex lg:hidden">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Crochelia</span>
            <Image
              src="/images/icon-t.png"
              alt=""
              width={32}
              height={32}
            />
          </a>
        </div>
        <div className={`text-gray-900 flex lg:hidden`}>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className={`font-opensauce text-gray-700 hidden lg:flex lg:gap-x-14`}>
          {pages.map((item) => (
            <a 
              key={item.id} 
              href={item.href} 
              className="-mx-3 block px-3 text-base leading-6 hover:text-main-b hover:font-bold"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Drawer open={mobileMenuOpen} onClose={handleClose} position='right' className="lg:hidden">
        <DrawerHeader titleIcon={() =>
          <a href="/">
            <span className="sr-only">Crochelia</span>
            <Image
              src="/images/icon-t.png"
              alt=""
              width={32}
              height={32}
            />
          </a>}>
        </DrawerHeader>
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    {pages.map((item) => (
                      <Sidebar.Item key={item.name} href={item.href} className="font-opensauce hover:bg-shade-a">
                        {item.name}
                      </Sidebar.Item>
                    ))}
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
    </Drawer>
  </header>
  );
};

