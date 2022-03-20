import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
const navigation = [
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const isBrowser = () => typeof window !== "undefined"


const Layout = ({ children }) => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    isBrowser() && window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            <div className="flex flex-col h-screen">
                <Disclosure as="nav"
                    className={classNames(
                        "z-50 bg-opacity-60 backdrop-filter backdrop-blur-lg top-0 w-full transition-colors ease-in-out duration-300 fixed",
                        colorChange ? "bg-blue-100" : "bg-white"
                    )}
                >
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Link to="/">
                                                <svg
                                                    className="mx-auto my-4 fill-cyan-500 w-9 h-9"
                                                    viewBox="-180 -200 900 900"
                                                    preserveAspectRatio="xMidYMid meet"
                                                >
                                                    <path d="M442.62,1.51,534,465.24H484.14l-60-326.4L267.61,450.55,111.75,138.84,50.43,465.24H.61L93.23,2.78,267.61,342Z" />
                                                </svg>
                                            </Link>

                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4 text-gray-500">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className={
                                                            classNames(
                                                                'px-3 py-2 rounded-md text-sm font-medium  hover:bg-gray-700 hover:text-white'
                                                                , colorChange ? "text-black" : "")
                                                        }
                                                        activeClassName={classNames("bg-gray-900 text-white", colorChange ? "text-gray-100" : "text-white")}
                                                        partiallyActive={true}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">

                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-screen">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className='block px-3 py-2 rounded-md text-base font-medium hover:bg-black hover:text-white'
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-5">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}

export default Layout