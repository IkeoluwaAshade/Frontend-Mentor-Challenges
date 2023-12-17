import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo.svg'
import BgDesktop from '../../assets/bg-hero-desktop.svg'

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <LogoDiv>
                <img src={Logo} alt="The Huddle Logo" />
            </LogoDiv>

            <Tryitfree>
                Try it free
            </Tryitfree>
        </Wrapper>

    </Container>
  )
}

export default Header

const Container = styled.div`
    background-image: url(${BgDesktop});
    width: 100%;
    height: 100px;


    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    /* background-color: #123456; */
    width: 75%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        width: 95%;
    }
`

const LogoDiv = styled.div`
    
    img {
        width: 170px;

        @media (max-width: 500px) {
            width: 120px;
        }
    }
`

const Tryitfree = styled.button`
    padding: 7px 27px;
    border-radius: 30px;
    cursor: pointer;

    @media (max-width: 500px) {
        padding: 4px 21px;
    }
`

