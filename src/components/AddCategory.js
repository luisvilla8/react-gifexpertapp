import React, { useState } from 'react'
import { PropTypes } from 'prop-types'

export const AddCategory = ( { setCategories } ) => {

    const [inputvalue, setinputvalue] = useState('')

    const handleChangeInputValue = ( e ) => {
        setinputvalue( e.target.value );
        // console.log( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if(inputvalue.trim().length > 2) {
            setCategories( cats => [inputvalue,...cats]);
            setinputvalue('');
        }
    }

    return (
        <form onSubmit= { handleSubmit }>
            <h2>{ inputvalue }</h2>

            <input 
                type="text"
                value={ inputvalue }
                onChange={ handleChangeInputValue }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
