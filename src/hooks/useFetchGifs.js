import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // si el array de dependecias es vacio, se ejecutara solo una vez
    useEffect( () => {
        getGifs(category)
        .then( imgs => {

            setState({
                data: imgs,
                loading: false
            });

        });
    }, [category])

    return state; // por defecto -> {data: [], loading: true} 
}