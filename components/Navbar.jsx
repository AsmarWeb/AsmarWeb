import Image from 'next/legacy/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo.png';
import UserImg from '../public/assets/user.png'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#000000');
  const [linkColor, setLinkColor] = useState('#ffffff');
  // const [position, setPosition] = useState('fixed')
  const router = useRouter();

  const isUserLoggedIn = false;

  // const [providers, setProviders] = useState(null);

  // useEffect(() => {
  //   const setProviders = async () => {
  //     const response = await getProviders();

  //     setProviders(response);
  //   }

  //   setProviders();
  // }, [])

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/netflix' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#000000');
      setLinkColor('#ffffff');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (

    <nav style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100] border-b border-gray-300'
      }>
      <div className='block px-6 py-4 mx-auto sticky top-3 shadow lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]'>
        <div className="container flex flex-wrap items-center justify-between mx-auto dark:border-gray-600">
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 text-red-600 font-bold text-2xl"
          >
            {/* <Image src={NavLogo}
            alt='Logo'
            className='relative'
            width={30}
            height={30}
          /> */}
            <p>AsmarWeb</p>
          </Link>

          {/* RIGHT */}
          <div className='flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-cente lg:order-1'>
            <div className='hidden md:flex'>
              <ul style={{ color: `${linkColor}` }} className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <li className='text-sm uppercase hover:border-b mt-2 lg:mt-0 lg:mx-4'>
                  <Link href='/#about'>About</Link>
                </li>
                <li className='text-sm uppercase hover:border-b mt-2 lg:mt-0 lg:mx-4'>
                  <Link href='/#skills'>Skills</Link>
                </li>
                <li className='text-sm uppercase hover:border-b mt-2 lg:mt-0 lg:mx-4'>
                  <Link href='/#projects'>Projects</Link>
                </li>
                {/* <li className='text-sm uppercase hover:border-b'>
              <Link href='/resume'>Resume</Link>
            </li> */}
                <li className='text-sm uppercase hover:border-b mt-2 lg:mt-0 lg:mx-4'>
                  <Link href='/#contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>


          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px]'
          >
            <AiOutlineMenu size={25} />
          </div>


          {/* Mobile Menu */}
          {/* Overlay */}
          <div
            className={
              nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
            }
          >
            {/* Side Drawer Menu */}
            <div
              className={
                nav
                  ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff] p-10 ease-in duration-500'
                  : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
              }
            >
              <div>
                <div className='flex w-full items-center justify-between'>
                  <Link href='/' className='text-2xl font-semibold tracking-wide dark:text-gray-300'>AsmarWeb</Link>
                  <div
                    onClick={handleNav}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-gray-300'
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                  <p className='w-[85%] md:w-[90%] py-4 dark:text-gray-300'>
                    Let&#39;s build something legendary together
                  </p>
                </div>
              </div>
              <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                  <Link href='/#about' legacyBehavior>
                    <li onClick={() => setNav(false)} className='py-4 text-sm dark:text-gray-300'>
                      About
                    </li>
                  </Link>
                  <Link href='/#skills' legacyBehavior>
                    <li onClick={() => setNav(false)} className='py-4 text-sm dark:text-gray-300'>
                      Skills
                    </li>
                  </Link>
                  <Link href='/#projects' legacyBehavior>
                    <li onClick={() => setNav(false)} className='py-4 text-sm dark:text-gray-300'>
                      Projects
                    </li>
                  </Link>
                  <Link href='/#contact' legacyBehavior>
                    <li onClick={() => setNav(false)} className='py-4 text-sm dark:text-gray-300'>
                      Contact
                    </li>
                  </Link>
                </ul>
                <div className='pt-20'>
                  <p className='uppercase tracking-widest text-red-600'>
                    Let&#39;s Connect
                  </p>
                  <div className='flex items-center justify-between my-4 w-full sm:w-[80%] dark:text-gray-300'>
                    <a
                      href='https://www.linkedin.com/in/mr-asim/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href='https://github.com/AsmarTechniq'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                      </div>
                    </a>
                    <Link href='/#contact' legacyBehavior>
                      <div
                        onClick={() => setNav(!nav)}
                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                      >
                        <AiOutlineMail />
                      </div>
                    </Link>
                    <Link href='/resume' legacyBehavior>
                      <div
                        onClick={() => setNav(!nav)}
                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                      >
                        <BsFillPersonLinesFill />

                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
