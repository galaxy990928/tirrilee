import React from 'react';
import {  useSelector } from 'react-redux';
import Slide8 from "../../components/slides/Slide8";

const SlideContainer8 = ({reset, changePrice}) => {
    const {width, price, title, multiple} = useSelector(({slide}) => ({
        width : slide.width,
        price : slide.price,
        title : slide.title,
        multiple : slide.multiple,
    }))

    return (
        <div>
            <Slide8 width={width} price={price} title={title} 
                reset={reset} multiple={multiple}
            />
        </div>
    )
}

export default SlideContainer8;