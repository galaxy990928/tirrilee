import React from 'react';
import {  useSelector } from 'react-redux';
import Slide7 from "../../components/slides/Slide7";

const SlideContainer7 = ({pageUp, pageDown, enableTransition, changePrice}) => {
    const {width} = useSelector(({slide}) => ({
        width : slide.width,
    }))

    return (
        <div>
            <Slide7 width={width} 
                pageUp={pageUp} pageDown={pageDown} 
                enableTransition={enableTransition} changePrice={changePrice}
            />
        </div>
    )
}

export default SlideContainer7;