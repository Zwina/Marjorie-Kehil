import Image from 'next/image'
// import Nav from '@/components/navbar'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Diploma from '@/components/diploma'
//import Card from '@/components/card'
//import Competences from '@/components/competence'

export default function Home() {
  return (
    
    <main>
      {/* <Nav/> */}
      <Hero/>
      <About/>
      {/* <Competences/> */}
      <Skills/>
      <Diploma/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}
