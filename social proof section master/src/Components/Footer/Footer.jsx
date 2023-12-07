import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
          <p>Challenge by <a href="https://www.frontendmentor.io/">Frontend Mentor</a> Coded By <span>Ikeoluwa Ashade</span></p>
        </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.div`
background-color: hsl(300, 43%, 22%);
color: hsl(0, 0%, 100%);
margin-top: 32px;

/* @media (max-width: 500px) {
  width: 100%;
} */
`

const Wrapper = styled.div`
font-family: "League Spartan";
font-size: 18px;
font-weight: 700;

bottom: 0;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

a {
  color: gold;
}

span {
  color: gold;
}

/* @media (max-width: 500px) {
  width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
} */
`