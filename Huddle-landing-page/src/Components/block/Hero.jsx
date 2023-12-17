import React from 'react'
import styled from 'styled-components'
import BgDesktop from '../../assets/bg-hero-desktop.svg'
import BgMobile from "../../assets/bg-hero-mobile.svg"
import Mockup from '../../assets/illustration-mockups.svg'

const Hero = () => {
  return (
    <Container>
        <Wrapper>

            <HeroText>
                <h3>
                    Build The Community <br /> Your Fans Will Love
                </h3>

                <p>
                    Huddle re-imagines the way we build communities. You have <br /> a voice, but so does your audience. Create connections with <br /> your users as you engage in genuine discussion.
                </p>

                <GetStarted>
                    Get Started For Free
                </GetStarted>

            </HeroText>

            <ImgDiv>
                <img src={Mockup} alt="" />
            </ImgDiv>

        </Wrapper>
    </Container>
  )
}

export default Hero

const Container = styled.div`
    background-image: url(${BgDesktop});
    width: 100%;

    display: flex;
    justify-content: center;

    @media (max-width: 500px) {
        background-image: url(${BgMobile});
    }
`

const Wrapper = styled.div`
    /* background-color: purple; */
    width: 75%;

    display: flex;
    justify-content: space-between;

    @media (max-width: 500px) {
        /* background-color: orange; */
        flex-direction: column;
        width: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const HeroText = styled.div`
    /* background-color: green; */
    /* font-family: "Open Sans"; */

    h3 {
        /* background-color: red; */
        color: hsl(192, 100%, 9%);
        width: 300px;
        font-size: 21px;
        
        @media (max-width: 500px) {
            /* background-color: orange; */
            width: 95%;
            display: flex;
            justify-content: center;
            align-items: center; 
        }
    }

    p {
        color: hsl(208, 11%, 55%);
        padding-right: 20px;
        font-size: 18px;

        @media (max-width: 500px) {
            /* background-color: orange; */
            margin-bottom: 2.5rem;
            
        }
    }

    @media (max-width: 500px) {
        text-align: center;
        margin-bottom: 3rem;
    }
`

const ImgDiv = styled.div`

    img {
        width: 500px;

        @media (max-width: 500px) {
            width: 290px;
            margin-bottom: 8rem;
        }
    }
`

const GetStarted = styled.button`
    background-color: hsl(322, 100%, 66%);
    color: hsl(193, 100%, 96%);
    padding: 12px 27px;
    border-radius: 30px;
`