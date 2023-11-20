import React from 'react'
import styled from 'styled-components'

const Card = ({Image, Name, Review }) => {
  return (
    <Container>
        <Wrapper>

            <HeadPart>
                <ImageDiv>
                    <img src={Image} alt="" />
                </ImageDiv>

                <Details>
                    <h3>{Name}</h3>
                    <p>Verified Buyer</p>
                </Details>
            </HeadPart>

            <ReviewDiv>
                <p>{Review}</p>
            </ReviewDiv>

        </Wrapper>
    </Container>
  )
}

export default Card

const Container = styled.div``

const Wrapper = styled.div`
background-color: hsl(300, 43%, 22%);
font-family: "League Spartan";
font-size: 18px;
width: 500px;
height: 300px;
border-radius: 12px;
`

const HeadPart = styled.div`
/* background-color: red; */
height: 100px;
padding-left: 64px;
padding-top: 48px;

`

const ImageDiv = styled.div`
float: left;
width: 120px;

img {
    border-radius: 50%;
}
`

const Details = styled.div`

h3 {
    color: hsl(0, 0%, 100%);
    margin-top: 3px;
}

p {
    color: hsl(333, 80%, 67%);
    line-height: 1px;

    /* margin-top: 12px; */
}
`

const ReviewDiv = styled.div`
/* background-color: red; */
color: hsl(0, 0%, 100%);
font-weight: 400;
padding: 10px 64px;
`