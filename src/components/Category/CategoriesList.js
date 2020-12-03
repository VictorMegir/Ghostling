import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Categories()
{
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(result => setCategories(result.categories))
    }, [])
    
    return (
        <div className='categories'>
        <h3 className='categories-declaration'>Categories</h3>
        {categories.map((category, index) => (
            <Link to={
                {
                    pathname: `/categories/${category.strCategory}`,
                    state: {category}
                }} key={index}>
                <div className={`category-${index}`}>
                    <img className='category-thumbnail' src={category.strCategoryThumb} alt='T_T'/>
                    <div className='category-name'>{category.strCategory}</div>
                </div>
            </Link>
        ))}
        </div>
    );    
}

export default Categories;