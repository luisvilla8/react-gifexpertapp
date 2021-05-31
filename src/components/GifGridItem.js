import React from 'react'

export const GifGridItem = ({ title, url }) => {
    // console.log(url);
    return (
        <div className="card animate__animated animate__rubberBand">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
