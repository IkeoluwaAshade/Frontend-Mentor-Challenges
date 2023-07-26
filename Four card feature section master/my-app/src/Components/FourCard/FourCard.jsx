import React from 'react'
import './FourCard.css'
import teamBuilder from '../Images/icon-team-builder.svg'
import supervisor from '../Images/icon-supervisor.svg'
import calculator from '../Images/icon-calculator.svg'
import karma from '../Images/icon-karma.svg'

const FourCard = () => {
  return (
    <div className='main'>

      <section className='hero-text'>
        <div className=''>

          <h1>Reliable, efficient delivery <br /><span>Powered by Technology</span> 
          </h1>

          <p className='hero-para'>
            Our Artificial Intelligence powered tools use millions of project data<br/> points to ensure that your project is successful
          </p> 
        </div>
        
      </section>


      <div className='card-container'>      
        <div className='card supervisor'>

          <h6>Supervisor</h6>

          <p className='card-text'>Monitors activity to identify project roadblocks</p>

          <img src={supervisor} alt='A little magnifying lens to illustrate supervision'/>

        </div>

        <div className=''>
        
          <div className='card team-builder'>

            <h6>Team Builder</h6>

            <p className='card-text'>Scans our talent network to create the optimal team for your project</p>

            <img src={teamBuilder} alt='A little house to illustrate how important Team Building is'/>

          </div>

          <div className='card karma'>

            <h6>Karma</h6>

            <p className='card-text'>Regularly evaluates our talent to ensure quality</p>

            <img src={karma} alt='A Light Bulb (Karma)'/>

          </div> 

        </div>

        <div className='card calculator'>

          <h6>Calculator</h6>

          <p className='card-text'>Uses data from past projects to provide better delivery estimates</p>

          <img src={calculator} alt='A computer desktop. (Calculator)'/>

        </div>

        
         
      </div>


      <section className='footer-div'>
        <footer>
          <p>Challenge by <a href='#'>Frontend Mentor</a> Coded By <a href='#'>Ikeoluwa Ashade</a></p>
        </footer>
      </section>

    </div>
  )
}

export default FourCard