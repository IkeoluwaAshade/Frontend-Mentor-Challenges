import React from 'react'
import styled from 'styled-components'
import UserImg from '../../assets/illustration-your-users.svg'

const User = () => {
  return (
    <Container>
        <Wrapper>
            <UserText>

                <h3>Your User</h3>

                <p>
                    sIt takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.
                </p>

            </UserText>

            <ImgDiv>
                <img src={UserImg} alt="" />
            </ImgDiv>
        </Wrapper>
    </Container>
  )
}

export default User

const Container = styled.div`
    margin-bottom: 120px;
`

const Wrapper = styled.div``

const UserText = styled.div``

const ImgDiv = styled.div`
    width: 500px;

    @media (max-width: 500px) {
        width: 290px;

    }
`


