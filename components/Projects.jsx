import React from 'react'
import ecommerce from '../public/assets/projects/e-commerce.png'
import rehacktor from '../public/assets/projects/rehacktor.png'
import places from '../public/assets/projects/places.jpg'
import githubSearch from '../public/assets/projects/github-search.jpeg'
import movieApp from '../public/assets/projects/movie-app.png'
import luna from '../public/assets/projects/luna.png'
import motion from '../public/assets/projects/motion.png'
import presto from '../public/assets/projects/presto.png'
import eventApp from '../public/assets/projects/event-app.png'
import foodApp from '../public/assets/projects/food-app.png'
import newsLetter from '../public/assets/projects/newsletter.png'
import password from '../public/assets/projects/password-generator.png'
import ProjectItem from './ProjectItem'
import { useTranslation } from 'next-i18next'


const Projects = () => {

  const { t } = useTranslation()
  return (
    <div id='projects' className='w-full'>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>{t('projects')}</p>
        <h2 className='py-4'>{t('w_build')}</h2>
        <div className="grid md:grid-cols-2 gap-14">
            <ProjectItem
              src={password}
              title='Password Generator'
              description='Angular Application'
              link='/password-generator'
            />
            <ProjectItem
              src={newsLetter}
              title='Newsletter'
              description='Nextjs Application'
              link='/newsletter'
            />
            <ProjectItem
              src={eventApp}
              title='Event-App'
              description='React App'
              link='/event-app'
            />
            <ProjectItem
              src={ecommerce}
              title='E-commerce'
              description='MERN Stack Project'
              link='/ecommerce'
            />
            <ProjectItem
              src={rehacktor}
              title='Rehacktor'
              description='React Game Streaming Application'
              link='/rehacktor'
            />
            <ProjectItem
              src={presto}
              title='Presto'
              description='Larevel Application'
              link='/presto'
            />
            <ProjectItem
              src={places}
              title='Places'
              description='MERN Stack Project Udemy'
              link='/places'
            />
            <ProjectItem
              src={githubSearch}
              title='Github-Search'
              description='React App'
              link='/github-search'
            />
            <ProjectItem
              src={movieApp}
              title='Movie-Trailer-App'
              description='React App'
              link='/movie-app'
            />
              <ProjectItem
              src={motion}
              title='Motion'
              description='Motion React Application'
              link='/motion'
            />
              <ProjectItem
              src={luna}
              title='Luna'
              description='React & Django Application'
              link='/luna'
            />
            <ProjectItem
              src={foodApp}
              title='Ordering-App'
              description='React App'
              link='/ordering-app'
            />
      </div>
    </div>
    </div>
  )
}




export default Projects