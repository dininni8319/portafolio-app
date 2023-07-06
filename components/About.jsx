import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-2'>Who I am</h2>
            <p className='py-2 text-gray-600'>Hello! {"I’m"} Salvatore Dininni! I currently live in Switzerland.{" I'm "}passionate about Web Technologies and Web Development.</p>
            <p className='py-2 text-gray-600'>{"I'm"} a Frontend Developer, highly motivated, open to new challenges, quick learner, team-oriented, with good communication skills, and with a good eye for design. Passionate about technology and solving technical challenges. Open for a position as Frontend or Full-Stack developer.</p>
            <p className='py-2 text-gray-600'>My interests lie in solving problems related software Web Applications, and designing the coolest features.</p>
            <Link href='/#projects' className='py-2 text-gray-600 cursor-pointer underline'>Check out my latest projects.</Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          { /* eslint-disable @next/next/no-img-element */}
          <img className='rounded-xl' src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGxhcHRvcCUyMHBpY3R1cmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='about' />
        </div>
      </div>
    </div>
  )
}

export default About