import React from 'react'
import styled from 'styled-components'
import Growtogether from "../../assets/illustration-grow-together.svg"

const GrowTogether = () => {
  return (
    <Container>
        <Wrapper>
           <GrowTogetherText>
                <h3>Grow Together</h3>

                <p>
                    Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.
                </p>
            </GrowTogetherText>

            <ImgDiv>
                <img src={Growtogether} alt="" />
            </ImgDiv>
            
        </Wrapper>
    
    </Container>
  )
}

export default GrowTogether

const Container = styled.div`
    /* background-color: purple; */
    width: 100%;
    margin-bottom: 150px;

    display: flex;
    justify-content: center;
    /* align-items: center; */
`

const Wrapper = styled.div`
    /* background-color: red; */
    width: 75%;

    display: flex;
    justify-content: space-between;

    @media (max-width: 500px) {
        flex-direction: column-reverse;
        width: 95%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const GrowTogetherText = styled.div`
    /* background-color: green; */
    display: flex;
    justify-content: center;
    flex-direction: column;

    

    h3 {
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
        /* background-color: green; */
        color: hsl(208, 11%, 55%);
        width: 500px;
        padding-right: 20px;
        font-size: 18px;
        padding-right: 20px;

        @media (max-width: 500px) {
            background-color: green;
            width: 95%;
            margin-bottom: 90px;

            display: flex;
            justify-content: center;
            align-items: center;
            /* text-align: center; */

        }
    }

    @media (max-width: 500px) {
        /* width: 95%; */
        text-align: center;
    }
`

const ImgDiv = styled.div`

   img {
     width: 500px;

     @media (max-width: 500px) {
        width: 290px;

     }
   }
`