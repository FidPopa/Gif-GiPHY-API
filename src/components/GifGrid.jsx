import React from 'react';
import  { useFetchGifs } from '../hooks/useFetchGifs';
import GifGrridItem from './GifGrridItem';

export const GifGrid = ({categoryProps}) => {

    const {data:images ,loading} = useFetchGifs(categoryProps);

    return (
        <> 
            <h3 className="animate__animated animate__fadeIn">{ categoryProps }</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifGrridItem
                            key={img.id}  
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;