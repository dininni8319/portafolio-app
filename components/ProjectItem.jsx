import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectItem = ({ src, title, link, description }) => {
  const { t } = useTranslation()

  const presenze = {
    pageInitial: {
      opacity: 0
    },
    pageAnimate: {
      opacity: 1
    },
    pageExit: {
      backgroundColor: 'white',
      filter: `invert()`,
      opacity: 0
    }
  }

  const over = {
    position: 'relative',
    zIndex: 1,
    // background: 'white',
    scale: [1, 1.4, 1.2],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: .2
    },
    filter: [
      'hue-rotate(0) contrast(100%)',
      'hue-rotate(360deg) contrast(200%)',
      'hue-rotate(45deg) contrast(300%)',
      'hue-rotate(0) contrast(100%)'
    ],
  };
  return (
    <AnimatePresence>
      <motion.div initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={presenze} whileHover={over} className="relative flex items-center justify-center w-90 shadow-xl shadow-gray-400 rounded-xl p-2 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">  
            <div className='card-project'>
              <Image className='rounded-xl group-hover:opacity-20 image' src={src} alt='/'/>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
              <p className='pb-4 pt-2 text-white text-center'>{description}</p>
              <Link href={link}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>{t('more')}</p>
              </Link>
            </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectItem