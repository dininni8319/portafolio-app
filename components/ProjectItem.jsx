import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const ProjectItem = ({ src, title, link, description }) => {
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
        className="relative flex items-center justify-center w-90 shadow-xl shadow-gray-400 rounded-xl p-2 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">  
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
  )
}

export default ProjectItem