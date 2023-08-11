import React from 'react'
import './NFT.css'
import imageEquilibrium from '../Images/image-equilibrium.jpg'
import imageAvatar from '../Images/image-avatar.png'

const NFT = () => {
    
  return (
    <div>
        <div className='main-background'>

            <div className='card-container'>

                <a className='image-link' href='#' aria-label='Unveil the Equilibrium Compilation'>
                    <img className='image' src={imageEquilibrium} alt="Equilibrium #3429" width="302" height="302" />
                </a>

                <h1 className='title'><a href="#" data-hover="Equilibrium #3429" className='link'>Equilibrium #3429</a></h1>

                <p>Our Equilibrium collection promotes <br /> balance and calm.</p>

                <div className='details'>
                    <span className='price'>0.041 ETH</span>
                    <span className='date'>3 days left</span>
                </div>

                <footer className='footer'>
                    <img className='avatar' src={imageAvatar} alt="Avatar of Jules Wyvern" width="33" height="33" />
                    <p class="creator">Creation of <a href="#" data-hover="Jules Wyvern">Jules Wyvern</a></p>
                </footer>

            </div>

        </div>



    </div>
  )
}

export default NFT