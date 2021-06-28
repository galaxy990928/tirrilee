import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Button2, Button3, Button4 } from '../common/Buttons';

const Wrapper = styled.div`
    width: ${props => props.width+'px'};
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

const Slide3 = ({ width, pageUp, pageDown, enableTransition, changePrice}) => {
    const [lastIndex, setLastIndex] = useState(0);
    const contents = [
        {
            'title' : '상세기획이 있어요.',
            'sub' : '좋아요! 개발을 위한 기획을 함께 진행해요',
            'priceName' : '+50만원',
            price : 500000,
        },
        {
            id : 2,
            'title' : '앗.. 아직 상세 기획이 없어요.',
            'sub' : '괜찮아요:) 티릴리와 함께 서비스를 기획해봐요.',
            'priceName' : '+100만원',
            price : 1000000,
        }
    ];

    useEffect(() => {
        changePrice(contents[lastIndex]['price']);
    }, [])

    return (
        <Wrapper width={width}>
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
                        <div className="title">01. 상세기획이 되어 있나요?</div>
                        <div className="sub">
                            <div>아직 상세 기획 없이 단순 아이디어만 있어도 걱정하지 마세요.</div>
                            <div>티릴리와 함께 더 멋진 기획을 만들 수 있습니다.</div>
                        </div>
                    </div>
                </TransparentButton>
                {
                    contents.map((content, index) => (
                        <Button3 key={index} onClick={() => {
                            if(index !== lastIndex) {
                                changePrice(-contents[lastIndex]['price'] + contents[index]['price']);
                                setLastIndex(index);
                            }
                        }} style={index === lastIndex ? {border : '1px solid #226bef'} : {}}>
                            <div>
                                <div className="title">{content['title']}</div> 
                                <div className="sub">{content['sub']}</div>
                                <div className="price">{content['priceName']}</div>
                            </div>
                        </Button3>
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

export default Slide3;