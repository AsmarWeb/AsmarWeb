import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>ASIM | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='actual-receipt max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] dark:bg-slate-600 my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>ASIM AHMED</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/mr-asim'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/AsmarWeb'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Web developer <span className='px-1'>|</span> Designer {' '}
              <span className='px-1'>|</span> Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Web developer</p>
            <p className='py-2'>Designer</p>
            <p> Problem Solving</p>
          </div>
        </div>
        <p>
          I am a self-taught designer with experience in creating digital interfaces, websites, and social media design I also have the ability to bring those concepts to life through creative front-end development.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SEO
            <span className='px-2'>|</span>Google Ad's
            <span className='px-2'>|</span>WordPress
            <span className='px-2'>|</span>Social media Manager
            <span className='px-2'>|</span>Adobe Photoshop
            <span className='px-2'>|</span>Illustrator, XD , figma
          </p>
          <p className='py-2'>
            <span className='font-bold'></span>
            <span className='px-2'>|</span>
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              November Furniture L.L.C
            </span>
            <span className='px-2'>|</span>Sharjah, UAE
          </p>
          <p className='py-1 italic'>Web developer & Social media manager (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Build an ecommerce web app to sell products online. Increase company sales by 58%.
            </li>
            <li>
              Revamped web application security applications, minimizing hacker attacks from 2.3% to 0.02%.
            </li>
            <li>
              Excelled in user experience and user interfaces.
            </li>
            <li>
              Designed and developed user-friendly website, including optimized check-out page that increased user
              clicks, and subsequently customer purchases by 20%.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Woi Studio
            </span>
            <span className='px-2'>|</span>KHARTOUM, SD
          </p>
          <p className='py-1 italic'>Front-End Developer Intern (2019 - 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Translated designs and wireframes into high-quality code using HTML, CSS , and JavaScript.
            </li>
            <li>
              Worked closely with developers, designers, copywriters, and other cross-functional teams (CRO Video, Marketing , etc..) to
              drive innovation and maximize conversions by 40%.
            </li>
            <li>
              Provided input to leaders 3 times a year about the future development of new features.
            </li>
            <li>
              Ensured the technical feasibility of UI/UX designs.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Freelance</span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Social media post design.
            </li>
            <li>
              Video editing with after effects & premiere.
            </li>
            <li>
              Photographer.
            </li>
            <li>
              Ui/Ux designer.
            </li>
            <li>
              Brand identity designer.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
