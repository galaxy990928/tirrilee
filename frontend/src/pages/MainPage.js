import React, {useState} from 'react';
import styled from 'styled-components';
import Header from "../components/common/Header";
import Slide1 from "../components/slides/Slide1";
import Slide2 from "../components/slides/Slide2";
import Slide3 from "../components/slides/Slide3";
import Slide4 from "../components/slides/Slide4";
import Slide5 from "../components/slides/Slide5";
import Slide6 from "../components/slides/Slide6";
import Slide7 from "../components/slides/Slide7";
import Slide8 from "../components/slides/Slide8";

const SlideWrapper = styled.div`
    width: 800%;    
    position: relative;
    display: flex;
    transition: left 1s;
    left : ${props => -(props.page * document.documentElement.clientWidth)+'px'};
`

const MainPage = () => {
    const [page, setPage] = useState(0);
    return (
        <div>
            <Header />
            <SlideWrapper page={page}>
                <Slide1 page={page} setPage={setPage}/>
                <Slide2 page={page} setPage={setPage}/>
                <Slide3 page={page} setPage={setPage}/>
                <Slide4 page={page} setPage={setPage}/>
                <Slide5 page={page} setPage={setPage}/>
                <Slide6 page={page} setPage={setPage}/>
                <Slide7 page={page} setPage={setPage}/>
                <Slide8 page={page} setPage={setPage}/>
            </SlideWrapper>
        </div>
    )
}

export default MainPage;