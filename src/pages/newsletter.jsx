import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import newsletter from '../../public/assets/projects/newsletter.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import { useTranslation } from 'next-i18next'

const Newsletter = () => {
  const { t } = useTranslation()
  return (
    <div  className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10' />
        <Image className='absolute z-1' fill={true} style={{ objectFit: 'cover'}} src={newsletter} alt='newsletter' />
        <div className='text-white z-10 p-2 absolute top-[50%] top-md-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] traslate-y-[-50]'>
          <h2 className='py-2'>Newsletter</h2>
          <h3>Next.js / Typescript / SendGrid / Tailwind </h3>
        </div>
     </div>
     <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
       <div className='col-span-4'>
        <p>{t('project')}</p>
        <h2>{t('overview')}</h2>
        <p>
          {t('newsletter_description')}  
        </p>
        <Link target='_blanck' href='https://newsletter-tau-two.vercel.app'>
          <button className='px-8 py-2 mt-4 mr-8'>
            DEMO
          </button>
        </Link>
        <Link target='_blanck' href='https://github.com/dininni8319/newsletter'>
          <button className='px-8 py-2 mt-4'>{t('code')}</button>
        </Link>
       </div>
       <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
         <div className='p2'>
          <p className='text-center font-bold pb-2'>{t('technologies')}</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Nextjs
            </p>
             <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Typescript
            </p>
             <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Tailwind
            </p>
             <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />SendGrid
            </p>
             <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />PWD
            </p>
          </div>
         </div>
       </div>
      <Link href='/#projects' className='underline capitalize cursor-pointer'>
        {t('back')}
      </Link>
     </div>
    </div>
  )
}

export default Newsletter