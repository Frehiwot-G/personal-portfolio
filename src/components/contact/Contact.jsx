import React from 'react'
import './Contact.css'
import {SiGmail} from 'react-icons/si'
import {ImLinkedin2} from 'react-icons/im'
const Contact = () => {
  return (
    <section className='contact__section' id='contact'><br/><br/><br/>
      <h5>Let's Talk</h5>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <SiGmail classname='contact__option-icon'/>
            <h4>Email</h4>
            <h5>frehiwotgem@gmail.com</h5>
            <a href="mailto:frehiwotgem@gmail.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <ImLinkedin2 classname='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>frehiwot-gemechu-3a2001228</h5>
            <a href="www.linkedin.com/in/frehiwot-gemechu-3a2001228">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact