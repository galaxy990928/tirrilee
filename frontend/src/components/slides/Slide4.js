import React from 'react';
import styled from 'styled-components';
import { Button2, Button3, Button4 } from '../common/Buttons';

const Wrapper = styled.div`
    width: ${document.documentElement.clientWidth+'px'};
    box-sizing: border-box;
`

const Background = styled.div`
    background-color: #f8fafe;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
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

const Slide4 = ({page, setPage}) => {
    return (
        <Wrapper>
            <Button2>
                <div>
                    <div className="title">1단계, 먼저 개발범위를 먼저 생각해보아요.</div>
                    <div className="sub">
                        개발범위로 <span style={{color:"red"}}>기본금액</span>을 정할 수 있어요!
                    </div>
                </div>
            </Button2>
            <Background>
                <TransparentButton>
                    <div>
                        <div className="title">02. 디자인이 되어 있나요?</div>
                        <div className="sub">
                            <div>아직 구체적인 디자인이 진행되어 있지 않아도 돼요.</div>
                            <div>티릴리의 디자이너들과 함꼐 멋진 디자인을 만들어봐요!</div>
                        </div>
                    </div>
                </TransparentButton>
                <Button3>
                <div>
                    <div className="title">네! 디자인이 되어 있어요.</div> 
                    <div className="sub">멋져요! 개발을 할 수 있도록 디자인을 함께 보완해요.</div>
                    <div className="price">+50만원</div>
                </div>
            </Button3>
            <Button3>
                <div>
                    <div className="title">앗.. 디자인은 없어요.</div> 
                    <div className="sub">괜찮아요:) 티릴리와 함께 디자인을 진행해봐요.</div>
                    <div className="price">+100만원</div>
                </div>
            </Button3>
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

export default Slide4;