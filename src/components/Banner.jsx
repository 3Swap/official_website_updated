import React from 'react';
import styled from 'styled-components';
import Coin from '../assets/coin.png'
import Back from '../assets/bg.png'

const Container = styled.div`
margin:0;
padding: 30px 0;
/* background-color: yellow; */
background-image: url(${Back});
background-position: top 30% right ;
background-repeat: no-repeat;
background-blend-mode: lighten;
display: flex;
align-items:center;
justify-content: space-between;

@media screen and (max-width: 800px){
    background-position: top 30% right 30%;
/* flex-direction: column; */
}
@media screen and (max-width: 700px){
    background-position: top 30% right 50%;
flex-direction: column;

}
`
const Div1 = styled.div` 
padding: 70px 72px;

@media screen and (max-width: 900px){
    padding: 20px;
}

`
const BigT = styled.div` 
font-family: Poppins;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: 80px;
letter-spacing: 0em;
text-align: left;

br{

    @media screen and (max-width: 600px){
    display:none;
}
}
@media screen and (max-width: 1300px){
    font-size: 45px;

}
@media screen and (max-width: 800px){
    color: #FFFFF;
}

@media screen and (max-width: 900px){
    font-size: 35px;
    line-height: 50px;
    color: #000000;
    /* text-align: center; */


}

`
const SmallT = styled.div` 
margin-top:20px;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 37px;
letter-spacing: 0.065em;
text-align: left;

br{

@media screen and (max-width: 600px){
display:none;
}
}


@media screen and (max-width: 900px){
    font-size: 15px;
    line-height: 25px;
    margin-top:10px;

}

`
const Div2 = styled.div` 
    margin-right: 50px;



@media screen and (max-width: 900px){
/* display:none; */
}

@media screen and (max-width: 770px){

margin: 0;/* height: 400px; */
}
}
`
const CoinImg = styled.img`

@media screen and (max-width: 1200px){
    width: 300px;

}

@media screen and (max-width: 1024px){
width: 400px
}

@media screen and (max-width: 800px){
width: 270px
}
}

`

const Btn = styled.button` 
margin-top: 20px;
background: #4500A0;
padding: 16px  20px;
border-radius: 33px;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */
color: #FFFFFF;
outline: none;
border: none;
cursor:pointer;

@media screen and (max-width:900px){
    padding: 10px  15px;
    font-size: 15px;

}
`

function Banner() {
  return (
    <Container>
        <Div1>
            <BigT>
            One-Click, More <br/>  Swaps, Less Fees.
            </BigT>
            <SmallT>
            Decentralized exchange with <br/>    extra powers. Swap two tokens <br/>for one. 
            </SmallT>
            <Btn>Presale Information</Btn>

        </Div1>
        <Div2>
    <CoinImg src={Coin}/>
        </Div2>

    
    </Container>
  );
}

export default Banner;
