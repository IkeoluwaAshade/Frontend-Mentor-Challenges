import React from 'react'
import './App.css';
import profileShot from './Images/image-victor.jpg';

const App = () => {
  return (
    <div>
      <div className='mainBg'>

        <main>

          <figure>
            <img src={profileShot} width={'100'} height={'100'} alt='Profile shot of Victor Crest' />
          </figure>

          <div className='about'>
            <h3>Victor Crest <span>26</span></h3>
            <p>London</p>
          </div>

          <div className='container'>

            <div className='item'>
              <h3>80K</h3>
              <p>Followers</p>
            </div>

            <div className='item'>
              <h3>803K</h3>
              <p>Likes</p>
            </div>

            <div className='item'>
              <h3>1.4K</h3>
              <p>Photos</p>
            </div>

          </div>

        </main>

        <footer>
          <p>Challenge by <a href='#'>Frontend Mentor.</a> Coded by <a href='#'>Ikeoluwa Ashade</a> </p>
        </footer>

      </div>
    </div>
  )
}

export default App

