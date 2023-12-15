import React from 'react'
import styled from 'styled-components'
import UserImg from '../../assets/illustration-your-users.svg'

const User = () => {
  return (
    <Container>
        <Wrapper>

            <ImgDiv>
                <img src={UserImg} alt="" />
            </ImgDiv>

            <UserText>

                <h3>Your User</h3>

                <p>
                    Sit takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.
                </p>

            </UserText>

        </Wrapper>
    </Container>
  )
}

export default User

const Container = styled.div`
    width: 100%;
    margin-bottom: 500px;

    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 75%;

    display: flex;
    justify-content: space-between;

    @media (max-width: 500px) {
        flex-direction: column;
        width: 95%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const UserText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    h3 {
        color: hsl(192, 100%, 9%);
        width: 300px;
        font-size: 21px;

        @media (max-width: 500px) {
            width: 95%;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    p {
        color: hsl(208, 11%, 55%);
        width: 500px;
        padding-right: 20px;
        font-size: 18px;
        padding-right: 20px;

        @media (max-width: 500px) {
            width: 95%;
            margin-bottom: 90px;

            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
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


