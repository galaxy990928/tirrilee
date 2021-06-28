import { useLayoutEffect} from 'react';
import { useDispatch } from "react-redux";
import { changeIsResize, changeWidth} from '../modules/slide';

export function useSetWindowWidth() {
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        function updateWidth() {
            dispatch(changeIsResize(true));
            dispatch(changeWidth())
        }
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, [dispatch]);
}