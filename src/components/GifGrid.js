import React/*, { useEffect, useState }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs'


export const GifGrid = ( { category }) => {

    const { data:images, loading } = useFetchGifs( category );


    return (
        <>
            <h3> { category } </h3>
            <h3 className="animate__animated animate__jello"> { loading && "C A R G A N D O ..." } </h3>
            <div className="card-grid">
                {/* <h4>{ count }</h4>
                <button onClick={ () => setCount( count + 1)}>+1</button> */}
                { 
                    images.map( img => (
                        <GifGridItem 
                            key= {img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
