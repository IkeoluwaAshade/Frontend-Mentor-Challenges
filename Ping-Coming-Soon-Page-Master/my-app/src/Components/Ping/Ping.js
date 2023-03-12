import React from 'react'
import './Ping.css'
import logo from '../Images/logo.svg'
import illustration from '../Images/illustration-dashboard.png'
import faceboook from '../Images/facebook.png'
import twitter from '../Images/twitter.png'
import instagram from '../Images/instagram.png'
import { useForm } from 'react-hook-form'

const Ping = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit =(data) => {
        console.log(data)
    };
 

  return (
    <div className='main-body'>

        <div className='logo-div'>
            <img src={logo} alt='The Official Logo for our Ping application' />
        </div>


        <div className='main-header'>

            <h1><span>We are launching </span><b>soon!</b></h1>

        </div>

        <p className='subscribe'>Subscribe and get notified</p>

        <div className='cta'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className='email' type='text' name='email' placeholder='Your email address...' {...register  ('email', {required: true,pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
               />
               {errors.email && errors.email.type === 'required' && (<p className='error-msg'>Please provide a valid email address.</p>)}

                <button className='notify-me'>Notify Me</button>
                
            </form>

        </div>

        <div className='illustration-img-div' >
            <img className='illustration-img' src={illustration} alt='Image illustrating the dashboard of the app' />
        </div>

        <footer className='sm'>

            <div className='socials'>
                <a href='#' title='Follow us on Facebook'>
                <img src={faceboook} alt='Facebook Icon' />
                </a>
            </div>

            <div className='socials'>
                <a href='#' title='Follow us on Twitter'>
                <img src={twitter} alt='Twitter-Icon' />
                </a>
            </div>

            <div className='socials'>
                <a href='#' title='Follow us on Instagram'>
                <img src={instagram} alt='Instagram Icon' />
                </a>
            </div>

            
            
        </footer>

        <p>$copy; Copyright Ping. All rights reserved.</p>

        
    </div>
  )
}

export default Ping