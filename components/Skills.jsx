import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const Skills = () => {

  const { t } = useTranslation()
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
     <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
      <h2 className='py-2'>{t("w_can_do")}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/html.png' 
                alt='/' 
                width='64' 
                height='64' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>HTML</h3>
            </div>
          </div>
        </div>
        
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/css.png' 
                alt='/' 
                width='64' 
                height='64' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>CSS</h3>
            </div>
          </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/javascript.png' 
                alt='/' 
                width='64' 
                height='64' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>JavaScript</h3>
            </div>
          </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/typescript.svg' 
                alt='/' 
                width='80' 
                height='80' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>Typescript</h3>
            </div>
          </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/react.png' 
                alt='/' 
                width='64' 
                height='64' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>React</h3>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/angular.png' 
                alt='/' 
                width='64' 
                height='64' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>Angular</h3>
            </div>
          </div>
        </div>

         {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/nextjs.png' 
                alt='/' 
                width='64' 
                height='64' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>Nextjs</h3>
            </div>
          </div>
        </div>
 */}

         {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'> */}
          {/* <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/express.png' 
                alt='/' 
                width='64' 
                height='64' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>Express</h3>
            </div>
          </div>
        </div> */}

         <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/bootstrap.png' 
                alt='/' 
                width='80' 
                height='80' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>Bootstrap</h3>
            </div>
          </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/tailwind.png' 
                alt='/' 
                width='64' 
                height='64' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>Tailwind</h3>
            </div>
          </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/github1.png' 
                alt='/' 
                width='64' 
                height='64' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>Git & Github</h3>
            </div>
          </div>
        </div>

        {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/node.png' 
                alt='/' 
                width='64' 
                height='64' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>Node.js</h3>
            </div>
          </div>
        </div> */}

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image 
                src='/assets/skills/agile.png' 
                alt='/' 
                width='80' 
                height='80' 
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className='text-xl'>Agile</h3>
            </div>
          </div>
        </div>
        
      </div>

     </div>
    </div>
  )
}

export default Skills