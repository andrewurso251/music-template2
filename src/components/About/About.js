import React from 'react'
import musician from '../../images/about.jpg'
import './About.css'

const About = () => {
  return (
    <div className = 'about'>
        <div className = 'container'>
            <img src={musician} alt = 'john'/>
            <div className = 'col-2'>
                <h2>About</h2>
                <span className = 'line'> </span>
                <p>I teach music</p>
                <p>I play trumpet</p>
                <p>I have been doing this 30 yrs</p>
                <button className='button'>Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default About