import Image from "next/image"

const Logo = () => {
  return (
    <div>
      <Image alt="Logo" src="/Logo.webp"  height={48} width={48} className="text-black"/>
    </div>
  )
}

export default Logo