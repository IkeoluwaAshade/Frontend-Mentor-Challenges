import React from 'react'
import styled from 'styled-components'
import Card from '../Card/Card'
import ColtonSmith from '../../assets/image-colton.jpg'
import Irene from '../../assets/image-irene.jpg'
import Anne from '../../assets/image-anne.jpg'
import StarRating from '../StarRating/StarRating'
import Footer from '../Footer/Footer'


const MainApp = () => {
  return (
    <Container>
        <Wrapper>
            <HeroHold>
                <ABC>
                    <Header>
                        <h1>
                            10,000+ of our users love our products.
                        </h1>
                    </Header>

                    <ParagraphText>
                        <p>
                            "We only provide great products combined with excellent customer services. See what our satisfied customers are saying about our services."
                        </p>
                     </ParagraphText>
                </ABC>

                    <XYZ>
                        <Firststar><StarRating Rating="Rated 5 Stars in Reviews" /></Firststar>

                        <Secondstar><StarRating Rating="Rated 5 Stars in Report Guru" /></Secondstar>

                        <Thirdstar><StarRating Rating="Rated 5 Stars in BestTech" /></Thirdstar>
                    </XYZ>

            </HeroHold>

            

            <CardHold>
            
                <FirstCard>
                    <Card Image={ColtonSmith} 
                
                    Name="Colton Smith"

                    Review="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"/>
                </FirstCard>

                <SecondCard>
                    <Card Image={Irene} 
                
                    Name="Irene Roberts"

                    Review="Customer service is always excellent and vry quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."/>
                </SecondCard>

                <ThirdCard>
                    <Card Image={Anne} 
                
                    Name="Anne Wallace"

                    Review="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everone!"/>
                </ThirdCard>
                
            </CardHold>

            {/* <FooterSection>
                <Footer />
            </FooterSection> */}
        </Wrapper>
        <FooterSection>
                <Footer />
            </FooterSection>
    </Container>
  )
}

export default MainApp

const Container = styled.div`
/* background-color: green; */
width: 100%;

display: flex;
justify-content: center;
align-items: center;
/* flex-direction: column; */
`

const Wrapper = styled.div`
/* background-color: aqua; */
width: 85%;


/* margin-left: 80px; */
`

const Header = styled.div`
/* background-color: red; */
color: hsl(300, 43%, 22%);
margin-top: 25px;
width: 450px;
height: 270px;

display: flex;
align-items: center;

h1 {
    font-family: "League Spartan";
    font-size: 70px;
    font-weight: 700;
    line-height: 1.0;
}
`

const ParagraphText = styled.div`
/* background-color: red; */
color: hsl(303, 10%, 53%);
font-family: "League Spartan";
font-size: 15px;

width: 405px;
height: 100px;

display: flex;

p {
    font-weight: 500;
}
`

const HeroHold = styled.div`
/* background-color: green; */
/* width: 25px; */

display: flex;
justify-content: space-between;
`

const ABC = styled.div``

const XYZ = styled.div`
/* background-color: orange; */
margin-top: 85px;
/* margin-right: 50px; */

width: 400px;
height: 250px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`

const Firststar = styled.div`
margin-right: 200px;
`

const Secondstar = styled.div`
margin-right: 100px;
`

const Thirdstar = styled.div``

const CardHold = styled.div`
margin-top: 72px;
/* background-color: red; */
/* width: 100%;
height: 400px; */

display: flex;
justify-content: space-between;
`

const FirstCard = styled.div`
margin-right: 16px;
`

const SecondCard = styled.div`
margin-right: 16px;
margin-top: 21px;
`

const ThirdCard = styled.div`
margin-top: 42px;
`

const FooterSection = styled.div`
bottom: 0;
position: fixed;
width: 100%;

`