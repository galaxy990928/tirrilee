import React from 'react';
import {  useSelector } from 'react-redux';
import Slide4 from "../../components/slides/Slide4";

const SlideContainer4 = ({pageUp, pageDown, enableTransition, changePrice}) => {
    const {width} = useSelector(({slide}) => ({
        width : slide.width,
    }))

    return (
        <div>
            <Slide4 width={width} 
                pageUp={pageUp} pageDown={pageDown} 
                enableTransition={enableTransition} changePrice={changePrice}
            />
        </div>
    )
}

export default SlideContainer4;