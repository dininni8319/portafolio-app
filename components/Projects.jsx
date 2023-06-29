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
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='w-full'>
      <div className="max-w-[1240px] mx-auto px2 py-16">
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What {"I have"} Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              src={ecommerce}
              title='E-commerce'
              description='MERN Stack Project'
              link='/'
            />
            <ProjectItem
              src={rehacktor}
              title='Rehacktor'
              description='React Game Streaming Application'
              link='/'
            />
            <ProjectItem
              src={presto}
              title='Presto'
              description='Larevel Application'
              link='/'
            />
            <ProjectItem
              src={places}
              title='Places'
              description='MERN Stack Project Udemy'
              link='/'
            />
            <ProjectItem
              src={githubSearch}
              title='Github-Search'
              description='React App'
              link='/'
            />
            <ProjectItem
              src={movieApp}
              title='Movie-Trailer-App'
              description='React App'
              link='/'
            />
              <ProjectItem
              src={motion}
              title='Motion'
              description='Motion React Application'
              link='/'
            />
              <ProjectItem
              src={luna}
              title='Luna'
              description='React & Django Application'
              link='/'
            />
            <ProjectItem
              src={foodApp}
              title='Ordering-App'
              description='React App'
              link='/'
            />
            <ProjectItem
              src={eventApp}
              title='Event-App'
              description='React App'
              link='/'
            />
      </div>
    </div>
    </div>
  )
}




export default Projects