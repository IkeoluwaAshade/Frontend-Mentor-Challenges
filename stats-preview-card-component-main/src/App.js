import React from 'react'
import './App.css'
import  headerDestop from './Images/image-header-desktop.jpg'
import  headerMobile from './Images/image-header-mobile.jpg'

const App = () => {
  return (
    <div>

        <main>

          <figure>
            <img className='mobile-image' src={ headerMobile } alt='Header mobile Image' width={450} />
          </figure>

          <div id='preview-card-component'>
            
            <h1>Get <span>insights</span> that help your business grow.</h1>

            <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency</p>

            <div id='statics'>
              <div className='stats'>
                <p><h4>10K+</h4> 
                companies</p>
              </div> 

              <div className='stats'>
                <p><h4>314</h4> 
                template</p>
              </div> 

              <div className='stats'>
                <p><h4>12M+</h4> 
                queries</p>
              </div> 
            </div>
          </div>

          <figure>
            <img className='desktop-image' src={ headerDestop } alt='Header desktop Image' width={450} />        
          </figure>
        </main>

        <footer>
            <p>Code Challenge by <a href='https://www.frontendmentor.io/home'>frontend Mentor</a> Coded by <a href='#'>Ikeoluwa Ashade</a></p>
        </footer>

    </div>
  )
}

export default App