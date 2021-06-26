import React from 'react';
import styled from 'styled-components';
import {Button1} from '../common/Buttons';

const Wrapper = styled.div`
    width: ${document.documentElement.clientWidth+'px'};
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

const Slide1 = ({page, setPage}) => {
    return (
        <Wrapper>
            <MainBannerWrapper>
                <Title>
                    Tirrilee Estimate <br />
                    &nbsp;Program ( Beta-Service )
                </Title>
                <img src={process.env.PUBLIC_URL+"/images/Service_illust.png"} alt="banner"/>
            </MainBannerWrapper>
            <Button1 onClick={() => setPage(page+1)}>
                <span>시작하기</span>
            </Button1>
        </Wrapper>
    )
}

export default Slide1;