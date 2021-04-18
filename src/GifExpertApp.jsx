import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid'; 

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setcategories([...categories, 'HunterXhunter']);
    // }

    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategoriesProps={setcategories}/> 
          <hr/>

          <ol>
            {
                categories.map( (category) => (
                    <GifGrid
                        key={category}
                        categoryProps={ category } 
                    />
                )) 
            }
          </ol>  
        </>
    );
}

export default GifExpertApp;
