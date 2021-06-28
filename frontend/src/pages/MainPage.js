import React, {useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import Header from "../components/common/Header";
import SlideContainer1 from "../containers/slides/SlideContainer1";
import SlideContainer2 from "../containers/slides/SlideContainer2";
import SlideContainer3 from "../containers/slides/SlideContainer3";
import SlideContainer4 from "../containers/slides/SlideContainer4";
import SlideContainer5 from "../containers/slides/SlideContainer5";
import SlideContainer6 from "../containers/slides/SlideContainer6";
import SlideContainer7 from "../containers/slides/SlideContainer7";
import SlideContainer8 from "../containers/slides/SlideContainer8";
import {useSetWindowWidth} from '../lib/common';
import {setTitle, changePage, changeIsResize, changePrice, setMultiple} from '../modules/slide'

const SlideWrapper = styled.div`
    width: 800%;    
    position: relative;
    display: flex;
    transition: ${props => props.isResize ? 'none' : 'left 1s'};
    left : ${props => -(props.page * props.width)+'px'}; 
`

const MainPage = () => {
    const dispatch = useDispatch();
    const {page, width, isResize} = useSelector(({slide}) => ({
        page : slide.page,
        title : slide.title,
        width : slide.width,
        isResize : slide.isResize
    }))

    useSetWindowWidth();
    const useSetTitle = useCallback((title) => {
        dispatch(setTitle(title));
    }, [dispatch])

    const usePageUp = useCallback(() => {
        dispatch(changePage(page+1))
    }, [page, dispatch]);

    const usePageDown = useCallback(() => {
        dispatch(changePage(page-1));
    }, [page, dispatch]);

    const useReset = useCallback(() => {
        dispatch(changePage(0));
    }, [dispatch])

    const useEnableTransition = useCallback(() => {
        dispatch(changeIsResize(false));
    }, [dispatch])

    const useChangePrice = useCallback((price) => {
        dispatch(changePrice(price))
    }, [dispatch])

    const useSetMultiple = useCallback((multiple) => {
        dispatch(setMultiple(multiple));
    }, [dispatch])

    return (
        <div>
            <Header />
            <SlideWrapper isResize={isResize} page={page} width={width}>
                <SlideContainer1 pageUp={usePageUp} enableTransition={useEnableTransition} />
                <SlideContainer2 pageUp={usePageUp} pageDown={usePageDown} enableTransition={useEnableTransition} changePrice={useChangePrice} setTitle={useSetTitle} />
                <SlideContainer3 pageUp={usePageUp} pageDown={usePageDown} enableTransition={useEnableTransition} changePrice={useChangePrice}/>
                <SlideContainer4 pageUp={usePageUp} pageDown={usePageDown} enableTransition={useEnableTransition} changePrice={useChangePrice}/>
                <SlideContainer5 pageUp={usePageUp} pageDown={usePageDown} enableTransition={useEnableTransition} setMultiple={useSetMultiple}/>
                <SlideContainer6 pageUp={usePageUp} pageDown={usePageDown} enableTransition={useEnableTransition} changePrice={useChangePrice}/>
                <SlideContainer7 pageUp={usePageUp} pageDown={usePageDown} enableTransition={useEnableTransition} changePrice={useChangePrice}/>
                <SlideContainer8 reset={useReset} changePrice={useChangePrice} />
            </SlideWrapper>
        </div>
    )
}

export default MainPage;