import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(prevState => e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit hecho')
        if (inputValue.trim().length > 2) {
            setCategories(prevState => ([
                inputValue,
                ...prevState
            ]))
            setInputValue(prevState => '')

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={inputValue}
                onChange={handleInputChange}/>
        </form>
    )
} 

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
