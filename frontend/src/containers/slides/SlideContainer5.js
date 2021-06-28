import React from 'react';
import {  useSelector } from 'react-redux';
import Slide5 from "../../components/slides/Slide5";

const SlideContainer5 = ({pageUp, pageDown, enableTransition, setMultiple}) => {
    const {width} = useSelector(({slide}) => ({
        width : slide.width,
    }))

    return (
        <div>
            <Slide5 width={width} 
                pageUp={pageUp} pageDown={pageDown} 
                enableTransition={enableTransition} setMultiple={setMultiple}
            />
        </div>
    )
}

export default SlideContainer5;