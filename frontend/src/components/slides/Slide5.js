import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Button2, Button4, Button5 } from '../common/Buttons';

const Wrapper = styled.div`
    width: ${props => props.width+'px'};
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

const Slide5 = ({ width, pageUp, pageDown, enableTransition, setMultiple}) => {
    const [lastIndex, setLastIndex] = useState(0);
    const contents = [
        {
            'left' : '~20P',
            'right' : '기본 금액 x1',
            multiple : 1
        },
        {
            'left' : '21p~30p',
            'right' : '기본 금액 x2',
            multiple : 2,
        }
    ]

    useEffect(() => {
        setMultiple(1);
    }, [])

    return (
        <Wrapper width={width}>
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
                {contents.map((content,index) => (
                    <Button5 key={index} onClick={() => {
                        if(index !== lastIndex) {
                            setMultiple(contents[index]['multiple']);
                            setLastIndex(index);
                        }
                    }} style={index === lastIndex ? {border : '1px solid #226bef'} : {}}>
                        <span className="left">{content['left']}</span>
                        <span className="right">{content['right']}</span>
                    </Button5>
                ))}
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

export default Slide5;