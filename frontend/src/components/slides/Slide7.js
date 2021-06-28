import React, {useState} from 'react';
import styled from 'styled-components';
import {BiSquare, BiChevronDownSquare} from 'react-icons/bi';
import { Button2, Button4, Button6 } from '../common/Buttons';

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
const ButtonWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
`

const CheckBoxWrapper = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
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

const Slide7 = ({width, pageUp, pageDown, enableTransition, changePrice}) => {
        const [lastIndex, setLastIndex] = useState(3);
        const contents = [
        {
            'title' : '서비스 내에서 관리',
            'sub' : '관리자 권한 부여',
            'priceName' : '100만원',
            'price' : 1000000,
        },
        {
            'title' : '기본 Admin',
            'sub' : '관리자 페이지 운영',
            'priceName' : '150만원',
            'price' : 1500000,
        },
        {
            'title' : '확장 Admin',
            'sub' : '관리자 페이지 + 대쉬보드',
            'priceName' : '200만원',
            'price' : 2000000,
        },
        {
            'title' : '필요없어요.',
            'sub' : '해당 기능이 필요없어요',
            'priceName' : '0원',
            'price' : 0,
        }
    ];

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
                        <div className="title">05. 관리자 페이지를 선택해주세요!</div>
                        <div className="sub">
                            <div>관리자 페이지는 앱을 관리하기 위해</div>
                            <div>유용하게 사용되는 페이지에요! 직접 DB를 관리하거나 관리가</div>
                            <div>필요없는게 아니라면 꼭 선택해야 하는 기능이에요!</div>
                        </div>
                    </div>
                </TransparentButton>
                <ButtonWrapper>
                    {contents.map((content, index) => (
                        <Button6 key={index} onClick={() => {
                            if(index !== lastIndex) {
                                changePrice(-contents[lastIndex]['price'] + contents[index]['price']);
                                setLastIndex(index);
                            }
                        }}>
                            <CheckBoxWrapper>
                                {index === lastIndex ? <BiChevronDownSquare /> : <BiSquare/>}
                            </CheckBoxWrapper>
                            <div>
                                <div className="title">{content['title']}</div> 
                                <div className="sub">{content['sub']}</div>
                                <div className="price">{content['priceName']}</div>
                            </div>
                        </Button6>
                    ))}
                </ButtonWrapper>
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

export default Slide7;