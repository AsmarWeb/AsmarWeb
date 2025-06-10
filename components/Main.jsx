import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/legacy/image';
import HeroImg from '../public/assets/asmarlogo.png';
import { HiDownload } from "react-icons/hi";
import { AiFillLinkedin, AiFillDribbbleCircle, AiFillInstagram, AiFillBehanceCircle } from "react-icons/ai";
import SearchBar from './SearchBar';


const Main = () => {
  return (
    <section>
      <div id='home' className='flex min-h-screen max-w-[940px] mx-auto p-2 pt-[120px]'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
          <div className='col-span-7 place-self-center text-center sm:text-left'>
            {/* <p className='uppercase text-sm tracking-widest text-gray-500'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p> */}
            <h1 className='text-black dark:text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
              Hi, I&#39;m <span className='text-red-600'>
                <Typewriter
                  options={{
                    strings: [
                      'Mr.A',
                      'Web Developer',
                      'Designer',
                      'UI/UX Designer',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className='text-gray-500 text-base sm:text-lg mb-6 lg:text-xl'>
              I turn ideas into reality. <br>
              </br>
              Let's build the brand that will represent you in the market... !
            </p>
            <div>
              {/* <button className='px-6 py-3 mb-3 w-full sm:w-fit rounded-full mr-4 dark:bg-white dark:text-[#000000]'>Hire Me</button>
              <button className='px-6 py-3 w-full sm:w-fit rounded-full border border-red-600 dark:border-white dark:bg-transparent'>Download CV</button> */}
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 mb-3 w-full sm:w-fit rounded-full mr-4 bg-[#000000] text-white dark:bg-white dark:text-[#000000]"
              >
                Hire Me
              </Link>
              <a
                className="border border-red-600 hover:bg-gray-400 dark:border-white dark:bg-transparent px-1 inline-block py-1 w-full sm:w-fit rounded-full mt-3"
                href='/CV.pdf' download
              >
                <span className="rounded-full px-7 py-2 flex items-center justify-center gap-2">
                  Download CV <HiDownload />
                </span>
              </a>
            </div>
          </div>
          <div className='col-span-5 place-self-center mt-4 lg:mt-0 shadow-xl shadow-gray-400 dark:shadow-gray-500 rounded-full flex items-center justify-center p-2'>
            <Image src={HeroImg}
              alt='hero image'
              className='absolute transform'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section >
  );
};

export default Main;
