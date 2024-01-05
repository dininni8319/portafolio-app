import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import LocaleSwitcher from './LocaleSwitcher'

const Navbar = () => {
  const [ nav, setNav ] = useState(false)
  const [ shadow, setShadow ] = useState(false)
  const [ navBg, setNavBg ] = useState("#ecf0f3")
  const [ linkColor, setLinkColor ] = useState("#1f2937")
  const router = useRouter()
  const [ logo, setLogo ] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    if (
      router.asPath === '/ecommerce' ||
      router.asPath === '/event-app' ||
      router.asPath === '/github-search' ||
      router.asPath === '/luna' ||
      router.asPath === '/motion' ||
      router.asPath === '/ordering-app' ||
      router.asPath === '/places' ||
      router.asPath === '/presto' ||
      router.asPath === '/rehacktor' ||
      router.asPath === '/newsletter' ||
      router.asPath === '/movie-app' ||
      router.asPath === '/password-generator' ||
      router.asPath === '/landing-page' 
    ) {
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
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
       <Link href='/'>
          <Image 
            src={!logo ? '/assets/logo2.png' : '/assets/logo-removed.png'}
            alt="Logo"
            width={!logo ? '60' : '110'} 
            height={!logo ? '60' : '110'}
          />
       </Link>
         
        <div>
          <ul 
            style={{ color: `${linkColor}` }}
            className='hidden md:flex'>
            <Link href='/'>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
             <Link href='/#about'>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href='/#skills'>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href='/#experience'>
              <li className="ml-10 text-sm uppercase hover:border-b">{t('experience')}</li>
            </Link>
            <Link href='/#projects'>
              <li className="ml-10 text-sm uppercase hover:border-b">{t("projects")}</li>
            </Link>
            <Link href='/#contact'>
              <li className="ml-10 text-sm uppercase hover:border-b">{t('contact')}</li>
            </Link>
            <LocaleSwitcher />
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
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
              <ul className='uppercase pb-5'>
                <Link href='/'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#about'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/#skills'>
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
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
              <div className='pt-25'>
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
                    <Link target='_blanck' href='/Resume_SD_2023.pdf' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
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