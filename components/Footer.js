import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center p-10">
      <div className="w-20 h-5 relative mb-2">
        <Image
          layout="fill"
          objectFit="cover"
          src="/david_logo.png"
          alt="logo"
        />
      </div>
      <h1 className="text-center text-sm text-gray-600">
        © {new Date().getFullYear()} david0 | All Rights Reserved
      </h1>
    </div>
  );
};

export default Footer;
