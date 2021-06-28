import React from 'react';
import {  useSelector } from 'react-redux';
import Slide3 from "../../components/slides/Slide3";

const SlideContainer3 = ({pageUp, pageDown, enableTransition, changePrice}) => {
    const {width} = useSelector(({slide}) => ({
        width : slide.width,
    }))

    return (
        <div>
            <Slide3 width={width} 
                pageUp={pageUp} pageDown={pageDown} 
                enableTransition={enableTransition} changePrice={changePrice}
            />
        </div>
    )
}

export default SlideContainer3;