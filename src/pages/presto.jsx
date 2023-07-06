import React from 'react'
import Image from 'next/image'
import presto from '../../public/assets/projects/presto.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const Presto = () => {
  return (
    <div  className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10' />
        <Image className='absolute z-1' fill={true} style={{ objectFit: 'cover'}} src={presto} alt='Rehacktor' />
        <div className='text-white z-10 p-2 absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] traslate-y-[-50]'>
          <h2 className='py-2'>Presto</h2>
          <h3> Laravel / Google Cloud / Bootstrap / Mysql / Spatie Media Library</h3>
        </div>
     </div>
     <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
       <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p>A web application where users can post items that they wanted to sell, similar to Craig’s List. Users are looking for a platform that is easy to use, accessible across multiple countries, and allows for content analysis.
        Main implementations: Multi Language, Image Resizing, Application of a watermark, Content Analysis, Face removal, Search Full Text, Announcement Approval System.
 

</p>
       {/* <button className='px-8 py-2 mt-4 mr-8'>DEMO</button> */}
        <Link target='_blanck' href='https://github.com/dininni8319/presto'>
          <button className='px-8 py-2 mt-4'>CODE</button>
        </Link>
       </div>
       <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
         <div className='p2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Laravel 
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Google Cloud
            </p>
             <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Bootstrap
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Mysql
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Spatie Media Library
            </p>
          </div>
         </div>
       </div>
      <Link href='/#projects' className='underline capitalize cursor-pointer'>
        back
      </Link>
     </div>
    </div>
  )
}

export default Presto