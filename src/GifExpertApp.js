import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import ReactDOM from 'react-dom'

const GifExpertApp = () => {
    
    // const categories = ['Goku','Vegetta','Piccolo'];
    const [categories, setCategories] = useState(['Goku']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Gohan'] );
    //     // setCategories( categories.concat('Gohan'));
    // }

    return(
        <> 
            <h2>GifExpertApp</h2>

            <AddCategory setCategories= { setCategories }/>

            <hr />

            <ol>
                { categories.map( category => 
                    <GifGrid key={ category } category={ category }/>    
                )}
            </ol>

            {/* <button onClick={ handleAdd }>ADD</button> */}
        </>
    );
}

export default GifExpertApp;