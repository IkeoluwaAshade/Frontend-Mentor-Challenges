import React from 'react'
import styled from 'styled-components'
import Star from '../../assets/icon-star.svg'

const StarRating = ({Rating}) => {
  return (
    <Container>
        <Wrapper>
            <StarIcon>
                <img src={Star} alt="Star Icon" width="20px" height="15px" />
                <img src={Star} alt="Star Icon" width="20px" height="15px" />
                <img src={Star} alt="Star Icon" width="20px" height="15px" />
                <img src={Star} alt="Star Icon" width="20px" height="15px" />
                <img src={Star} alt="Star Icon" width="20px" height="15px" />
            </StarIcon>

            <RatingReview>
                <p>{Rating}</p>
            </RatingReview>
        </Wrapper>
    </Container>
  )
}

export default StarRating

const Container = styled.div``

const Wrapper = styled.div`
background-color: hsl(300, 24%, 96%);
width: 400px;
border-radius: 8px;

display: flex;
justify-content: center;
align-items: center;
`

const StarIcon = styled.div`
/* background-color: green; */
width: 150px;
height: 25px;
display: flex;
justify-content: space-between;
align-items: center;
/* padding-right: 21px; */
`

const RatingReview = styled.div`
color: hsl(300, 43%, 22%);
font-family: "League Spartan";
font-weight: 700;
margin-left: 16px;
`

