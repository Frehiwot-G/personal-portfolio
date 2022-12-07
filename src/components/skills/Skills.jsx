import React from 'react'
import './Skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
const Skills = () => {
  return (
    <section id='Skills'><br/><br/><br/>
      <h5>Skills</h5>
      <h2>My technical skills</h2>
      <div className='skills__container container grid'>
        <Frontend/>
        <Backend/>
      </div>
    </section>
  )
}

export default Skills