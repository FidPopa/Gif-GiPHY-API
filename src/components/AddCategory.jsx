import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategoriesProps}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        // console.log('evento:::', e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 3 ){
            setCategoriesProps(cats => [ inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
         <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
         />   
        </form>
    )
}

export default AddCategory;

AddCategory.propTypes = {
    setCategoriesProps: PropTypes.func.isRequired,
};