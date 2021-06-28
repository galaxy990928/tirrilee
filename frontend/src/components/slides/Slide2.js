import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Button2, Button3, Button4 } from '../common/Buttons';

const Wrapper = styled.div`
    width: ${props => props.width+'px'};
    box-sizing: border-box;
`

const MoveButtonWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

`

const Slide2 = ({width, pageUp, pageDown, enableTransition, changePrice, setTitle}) => {
    const [lastIndex, setLastIndex] = useState(0);
    const contents = [
        {
            'title' : 'App 개발',
            'sub' : 'Android & iOS',
            'priceName' : '300만원',
            price : 3000000,
        },
        {
            'title' : 'Web 개발',
            'sub' : '반응형 웹',
            'priceName' : '400만원',
            price : 4000000,
        },
    ];

    useEffect(() => {
        setTitle(contents[lastIndex]['title']);
        changePrice(contents[lastIndex]['price']);
    }, [])

    return (
        <Wrapper width={width}>
            <Button2>
                <div>
                    <div className="title">0단계, 어떤 서비스를 만들고 싶으신가요</div>
                </div>
            </Button2>
            {
                contents.map((content, index) => (
                    <Button3 key={index} onClick={() => {
                        setTitle(contents[index]['title'])
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

export default Slide2;