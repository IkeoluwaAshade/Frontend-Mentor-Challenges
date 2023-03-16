import React from 'react'
import './SinglePrice.css'

const SinglePrice = () => {
  return (
    <div className='Overall-Container'>
      <div className='Content-Container'>
        <section className='top-section'>
          <header><h1>Join our community</h1></header>
          <h3 className='top-headings'>30-day, hassle-free money back guarantee</h3>
          <p className='top-paragraph'>Gain access to our full library of tutorials along with expert code reviews . Perfect for any developers who are serious about honing their skills.</p>
        </section>
        

        <section className='bottom-section'>

          <section className='bottom-left'>
            <h2> Monthly Subscription </h2>

            <p className='pricing'><b>
              <span itemprop='priceCurrency' content='USD'>$</span>
              <span itemprop ='price' content='29.00'>29</span></b><p className='per-month'>per month</p>
            </p>

            <p>Full access for less than $1 a day</p>
            <a href='#' className='cta'>Sign Up</a>
          </section>

          <section className='bottom-right'>
            <h3>Why Us</h3>
            <ul>
              <li>Tutorials by industry experts</li>
              <li>Peer & expert Code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </section>

        </section>
        
        {/* ================================================= */}
        {/* <footer>

          <p>
            Attempted solution of the Single-price-grid-component-master project. <br/> Challenge by <a href="https://www.frontendmentor.io?ref=challenge">frontend Mentor</a> <br/><b>Coded By: Ikeoluwa Ashade</b> 
          </p>

        </footer>  */}

        {/* ================================================== */}
          

      </div>

    </div>
  )
}

export default SinglePrice