import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo.svg'
import LocationIcon from '../../assets/icon-location.svg'
import PhoneCallIcon from '../../assets/icon-phone.svg'
import EmailIcon from '../../assets/icon-email.svg'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/Twitter.png'
import Instagram from '../../assets/Ig.png'

const Footer = () => {
  return (
    <Container>
        <Wrapper>

            <Contact>
                <LogoDiv>
                    <img src={Logo} alt="" />
                </LogoDiv>

                <Address>
                    <img src={LocationIcon} alt="" />

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
                    </p>
                </Address>

                <PhoneNo>
                    <img src={PhoneCallIcon} alt="" />

                    <p>
                        +1-543-123-4567
                    </p>
                </PhoneNo>

                <Email>
                    <img src={EmailIcon} alt="" />

                    <p>example@huddle.com</p>
                </Email>

            </Contact>

            <MKL>
                <a href="#">About Us</a>

                <a href="#">What we Do</a>

                <a href="#">FAQ</a>
            </MKL>

            <XYZ>
                <a href="#">Career</a>

                <a href="#">Blog</a>

                <a href="#">Contact Us</a>
            </XYZ>

            <Socials>

                <SocialIcons>
                    <img src={Facebook} alt="Facebook Icon" />
                    <img src={Twitter} alt="Twitter Icon" />
                    <img src={Instagram} alt="Instagram Icon" />
                </SocialIcons>

                <p>
                    © Copyright 2018 Huddle. All rights reserved.
                </p>
            </Socials>
            
        </Wrapper>

        
    </Container>
  )
}

export default Footer

const Container = styled.div`
    background-color: hsl(192, 100%, 9%);
    color: #fff;
    width: 100%;
    height: 1500px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    bottom: 0;
    /* position: fixed; */

    @media (max-width: 500px) {

    }

`

const Wrapper = styled.div`
    /* background-color: brown; */
    /* color: #fff; */
    font-family:  "Open Sans";
    font-size: 18px;
    font-weight: 600;
    width: 85%;
    height: 75px;

    display: flex;
    justify-content: space-between;
    /* align-items: center;
    flex-direction: column; */

    @media (max-width: 500px) {
        /* background-color: blanchedalmond; */
        font-size: 15px;
        width: 95%;
        
        display: flex;
        justify-content: start;
        align-items: flex-start;
        flex-direction: column;
    }
`

const Contact = styled.div`
    /* background-color: aqua; */
    width: 25%;
    height: 280px;

    @media (max-width: 500px) {
        /* background-color: chocolate; */
        width: 95%;
        
    }
`

const LogoDiv = styled.div`   
    color: #fff;  

    img {
        width: 150px;
    }
`

const Address = styled.div`
    /* background-color: brown; */
    /* width: 500px; */

    display: flex;
    /* justify-content: space-between; */
    align-items: center;

    img {
        width: 25px;
        height: 25px;
    }

    p {
        font-size: 16px;
        padding-left: 16px;
    }
`

const PhoneNo = styled.div`
    /* background-color: red; */
    
    display: flex;
    /* justify-content: space-between; */
    align-items: center;

    img {
        padding-right: 16px;
    }
`

const Email = styled.div`
    /* background-color: yellow; */

    display: flex;
    align-items: center;

    img {
        padding-right: 16px;
    }
`

const MKL = styled.div`
    /* background-color: blueviolet; */
    height: 250px;
    width: 150px;
    line-height: 2.5rem;

    display: flex;
    flex-direction: column;

    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

const XYZ = styled.div`
    /* background-color: pink; */
    height: 250px;
    width: 150px;
    line-height: 2.5rem;

    display: flex;
    flex-direction: column;

    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`

const Socials = styled.div`
    /* background-color: gray; */

    p {
        padding-top: 200px;
    }
    
    height: 250px;
    /* line-height: 400px; */

    @media (max-width: 500px) {
        /* background-color: skyblue; */
        width: 95%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
            padding-top: 10px;
            text-align: center;
            font-size: 12px;
        }
    }
`

const SocialIcons = styled.div`
    /* background-color: maroon; */
    width: 70px;

    display: flex;
    justify-content: space-between;

    &:hover {
        cursor: pointer;
    }
`