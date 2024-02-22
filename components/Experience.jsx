import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const Experience = () => {
    const { t } = useTranslation()

    return (
      <div id='experience' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full h-full flex flex-col justify-center'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
              {t('experience')}
            </p>
            <h2 className="py-4">{t('w_experience')}</h2>
          <ol className="grid md:grid-cols-3 lg:grid-cols-5 gap-2">
               <motion.li 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }} 
                 className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <svg className="w-2.5 h-2.5 text-[#5651e5] dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8 shadow-xl shadow-gray-400 rounded-xl p-2">
                    <h4 className="text-lg font-semibold text-gray-900">Web Developer</h4>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February, 2024</time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">Freelancer</p>
                  </div>
              </motion.li>
               <motion.li 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }} 
                 className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <svg className="w-2.5 h-2.5 text-[#5651e5] dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8 shadow-xl shadow-gray-400 rounded-xl p-2">
                    <h4 className="text-lg font-semibold text-gray-900">Codebar.io</h4>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August, 2023</time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">Coach</p>
                  </div>
              </motion.li>
              <motion.li 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}  
                 className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <svg className="w-2.5 h-2.5 text-[#5651e5] dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                   <div className="mt-3 sm:pr-8 shadow-xl shadow-gray-400 rounded-xl p-2">
                      <h4 className="text-lg font-semibold text-gray-900 ">University of Maryland</h4>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August, 2023</time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">Computer Science</p>
                  </div>
              </motion.li>
              <motion.li 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}  
                 className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <svg className="w-2.5 h-2.5 text-[#5651e5] dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8 shadow-xl shadow-gray-400 rounded-xl p-2">
                    <h4 className="text-lg font-semibold text-gray-900">Credit Network & Finance</h4>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May, 2022</time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">Full Stack Developer</p>
                  </div>
              </motion.li>
              <motion.li 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}  
                 className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <svg className="w-2.5 h-2.5 text-[#5651e5] dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                   <div className="mt-3 sm:pr-8 shadow-xl shadow-gray-400 rounded-xl p-2">
                      <h4 className="text-lg font-semibold text-gray-900">Aulab</h4>
                     <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October, 2021</time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">HackJS Certificate</p>
                  </div>
              </motion.li>
               <motion.li 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}  
                 className="relative mb-6 sm:mb-0 ">
                  <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <svg className="w-2.5 h-2.5 text-[#5651e5] dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8 shadow-xl shadow-gray-400 rounded-xl p-2">
                      <h4 className="text-lg font-semibold text-gray-900">Aulab</h4>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2021</time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">Hackademy Certificate</p>
                  </div>
              </motion.li>
              <motion.li 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}  
                 className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <svg className="w-2.5 h-2.5 text-[#5651e5] dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                          </svg>
                      </div>
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div className="mt-3 sm:pr-8 shadow-xl shadow-gray-400 rounded-xl p-2">
                      <h4 className="text-lg font-semibold text-gray-900 ">Propulsion</h4>
                      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2020</time>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">Full-Stack Developer</p>
                  </div>
              </motion.li> 
          </ol>
      </div>
    </div>
  )
}

export default Experience