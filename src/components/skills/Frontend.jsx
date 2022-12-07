import React from 'react'
import {BiBadgeCheck} from 'react-icons/bi'
const Frontend = () => {
  return (
    <div className='skill__content'>
        <h3 className='skill__title'>Frontend developer</h3>
        <div className='skill__box'>
            <div className='skill__group'>
                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                       <h3 className='skill__name'>HTML</h3>
                       <span className='skill__level'>Advanced</span>
                    </div>
                </div>

                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                       <h3 className='skill__name'>CSS</h3>
                       <span className='skill__level'>Intermediate</span>
                    </div>
                </div>

                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                       <h3 className='skill__name'>Javascript</h3>
                       <span className='skill__level'>Intermediate</span>
                    </div>
                </div>

            </div>
            <div className='skill__group'>
                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                       <h3 className='skill__name'>Bootstrap</h3>
                       <span className='skill__level'>Intermediate</span>
                    </div>
                </div>

                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                       <h3 className='skill__name'>Git</h3>
                       <span className='skill__level'>Intermediate</span>
                    </div>
                </div>

                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                       <h3 className='skill__name'>React</h3>
                       <span className='skill__level'>Intermediate</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Frontend