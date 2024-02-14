import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from '../../components/Main'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Experience from '../../components/Experience'
import MovingIcon from '../../components/MovingIcon'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Salvatore Dininni | Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MovingIcon />
      <Main />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
