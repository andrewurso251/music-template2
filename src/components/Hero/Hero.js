import React from 'react'
import './Hero.css'
import backgroundVideo from '../../images/hero.mp4'


const Hero = () => {
  return (
    
    <div className = 'hero'>
        <video autoPlay loop muted id ='video'>
          <source src = {backgroundVideo} type = 'video/mp4'/>
        </video>
        <div className = 'content'>
        
            <p>Call us</p>
            <p>1-800-233-4326</p>
            <p>Because Money</p>
            <p>Doesn't Come with instructions</p>
            <button href ='/' className = 'button'> Free consultation</button>
        </div>
        
    </div>
  )
}

export default Hero