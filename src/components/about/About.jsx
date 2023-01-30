import React from 'react'
import './about.css'
import fre from '../../assets/fre.PNG'

import {MdOutlineCastForEducation} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'><br/><br/><br/>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src={fre} alt="about me!"/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdOutlineCastForEducation className='about__icon'/>
              <h5>Education</h5>
              <small>BSC degree in computer science and engineering </small><br/><br/>
            </article>
            
          </div>
          <p>
          A software engineer with 4+ years experience of designing, coding and maintaining reliable software applications in python, C++, PHP and asp.net MVC framework
          <br/> . I am a quick learner and dedicated to keep up with the most recent developments and update my education with the upcoming technologies. 
            <br/>In addition to this technical expertise I'm an excellent communicator, can take direction well, and always strive for collaborative outcomes.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        
      </div>
       
    </section>
  )
}

export default About