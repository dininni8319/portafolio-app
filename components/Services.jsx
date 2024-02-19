import { useTranslation } from "next-i18next";
import { FaGlobe, FaServer } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const Services = () => { 
  const { t } = useTranslation();

  const { ref, inView } = useInView()
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div 
        id='services' 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
        className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full h-full flex flex-col justify-center'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
              {t('services')}
          </p>
          <h2 className="py-4">{t('prov_services')}</h2>
          <div className="grid md:grid-cols-3 gap-10">
          <div className="w-90 shadow-xl shadow-gray-400 rounded-xl p-3">
            <div className="flex flex-col items-center">
              <div className="flex py-4">
                <FaGlobe size={55} color="#5651e5" />
              </div>
                <h3 className="py-2 text-xl text-gray-600 text-center">{t("service-app-creation")}</h3>
              </div>
              <p>{t("app-creation-description")}</p>
            </div>  
      
            <div className="w-90 shadow-xl shadow-gray-400 rounded-xl p-3">
              <div className="flex flex-col items-center">
                <SiProgress size={55} color="cyan"/>
                <h3 className="py-2 text-xl text-gray-600">Restyling</h3>
              </div>
              <p>{t("restyling-description")}</p>
            </div>

            <div className="w-90 shadow-xl shadow-gray-400 rounded-xl p-3">
              <div className="flex flex-col items-center">
                <FaServer size={55} color="purple"/>
                <h3 className="py-2 text-xl text-gray-600">Hosting</h3>
              </div>
              <p>{t("hosting-description")}</p>
            </div>
          </div>
        </div>
    </motion.div>
  )
}

export default Services;