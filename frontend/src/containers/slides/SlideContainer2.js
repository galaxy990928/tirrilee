import React from 'react';
import { useSelector } from 'react-redux';
import Slide2 from "../../components/slides/Slide2";

const SlideContainer2 = ({pageUp, pageDown, enableTransition, changePrice, setTitle}) => {
    const {width} = useSelector(({slide}) => ({
        width : slide.width,
    }))

    return (
        <div>
            <Slide2 width={width} 
                pageUp={pageUp} pageDown={pageDown} setTitle={setTitle}
                enableTransition={enableTransition} changePrice={changePrice}
            />
        </div>
    )
}

export default SlideContainer2;