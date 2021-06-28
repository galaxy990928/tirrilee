import React from 'react';
import {  useSelector } from 'react-redux';
import Slide6 from "../../components/slides/Slide6";

const SlideContainer6 = ({pageUp, pageDown, enableTransition, changePrice}) => {
    const {width} = useSelector(({slide}) => ({
        width : slide.width,
    }))

    return (
        <div>
            <Slide6 width={width} 
                pageUp={pageUp} pageDown={pageDown} 
                enableTransition={enableTransition} changePrice={changePrice}
            />
        </div>
    )
}

export default SlideContainer6;