import Image from "next/image"
import Link from "next/link"
import Logo from "./Logo"

const icons = [
    {
        src: "/footer/1.svg",
        href: ""
    },
    {
        src: "/footer/2.svg",
        href: ""
    },
    {
        src: "/footer/3.svg",
        href: ""
    },
    {
        src: "/footer/4.svg",
        href: ""
    },
    {
        src: "/footer/5.svg",
        href: ""
    },
    {
        src: "/footer/6.svg",
        href: ""
    },
    {
        src: "/footer/7.svg",
        href: ""
    },
]

export default function Footer() {
  return (
    <footer className="bg-[#10112f] py-24">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row justify-center items-center gap-12 xl:justify-between">
                {/* Social */}
                <div className="flex-1 flex gap-6">
                    {icons.map((item, index) => {
                        return <Link href={item.href} key={index}>
                            <div className="relative w-6 h-6">
                                <Image src={item.src} alt="" fill className=" object-contain"/>
                            </div>
                        </Link>
                    })}
                </div>
                {/* Logo */}
                <div className="flex-1 flex justify-center items-center">
                    <Logo />
                </div>
                {/* Copyright */}
                <div className="flex-1 flex justify-end font-light">
                    <p>&copy; 2024 Focus. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
