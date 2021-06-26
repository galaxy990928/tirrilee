import React from 'react';
import styled from 'styled-components';
import {BiSquare, BiChevronDownSquare} from 'react-icons/bi';
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

const Slide6 = ({page, setPage}) => {
    return (
        <Wrapper>
            <Button2>
                <div>
                    <div className="title">
                        <div>3단계, 기본 기능 외에 꼭 검증하고</div>
                        <div>싶은 특별한 기능을 알려주세요.</div>
                    </div>
                </div>
            </Button2>
            <Background>
                <TransparentButton>
                    <div>
                        <div className="title">04. 필요한 추가 기능을 선택해보세요!</div>
                        <div className="sub">
                            <div>추가 기능을 통해 진행하시는 서비스가</div>
                            <div>좀 더 다채로워 질 수 있어요!</div>
                            <div>어떤 추가 기능이 필요한 지 고민해보시고 선택해주세요!</div>
                            <div style={{color : "#226bef", fontWeight:"bold"}}>(중복 선택 가능합니다.)</div>
                        </div>
                    </div>
                </TransparentButton>
                <Button5>
                    <span className="left">GPS (내 주변)</span>
                    <span className="right">200만원 <BiSquare/> <BiChevronDownSquare /></span>
                </Button5>
                <Button5>
                    <span className="left">지도 (맵 커스텀)</span>
                    <span className="right">200만원 <BiSquare/> <BiChevronDownSquare /></span>
                </Button5>
                <Button5>
                    <span className="left">카카오톡 푸쉬</span>
                    <span className="right">200만원 <BiSquare/> <BiChevronDownSquare /></span>
                </Button5>
                <Button5>
                    <span className="left">커뮤니티</span>
                    <span className="right">200만원 <BiSquare/> <BiChevronDownSquare /></span>
                </Button5>
                <Button5>
                    <span className="left">공유하기</span>
                    <span className="right">100만원 <BiSquare/> <BiChevronDownSquare /></span>
                </Button5>
                <Button5>
                    <span className="left">유저타입확장</span>
                    <span className="right">200만원 <BiSquare/> <BiChevronDownSquare /></span>
                </Button5>
                <Button5>
                    <span className="left">채팅(실시간)</span>
                    <span className="right">200만원 <BiSquare/> <BiChevronDownSquare /></span>
                </Button5>
                <Button5>
                    <span className="left">필요없어요.</span>
                    <span className="right">0원<BiSquare/> <BiChevronDownSquare /></span>
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

export default Slide6;