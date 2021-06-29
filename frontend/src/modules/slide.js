import { createAction, handleActions} from 'redux-actions';

const SET_TITLE = 'slide/SET_TITLE';
const CHANGE_PAGE = 'slide/CHANGE_PAGE';
const SET_MULTIPLE = 'slide/SET_MULTIPLE';
const CHANGE_PRICE = 'slide/CHANGE_PRICE';
const CHANGE_WIDTH = 'slide/CHANGE_WIDTH';
const CHANGE_IS_RESIZE = 'slide/CHANGE_IS_RESIZE';

export const setTitle = createAction(
    SET_TITLE,
    title => title,
)

export const changePage = createAction(
    CHANGE_PAGE,
    page => page,
)

export const setMultiple = createAction(
    SET_MULTIPLE,
    multiple => multiple,
)

export const changePrice = createAction(
    CHANGE_PRICE,
    price => price,
)

export const changeWidth = createAction(
    CHANGE_WIDTH,
);

export const changeIsResize = createAction(
    CHANGE_IS_RESIZE,
    isResize => isResize
)

const initialState = {
    page : 0,
    price : 0,
    title : '',
    multiple : 1,
    width : document.documentElement.clientWidth - 10,
    isResize : false,
};

const slide = handleActions(
    {
        [SET_TITLE] : (state, {payload: title}) => ({
            ...state,
            title,
        }),
        [CHANGE_PAGE] : (state, {payload : page}) => ({
            ...state,
            page,
        }),
        [SET_MULTIPLE] : (state, {payload : multiple}) => ({
            ...state,
            multiple,
        }),
        [CHANGE_PRICE] : (state, {payload : price}) => ({
            ...state,
            price : state['price'] + price
        }),
        [CHANGE_WIDTH] : (state, payload) => ({
            ...state,
            width : document.documentElement.clientWidth,
        }),
        [CHANGE_IS_RESIZE] : (state, {payload : isResize}) => ({
            ...state,
            isResize : isResize,
        })
    },
    initialState,
)

export default slide;