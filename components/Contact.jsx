import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Contact = () => {
  const { t } = useTranslation()
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const { name, email, phone, subject, message, service } = event.target.elements
    const data = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      service: service.value,
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
        toast.error('Ocorreu um erro ao enviar o formulário!')
        throw new Error(`Invalid response: ${res.status}`)
      }
      const result = await res.json()
      toast.success('Thank you! Your message sent successfully!')
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
            {t('contact')}
          </p>
          <h2 className="py-4">{t("get_in_touch")}</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                 { /* eslint-disable @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="/" className="rounded-xl hover:scale-105 easy-in durantion-300" />
                </div>
                <div>
                  <h2 className='py-2'>Salvatore Dininni</h2>
                  <p>{t('developer')}</p>
                  <p className='py-4'>{t("contanct_parag")}</p>
                </div>
                <div>
                  <p className='uppercase pt-4 text-[#5651e5]'>{t('connect')}</p>
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
                    <a target='_blanck' href='/Resume_SD_2024.pdf' className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </a>
                    <Link href="https://api.whatsapp.com/send?phone=41762160203" target='_blanck'>
                      <FaWhatsapp size={45} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'  />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
              <div className="p-4">
                <form onSubmit={handleSubmit}>
                  <div className='flex flex-col'>
                    <label htmlFor="contact-services" className='uppercase text-sm py-2'>{t('services')}</label>
                    <select 
                      name='service'
                      id="contact-services"
                      type="text" 
                      required
                      defaultValue="select_service"
                      className="border-2 rounded-lg p-3 flex border-gray-300" 
                    >
                      <option value="select_service" disabled>{t('select_service')}</option>
                      <option value="Web development">{t('web_dev')}</option>
                      <option value="Restyling">{t('restyling_dev')}</option>
                      <option value="Hosting">{t('hosting')}</option>
                    </select>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5 w-full py-2">
                    <div className='flex flex-col'>
                      <label htmlFor="" className='uppercase text-sm py-2'>{t('name')}</label>
                      <input 
                        name='name'
                        type="text" 
                        required
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor="" className='uppercase text-sm py-2'>{t('phone')}</label>
                      <input 
                        name='phone'
                        type="text" 
                        className="border-2 rounded-lg p-3 flex border-gray-300" 
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label htmlFor="" className='uppercase text-sm py-2'>{t('email')}</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      className="border-2 rounded-lg p-3 flex border-gray-300" 
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label htmlFor="" className='uppercase text-sm py-2'>{t('subject')}</label>
                    <input 
                      name="subject"
                      type="text" 
                      className="border-2 rounded-lg p-3 flex border-gray-300" 
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label htmlFor="" className='uppercase text-sm py-2'>{t('message')}</label>
                    <textarea 
                      className='border-2 rounded-3 p-3 border-gray-300' 
                      rows='10'
                      name='message'
                    >
                    </textarea>
                  </div>
                 <button className='w-full p-4 text-gray-100 mt-4'>{t('send')}</button>
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