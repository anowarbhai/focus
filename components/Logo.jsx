import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className=" relative w-[148px] h-[22px] flex">
        <Image src="/logo.svg" alt="" fill className="object-contain" />
    </Link>
  )
}
