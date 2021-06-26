import React from 'react';
import styled from 'styled-components';
import { Button2, Button4, Button5 } from '../common/Buttons';

const Wrapper = styled.div`
    width: ${document.documentElement.clientWidth+'px'};
    box-sizing: border-box;
`

const Background = styled.div`
    background-color: #f8fafe;
    padding-top: 10px;
    padding-bottom: 30px;
    margin-bottom: 20px;
`

const TransparentButton = styled(Button2)`
    background-color: rgba(0,0,0,0);
` 
const MoveButtonWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

`

const Slide5 = ({page, setPage}) => {
    return (
        <Wrapper>
            <Button2>
                <div>
                    <div className="title">2단계, 작업 페이지를 선정해봅시다.</div>
                    <div className="sub">
                        이전 단계에서 설명한 기본금액에 페이지 수를 곱합니다.
                    </div>
                </div>
            </Button2>
            <Background>
                <TransparentButton>
                    <div>
                        <div className="title">03. 작업하려는 페이지의 양은 어떻게 되나요</div>
                        <div className="sub">
                            <div>혹시 몇 페이지가 나올지에 대해 감이 안잡히시나요?</div>
                            <div>간단한 정보구조도(I.A)를 설계해보시면</div>
                            <div>선택에 많은 도움이 될꺼에요!</div>
                        </div>
                    </div>
                </TransparentButton>
                <Button5>
                    <span className="left">~20P</span>
                    <span className="right">기본 금액 x1</span>
                </Button5>
                <Button5>
                    <span className="left">21P~30p</span>
                    <span className="right">기본 금액 x2</span>
                </Button5>
            </Background>
            <MoveButtonWrapper>
                <Button4 onClick={() => setPage(page-1)}>
                    이전 단계
                </Button4>
                <Button4 onClick={() => setPage(page+1)}>
                    다음 단계
                </Button4>
            </MoveButtonWrapper>
        </Wrapper>
    )
}

export default Slide5;