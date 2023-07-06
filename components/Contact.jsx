import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link'

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const { name, email, phone, subject, message } = event.target.elements
    const data = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        throw new Error(`Invalid response: ${res.status}`)
      }
      const result = await res.json()
      alert('Thank you! Your message sent successfully!')
      event.target.reset()
      setTimeout(() => window.scrollTo(0, 0), 1000);
    } catch (error) {
      console.log(error)
      alert('Something went wrong. Please try again.')
    }
  }
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <img src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="/" className="rounded-xl hover:scale-105 easy-in durantion-300" />
                </div>
                <div>
                  <h2 className='py-2'>Salvatore Dininni</h2>
                  <p>Frontend Developer</p>
                  <p className='py-4'>I am available for freelance or a full-time positions. Contact me and {"let's"} talk.</p>
                </div>
                <div>
                  <p className='uppercase pt-4 text-[#5651e5]'>Connect with me</p>
                  <div className='flex items-center justify-between py-4'>
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

            {/* right */}
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
              <div className="p-4">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5 w-full py-2">
                    <div className='flex flex-col'>
                      <label htmlFor="" className='uppercase text-sm py-2'>Name</label>
                      <input 
                        name='name'
                        type="text" 
                        required
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="" className='uppercase text-sm py-2'>Phone Number</label>
                      <input 
                        name='phone'
                        type="text" 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label htmlFor="" className='uppercase text-sm py-2'>Email</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      className="border-2 rounded-lg p-3 flex border-gray-300" 
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label htmlFor="" className='uppercase text-sm py-2'>Subject</label>
                    <input 
                      name="subject"
                      type="text" 
                      className="border-2 rounded-lg p-3 flex border-gray-300" 
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label htmlFor="" className='uppercase text-sm py-2'>Message</label>
                    <textarea 
                      className='border-2 rounded-3 p-3 border-gray-300' 
                      rows='10'
                      name='message'
                    >
                    </textarea>
                  </div>
                 <button className='w-full p-4 text-gray-100 mt-4'>send message</button>
                </form>
              </div>
            </div>
          </div>
          <div className='flex justify-center py-12'>
            <Link href='/'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                   <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]' />
                </div>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Contact