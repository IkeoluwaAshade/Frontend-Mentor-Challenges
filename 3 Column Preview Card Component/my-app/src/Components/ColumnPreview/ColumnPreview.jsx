import React from 'react'
import './ColumnPreview.css'
import sedanIcon from '../Images/icon-sedans.svg'
import suvIcon from '../Images/icon-suvs.svg'
import luxuryIcon from '../Images/icon-luxury.svg'

const ColumnPreview = () => {
  return (
    <div className='main-body'> 

        <main>
            <div className='column sedan'>
                <img className='sedanIcon' src={sedanIcon} alt='Sedan Icon' />
                <h1>sedans</h1> 
                <p>
                Sedans Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
                </p>
                 <a href='#'>Load More</a>
            </div>

            <div className='column suv'>
                <img className='suvIcon' src={suvIcon} alt='Suvs Icon'/>
                <h1>suvs</h1>
                <p>SUVs Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
                <a href='#'>Load More</a>
            </div>

            <div className='column luxury'>
                <img className='luxuryIcon' src={luxuryIcon} alt='Luxury Icon' />
                <h1>luxury</h1>
                <p>Luxury Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
                <a href='#'>Load More</a>
            </div>
        </main>

        <footer className='xyz'>
            <div>Challenge by <span href='#'>Frontend Mentor</span> Coded by <span href='#'>Ikeoluwa Ashade</span></div>
        </footer>

    </div>
  )
}

export default ColumnPreview