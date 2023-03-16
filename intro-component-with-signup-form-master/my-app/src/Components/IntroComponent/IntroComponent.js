import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './IntroComponent.css'




const IntroComponent = ( props ) => {

    const [successMsg, setSuccessMsg] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        setSuccessMsg('User registration is successful.');
        reset();
    };

  return (
    <div>

        <div className='first-div'>

            <h1 className='headings'> Learn to code by <br />watching others </h1>

            <p className='para-graph'> See how experienced developers solve problems in real-time. <br/>Watching scripted tutorials is great, but understanding how <br /> developers think is invaluable. </p>
        </div>

        <div className='second-div'>
            
            <div className='seven-days-trial'><span><b>Try it free 7 days</b></span> then $20/mo. thereafter </div>

            <div className='form-div'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>

                    {successMsg && <p className='success-msg'>{successMsg}</p>}

                    <input id='input-field' className='first-name' type='text' name='first_name' placeholder='Jonathan |'
                    {...register ('first_name', {required: 'First Name cannot be empty', minLength: {
                        value: /^[a-zA-Z]+$/,
                        message: ''}
                    })}


                    />
                    {errors.first_name && (
                        <p className='error-msg'>{errors.first_name.message}</p>
                    )}


                    <input id='input-field' className='last-name' type='text' name='last_name' placeholder='Last Name'
                    {...register ('last_name', {required: 'Last Name cannot be empty', minLength: {
                        value: /^[a-zA-Z]+$/,
                        message: ''}
                    })}


                    />
                    {errors.last_name && (
                        <p className='error-msg'>{errors.last_name.message}</p>
                    )}


                    
                    <input id='input-field' className='email-address' type='text' name='email' placeholder='Email Address'
                    {...register('email', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                    {errors.email && errors.email.type === 'required' && (<p className='error-msg'>Looks like this is not an email</p>
                    )}

                    
                    <input id='input-field' className='enter-password' type='password' name='password' placeholder='Password' {...register ('password', {
                        required: true, validate: {
                            checkLength: (value) => value.length >= 6,
                            matchPattern: (value) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                            value
                            )
                        }
                    })}
                    />
                    {errors.password?.type === 'required' && (
                        <p className='error-msg'>Password is required.</p>
                    )} 
                    {errors.password?.type === 'checkLength' && (
                        <p className='error-msg'>
                            Password should be at-least 6 characters.
                        </p>
                    )}
                    {
                        errors.password?.type === 'matchPattern' && (
                            <p className='error-msg'>
                                password should be at least one uppercase letter, lowercase letter, digit, and special symbol.
                            </p>
                        )
                    }


                    <button id='input-field' className='claims'>CLAIM YOUR FREE TRIAL</button>

                </form>

                <p id='input-field' className='terms-n-condition'>  By clicking the button, you are agreeing to our <span>Terms and Services </span></p>
            </div>

            
        </div>


        <footer className='footer-div'>
            <p>Challenge by <a href='#'>Frontend Mentor.</a> Coded by  <a href='#'> Ikeoluwa Ashade. </a>
            </p>
        </footer>

        
    </div>
  )
}

export default IntroComponent