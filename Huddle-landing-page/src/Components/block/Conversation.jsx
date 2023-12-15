import React from 'react'
import styled from 'styled-components'
import ConversationImg from '../../assets/illustration-flowing-conversation.svg'

const Conversation = () => {
  return (
    <Container>
        <Wrapper>

            <ImgDiv>
                <img src={ConversationImg} alt="" />
            </ImgDiv>

            <ConversationText>
                <h3>Flowing Conversation</h3>
                
                <p>
                    You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow
                </p>
            </ConversationText>
            
        </Wrapper>
    </Container>
  )
}

export default Conversation

const Container = styled.div`
    width: 100%;
    margin-bottom: 200px;

    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    /* background-color: yellow; */
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

const ConversationText = styled.div`
    /* background-color: green; */

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
        /* background-color: green; */
        color: hsl(208, 11%, 55%);
        width: 500px;
        padding-right: 20px;
        font-size: 18px;
        padding-right: 20px;

        @media (max-width: 500px) {
            background-color: green;
            width: 95%;
            /* margin-bottom: 90px; */

            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    }

    

`

const ImgDiv = styled.div`
    /* background-color: red; */

    img {
        width: 500px;
        
        @media (max-width: 500px) {
        /* background-color: red; */
        width:290px;

    }
    }

`