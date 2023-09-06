import React from 'react'
import './App.css'
import musicIcon from './Images/icon-music.svg'
import illustrationHero from './Images/illustration-hero.svg'


const App = () => {
  return (
    <div className='main-background'>
        <main>

            <img className='illustration-hero' src={ illustrationHero } alt='Hero Illustration' width='450px' />


            <div className='container'>
                <h2>Order Summary</h2>

                <p className='container-paragraph'>
                    You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
                </p>

                <div className='annual-plan'>

                    <div className='music-annualplan'>
                        <img src={ musicIcon } alt='Music Icon' />

                        <div>
                            <h4>Annual Plan</h4>
                            <p className='price'>$59.99/year</p>
                        </div>
                    </div>

                    <a href='#'>Change</a>
                </div>

                <button className='proceed-to-payment'>
                    Proceed to Payment
                </button>
                
                <button className='cancel-order'>
                    Cancel Order
                </button>
                
            </div>
        </main>

        <footer>
            <p>Challenge By <a href='#'>Frontend Mentor</a> Coded By <a href='#'>Ikeoluwa Ashade</a></p>
        </footer>
    </div>
  )
}

export default App