import React from 'react';
import {  useSelector } from "react-redux";
import Slide1 from '../../components/slides/Slide1';

const SlideContainer1 = ({pageUp, enableTransition}) => {
    const {width} = useSelector(({slide}) => ({
        width : slide.width,
    }))

    return (
        <div>
            <Slide1 width={width} pageUp={pageUp} 
                 enableTransition={enableTransition}
            />
        </div>
    )
}

export default SlideContainer1;