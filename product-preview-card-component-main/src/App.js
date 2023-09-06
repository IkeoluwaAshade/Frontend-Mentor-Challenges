import React from 'react'
import './App.css'
import productDesktop from './Images/image-product-desktop.jpg'
import productMobile  from './Images/image-product-mobile.jpg'
import iconCart from './Images/icon-cart.svg'

const App = () => {
  return (
    <div className=''>
        <main>
            <figure>
                <img className='product-desktop' src={productDesktop} alt='Channel Perfume' height='360px' width='240px' />

                <img className='product-mobile' src={productMobile} alt='Channel Perfume' height='240px' width='320px' />
            </figure>

            <div className='perfume-container'>
                <h6>Perfume</h6>

                <h1>
                    Gabrielle Essence Eau De Parfum
                </h1>

                <p className='product-description'>
                    A floral, solar and voluptuous <br /> interpretation composed by <br /> Olivier Polge, Perfumer-Creator <br /> for the House of CHANEL
                </p>

                <div className='price'>
                    <h3>$149.99</h3>
                    <p>$169.99</p>
                </div>

                <button>
                    <img src={iconCart} alt='Add to cart Icon' />
                    <p>Add to Cart</p>
                </button>
            </div>
            
        </main>

        <footer>
            <p>Challenge by <a href='#'>Frontend Mentor</a> Coded by <a href='#'>Ikeoluwa Ashade</a></p>
        </footer>
    </div>
  )
}

export default App