import React from 'react';
import styled from 'styled-components';
import {Button1} from '../common/Buttons';

const Wrapper = styled.div`
    width: ${props => props.width+'px'};
    box-sizing: border-box;
`

const MainBannerWrapper = styled.div`
    width: 100%;
    height: 380px;
    background-color: #f9f9f9;
    display : flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
`

const ButtonWrapper = styled.div`
    
`

const Slide1 = ({width, pageUp, enableTransition}) => {
    return (
        <Wrapper width={width}>
            <MainBannerWrapper>
                <Title>
                    Tirrilee Estimate <br />
                    &nbsp;Program ( Beta-Service )
                </Title>
                <img src={process.env.PUBLIC_URL+"/images/Service_illust.png"} alt="banner"/>
            </MainBannerWrapper>
            <ButtonWrapper onClick={enableTransition}>
                <Button1 onClick={pageUp}>
                    <span>시작하기</span>
                </Button1>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Slide1;