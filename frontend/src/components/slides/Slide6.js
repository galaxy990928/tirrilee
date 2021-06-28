import React, {useState} from 'react';
import styled from 'styled-components';
import {BiSquare, BiChevronDownSquare} from 'react-icons/bi';
import { Button2, Button4, Button5 } from '../common/Buttons';
import produce from 'immer';

const Wrapper = styled.div`
    width: ${props => props.width+'px'};
    box-sizing: border-box;
    svg {
        position: relative;
        top: 8px;
        font-size: 30px;
    }
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

const Slide6 = ({width, pageUp, pageDown, enableTransition, changePrice}) => {

    const [contents, setContents] = useState([
        {
            'id' : 1,
            'left' : 'GPS (내 주변)',
            'right' : '200만원',
            'price' : 2000000,
            'check' : false,
        },
        {
            'id' : 2,
            'left' : '지도 (맵 커스텀)',
            'right' : '200만원',
            'price' : 2000000,
            'check' : false,
        },
        {
            'id' : 3,
            'left' : '카카오톡 푸쉬',
            'right' : '200만원',
            'price' : 2000000,
            'check' : false,
        },
        {
            'id' : 4,
            'left' : '커뮤니티',
            'right' : '200만원',
            'price' : 2000000,
            'check' : false,
        },
        {
            'id' : 5,
            'left' : '공유하기',
            'right' : '100만원',
            'price' : 1000000,
            'check' : false,
        },
        {
            'id' : 6,
            'left' : '유저타입확장',
            'right' : '200만원',
            'price' : 2000000,
            'check' : false,
        },
        {
            'id' : 7,
            'left' : '채팅(실시간)',
            'right': '200만원',
            'price' : 2000000,
            'check' : false,
        },
    ]);

    return (
        <Wrapper width={width}>
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
                {
                    contents.map((content,index) => (
                        <Button5 key={index} onClick={() => {
                            if(!contents[index]['check']) {
                                changePrice(contents[index]['price']);
                            } else {
                                changePrice(-contents[index]['price']);
                            }
                            setContents(produce(contents, draftState => {
                                draftState[index]['check'] = !draftState[index]['check'];
                            }))
                        }}>
                            <span className="left">{content['left']}</span>
                            <span className='right'>
                                {content['right']}
                                {content['check'] ? <BiChevronDownSquare /> : <BiSquare />} 
                            </span>
                        </Button5>
                    ))
                }
            </Background>
            <MoveButtonWrapper onClick={enableTransition}>
                <Button4 onClick={pageDown}>
                    이전 단계
                </Button4>
                <Button4 onClick={pageUp}>
                    다음 단계
                </Button4>
            </MoveButtonWrapper>
        </Wrapper>
    )
}

export default Slide6;