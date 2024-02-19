import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const About = () => {
  const { t } = useTranslation()

  const { ref, inView } = useInView()
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1 }}
      id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About Me</p>
          <h2 className='py-2'>{t('Who I am')}</h2>
            <p className='py-2 text-gray-600'>{t('whoiam_1')}</p>
            <p className='py-2 text-gray-600'>{t('whoiam_2')}</p>
            <p className='py-2 text-gray-600'>{t('whoiam_3')}</p>
            <p className='py-2 text-gray-600'>{t('whoiam_4')}</p>
            <Link href='/#projects' className='py-2 text-gray-600 cursor-pointer underline'>{t('link_projects')}</Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          { /* eslint-disable @next/next/no-img-element */}
          <img className='rounded-xl' src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGxhcHRvcCUyMHBpY3R1cmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='about' />
        </div>
      </div>
    </motion.div>
  )
}

export default About