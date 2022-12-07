import React from 'react'
import {BiBadgeCheck} from 'react-icons/bi'
const Backend = () => {
  return (
    <div className='skill__content'>
        <h3 className='skill__title'>Backend developer</h3>
        <div className='skill__box'>
            <div className='skill__group'>
                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                    <h3 className='skill__name'>PHP</h3>
                    <span className='skill__level'>Intermediate</span>
                    </div>
                </div>

                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                    <h3 className='skill__name'>ASP.NET MVC</h3>
                    <span className='skill__level'>Intermediate</span>
                    </div>
                </div>

                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                    <h3 className='skill__name'>Nodejs</h3>
                    <span className='skill__level'>Intermediate</span>
                    </div>
                </div>

                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                    <h3 className='skill__name'>Python</h3>
                    <span className='skill__level'>Intermediate</span>
                    </div>
                </div>

            </div>
            <div className='skill__group'>
                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                    <h3 className='skill__name'>MySQL</h3>
                    <span className='skill__level'>Intermediate</span>
                    </div>
                </div>

                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                    <h3 className='skill__name'>MongoDB</h3>
                    <span className='skill__level'>Intermediate</span>
                    </div>
                </div>

                <div className='skill__data'>
                    <BiBadgeCheck className='skill_icon'/>
                    <div>
                    <h3 className='skill__name'>PostgreSQL</h3>
                    <span className='skill__level'>Basic</span>
                    </div>
                </div>

            </div>
        </div>
</div>
  )
}

export default Backend