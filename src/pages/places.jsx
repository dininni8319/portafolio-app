import React from 'react'
import Image from 'next/image'
import places from '../../public/assets/projects/places.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const Places = () => {
  return (
    <div  className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10' />
        <Image className='absolute z-1' fill={true} style={{ objectFit: 'cover'}} src={places} alt='E-commerce' />
        <div className='text-white z-10 p-2 absolute top-[50%] top-md-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] traslate-y-[-50]'>
          <h2 className='py-2'>Places</h2>
          <h3>React JS / Redux / Bootstrap / Express / MongoDB </h3>
        </div>
     </div>
     <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
       <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p>This Application is from an MERN Udemy course, We built the bestselling React course on Udemy - this course now allows you to take your React knowledge to the next level and build fullstack web apps based on React, NodeJS, MongoDB and Express!
Building fullstack applications (i.e. frontend + backend) with the MERN stack is very popular - in this course, you will learn it from scratch at the example of a complete project!
MERN stands for MongoDB, Express.js, React.js and Node.js - and combined, these four technologies allow you to build amazing web applications.
In this course, {"we'll "}build an entire project and you will learn how these different technologies work together step by step. {"We'll"} first have a look at all the individual building blocks, so that we then can also combine them all into one amazing application by the end of the course.
This course also {"doesn't"} stop after the basics - instead, {"you'll"} also learn how to add file upload, authentication, authorization and how to deploy your application in different ways to different hosting services.
This course is taught by two instructors - Max (React.js, Node/ Express) and Manuel (MongoDB) who have years of experience of working with these technologies and teaching them to other people. We took and combined our experiences to deliver you the best possible MERN stack course you can find out there.</p>
        <Link target='_blanck' href='http://places.salvatore-dininni.com/'>
          <button className='px-8 py-2 mt-4 mr-8'>DEMO</button>
        </Link>
        <Link target='_blanck' href='https://github.com/dininni8319/frontend-mern-max'>
          <button className='px-8 py-2 mt-4'>CODE</button>
        </Link>
       </div>
       <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 p-md-4'>
         <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />React
            </p>
             <p className='text-gray-600 py-1 py-md-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Redux
            </p>
             <p className='text-gray-600 py-1 py-md-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />CSS
            </p>
             <p className='text-gray-600 py-1 py-md-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Express
            </p>
            <p className='text-gray-600 py-1 py-md-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Google Map
            </p>
             <p className='text-gray-600 py-1 py-md-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />MongoDB
            </p>
          </div>
         </div>
       </div>
      <Link href='/#projects' className='underline capitalize cursor-pointer pb-2'>
        back
      </Link>
     </div>
    </div>
  )
}

export default Places