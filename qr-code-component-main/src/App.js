import React from 'react'
import './App.css'
import qrCode from './Images/image-qr-code.png'

const App = () => {
  return (
    <div>
        <main>

           <div className='container'>

                <img src={qrCode} alt='Bar-code scan' width='290px' height='300px' />

                <h2>Improve your front-end <br />skills by building projects</h2>

                <p>Scan the QR code to visit Frontend <br /> Mentor and take your coding skills to <br />the next level</p>
            </div>

        </main>

        <footer>
            <p>Challenge by <a href='#'>Frontend Mentor.</a>Coded by Your <a href='#'>Ikeoluwa Ashade.</a></p>
          
        </footer>
    </div>
  )
}

export default App