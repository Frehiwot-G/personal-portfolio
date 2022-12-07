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
            I have been working on software development projects during my internship<br/> and also I have been participating on my university course projects.
            <br/>My career objective is to work with
                experienced web developers to develop<br/> my skills and knowledge.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        
      </div>
       
    </section>
  )
}

export default About