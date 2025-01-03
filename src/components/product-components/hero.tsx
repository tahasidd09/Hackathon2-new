import Image from 'next/image';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link'; 

const Hero = () => {
  return (
    <div className="px-6 mt-4">
      <div className='flex justify-between items-center'>
        <h2 className='text-[#252B42] font-bold text-[24px]'>Shop</h2>
        <p className="text-[#252B42] font-bold text-[14px] flex items-center gap-1">
          <Link href="/" className="text-[#737373] hover:text-[#23A6F0]">Home</Link> 
          <FiChevronRight className="text-[#BDBDBD] text-[25px]" />{" "}
          <span className="text-[#737373]">Shop</span>
        </p>
      </div>
      <div className='mt-10 flex justify-center items-center'>
        <Image src={"/images/product/maincard.png"} alt='card' height={223} width={1088} />
      </div>
    </div>
  );
};

export default Hero;