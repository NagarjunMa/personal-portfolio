import React from 'react'
import './skills.css';
import Frontend from './Backend'
import Backend from './Frontend'


const Skills = () => {
  return (
    <section className='skills section' id="skills">
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>My Technical Expertise</span>

        <div className='skills__container container grid'>
        <Backend />
        <Frontend />


        </div>

    </section>
  )
}

export default Skills