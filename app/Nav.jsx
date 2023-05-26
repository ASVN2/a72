'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdWbSunny } from 'react-icons/md';
import { FcMenu } from 'react-icons/fc';

const Nav = () => {
  const [opne, setopn] = useState(false);
  return (
    <div className="max-w-[1000px] relative  bg-green-400 text-black p-2 mt-10 rounded-md px-6 mx-auto my-6 flex justify-between">
      <div className="logo font-logo text-2xl">
        <Link href={'/'}>
          <img src="/darklogo.png" className="max-w-[40px]" alt="logo.png" />
        </Link>
      </div>
      <ul
        // className={` ${
        //   !open
        //     ? 'absolute  top-6 right-0 bg-blue-400 w-[100%] justify-center p-10 place-items-start flex-col'
        //     : 'md:flex  row gap-5 text-xl relative capitalize place-items-center'
        // }`
        //}
        className=" w-fit place-items-center flex gap-4 ">
        <Link href={'/quates'}>quates</Link>
        <p href={'/'} className="hidden md:block  line-through">
          blog
        </p>
        <p href={'/'} className="hidden md:block line-through">
          About
        </p>
        <p href={'/'} className="hidden md:block line-through">
          resource
        </p>
        <Link href={'/now'} className="font-bold">
          now
        </Link>
        <div className="mood flex place-items-center cursor-pointer">
          <MdWbSunny className="text-2xl" />
        </div>
        <div className="x ml-2 flex place-items-centercursor-pointer text-2xl  text-black md:hidden">
          <FcMenu className="" />
        </div>
      </ul>
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="AA72"
        data-description="Support me on Buy me a coffee!"
        data-message=""
        data-color="#40DCA5"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"></script>
    </div>
  );
};

export default Nav;
