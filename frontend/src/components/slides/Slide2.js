import React from 'react';
import styled from 'styled-components';
import { Button2, Button3, Button4 } from '../common/Buttons';

const Wrapper = styled.div`
    width: ${document.documentElement.clientWidth+'px'};
    box-sizing: border-box;
`

const MoveButtonWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

`

const Slide2 = ({page, setPage}) => {
    return (
        <Wrapper>
            <Button2>
                <div>
                    <div className="title">0단계, 어떤 서비스를 만들고 싶으신가요</div>
                </div>
            </Button2>
            <Button3>
                <div>
                    <div className="title">App 개발</div> 
                    <div className="sub">Android & iOS</div>
                    <div className="price">300만원</div>
                </div>
            </Button3>
            <Button3>
                <div>
                    <div className="title">Web 개발</div> 
                    <div className="sub">반응형 웹</div>
                    <div className="price">400만원</div>
                </div>
            </Button3>
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

export default Slide2;