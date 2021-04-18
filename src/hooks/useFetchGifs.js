import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (categoryProps) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(categoryProps)
            .then( imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            });
    }, [categoryProps]);

    return state;
}
