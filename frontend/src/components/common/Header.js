import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 18px 0;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.05);
    background-color: #ffffff;
`
const Logo = styled.img`
    width: 88px;
    height: 24px;
    padding-left: 12px;
    object-fit: contain;
`
const Menubar = styled.img`
    width: 24px;
    height: 24px;
    padding-right: 12px;
    object-fit: contain;
`

const Header = () => {
    return (
        <Wrapper>
            <Logo src={process.env.PUBLIC_URL + '/images/header_logo.png'} />
            <Menubar src={process.env.PUBLIC_URL + '/images/menubar.png'} />
        </Wrapper>
    )
}

export default Header;