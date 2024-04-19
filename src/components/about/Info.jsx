import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
        <i class='bx bxs-award about__icon'></i>
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>5 Years</span>
        </div>

        <div className='about__box'>
        <i class="uil uil-trees about__icon"></i>
            <h3 className='about__title'>Visited Cities</h3>
            <span className='about__subtitle'>50</span>
        </div>

        <div className='about__box'>
        <i class="uil uil-shutter about__icon"></i>
            <h3 className='about__title'>Pictures Taken</h3>
            <span className='about__subtitle'>10,000 & counting...</span>
        </div>
    </div>
  )
}

export default Info