import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const Main = () => {
  const { t } = useTranslation()

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            {t('let_build')}
          </p>
          <h1 className='py-4 text-gray-700'>
            {t('iam')} <span className='text-[#5651e5]'> Salvatore</span>
          </h1>
            <h1 className='py-4 text-gray-700'>
              {t('iam')} {t('a')} {t("developer")}  
            </h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              {t('description')}  
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              <Link target='_blanck' href='https://www.linkedin.com/in/salvatoredininni/' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </Link>
              <Link target='_blanck' href='https://github.com/dininni8319' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </Link>
              <Link target='_blanck' href='mailto:s.dininni@yahoo.com' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </Link>
              <a target='_blanck' href='/Resume_SD_2023.pdf' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main