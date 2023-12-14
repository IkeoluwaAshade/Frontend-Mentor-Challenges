import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <ProjectDetails>
                <p>Challenge by <a href="www.frontendmentor.io">Frontend Mentor</a> Coded by <a href="#">Ikeoluwa Ashade</a></p>
            </ProjectDetails>

            <Assignment>
                <p>Assignment 04, Master class</p>
            </Assignment>
        </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    background-color: #123456;
    width: 100%;
    height: 90px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    bottom: 0;
    position: fixed;

    @media (max-width: 500px) {

    }

`

const Wrapper = styled.div`
    /* background-color: brown; */
    color: #fff;
    font-family: "Poppins, Open-Sans";
    font-size: 18px;
    font-weight: 600;
    width: 85%;
    height: 75px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 500px) {
        width: 95%;
        font-size: 15px;
    }
`

const ProjectDetails = styled.div`
    /* background-color: aqua; */

    display: flex;
    justify-content: center;

    @media (max-width: 500px) {
        text-align: center;
    }
`

const Assignment = styled.div`
    font-family: "Open sans";
    font-size: 10px;

    display: flex;
    justify-content: center;

    @media (max-width: 500px) {
        font-size: 8px;
        padding-bottom: 5px;
    }
    
`