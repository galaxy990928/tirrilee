import React from 'react';
import styled from 'styled-components';
import {Button1} from '../common/Buttons';

const Wrapper = styled.div`
    width: ${props => props.width+'px'};
    box-sizing: border-box;
`

const ContentWrapper = styled.div`
    padding-top: 70px;
    padding-bottom: 30px;
    display: flex;
    flex-wrap : wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const SubContentWrapper = styled.div`
    font-size: 13px;
    padding-bottom: 60px;
    display: flex;
    flex-wrap : wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    
`

const MainContent = styled.div`
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 1rem;
    .blue {
        color : #226bef;
    }
`

const Slide8 = ({width, price, title, reset, multiple}) => {
    return (
        <Wrapper width={width}>
            <ContentWrapper>
                <MainContent>
                    <div>수고하셨습니다.</div>
                    <div className="blue">선택 프로젝트 : {title}</div>
                    <div className="blue">견적 가격 : 대략 {price/10000 * multiple}만원</div>
                    <div>입니다.</div>
                </MainContent>
            </ContentWrapper>
            <SubContentWrapper>
                <div>
                    <div>하지만 정확한 견적은 아니에요 :)</div>
                    <div>티릴리와 함께 같이 진단해보고 멋진 서비스를 만들어보아요,</div>
                </div>
            </SubContentWrapper >
            <Button1 onClick={reset}>
                다시 하기
            </Button1>
        </Wrapper>
    )
}
export default Slide8;