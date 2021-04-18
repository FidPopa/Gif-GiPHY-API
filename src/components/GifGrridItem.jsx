import React from 'react'

export const GifGrridItem = ({title, url }) => {
    // console.log({title, url});
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{ title }</p>
        </div>
    )
}

export default GifGrridItem;
