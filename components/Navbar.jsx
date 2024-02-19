import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import LocaleSwitcher from './LocaleSwitcher';
import { paths } from '../src/utils';
import { useWidth } from '../src/hooks/window-size';


const Navbar = () => {
  const [ nav, setNav ] = useState(false)
  const [ shadow, setShadow ] = useState(false)
  const [ navBg, setNavBg ] = useState("#ecf0f3")
  const [ linkColor, setLinkColor ] = useState("#1f2937")
  const router = useRouter()
  const [ logo, setLogo ] = useState(false)
  const { t } = useTranslation()
  const width = useWidth();
  
  useEffect(() => {
    if (paths(router.asPath)) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
      setLogo(true)
    } else {
      setNavBg("#ecf0f3")
      setLinkColor("#1f2937")
      setLogo(false)
    }
    
  },[router])

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  },[])

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : "fixed w-full h-20 z-[100]"}>
      <div className='ms-2 md:grid md:grid-cols-5 justify-between items-center w-full h-full px-1 2xl:px-16'>
        <div className='md:col-span-1 flex items-center justify-between mt-2'>
          <Link href='/'>
              <Image 
                src={!logo ? '/assets/logo2.png' : '/assets/logo-removed.png'}
                alt="Logo"
                width={!logo ? '60' : '110'} 
                height={!logo ? '60' : '110'}
              />
          </Link> 
          {width > 1000 && <h3 className='hidden md:block text-gray-600 text-2xl'>
            {"<"}
              <span className='px-1 text-[#5651e5] text-2xl font-bold'>
                Freelancer
              </span>
              {"/>"}
          </h3>}
          <div onClick={handleNav} className='md:hidden px-2'>
            <AiOutlineMenu size={25} /> 
          </div>
        </div>
        <div className="md:flex md:col-span-4 justify-end items-center">
         {width > 1000 && <Link href="https://api.whatsapp.com/send?phone=41762160203" className="hidden md:block px-1" target='_blanck'>
            <FaWhatsapp size={30} color="green"  />
          </Link>}
          <ul 
            style={{ color: `${linkColor}` }}
            className='hidden md:flex'>
            <Link href='/'>
              <li className="ml-4 text-sm uppercase hover:border-b">Home</li>
            </Link>
             <Link href='/#about'>
              <li className="ml-4 text-sm uppercase hover:border-b">{t('about-me')}</li>
            </Link>
            <Link href='/#skills'>
              <li className="ml-4 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href='/#services'>
              <li onClick={() => setNav(false)} className="ml-3 text-sm uppercase hover:border-b">{t("services")}</li>
            </Link>
            <Link href='/#experience'>
              <li className="ml-4 text-sm uppercase hover:border-b">{t('experience')}</li>
            </Link>
            <Link href='/#projects'>
              <li className="ml-4 text-sm uppercase hover:border-b">{t("projects")}</li>
            </Link>
            <Link href='/#contact'>
              <li className="ml-4 text-sm uppercase hover:border-b">{t('contact')}</li>
            </Link>
            <LocaleSwitcher />
          </ul>
        </div>
      </div>
       <div className={nav ? 'fixed left-0 top-0 h-screen w-full bg-black/70' : ''}>
          <div className={nav
           ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
           : 'fixed left-[-100%] top-0 p-10 ease-in duration-500' }>
            <div>
              <div className='flex w-full items-center justify-between'>
               <Link href='/' onClick={() => setNav(false)}>
                  <Image 
                      src='/assets/logo2.png' 
                      alt='Logo' 
                      width='87' 
                      height='37'
                    />
               </Link>
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'>
                  <AiOutlineClose size={25} />  
                </div>
              </div>
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>{t('let_build')}</p>
              </div>
            </div>
            <div className='py-4 flex-col'>
              {/* mobile */}
              <ul className='uppercase pb-5'>
                <Link href='/'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#about'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>{t('about-me')}</li>
                </Link>
                <Link href='/#skills'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                </Link>
                <Link href='/#services'>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">{t("services")}</li>
                </Link>
                <Link href='/#experience'>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">{t("experience")}</li>
                </Link>
                <Link href='/#projects'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>{t("projects")}</li>
                </Link>
                <Link href='/#contact'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>{t("contact")}</li>
                </Link>
                <LocaleSwitcher />
              </ul>
              <div className='pt-22'>
                <p className='uppercase tracking-widest text-[#5651e5]'>{t('connect')}</p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <Link target='_blanck' href='https://www.linkedin.com/in/salvatoredininni/' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </Link>
                    <Link target='_blanck' href='https://github.com/dininni8319' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </Link>
                    <Link target='_blanck' href='mailto:s.dininni@yahoo.com' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </Link>
                    <Link target='_blanck' href='/Resume_SD_2024.pdf' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=41762160203" target='_blanck'>
                      <FaWhatsapp size={40} className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300'  />
                    </Link>
                </div>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Navbar