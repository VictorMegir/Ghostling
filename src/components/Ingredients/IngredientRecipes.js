import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
import Page404 from '../Pages/Page404';

function IngredientRecipes(props)
{
    const ingredient = props.ingredient;
    const [recipes, setRecipes] = useState([]);
    
    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 5000);

    const [recipeNum, setRecipeNum] = useState(10);
    const moreRecipesHandler = () => setRecipeNum(recipeNum + 10);

    useEffect(() => {
        //fetch(`/api/ingredients/${ingredient}`)
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            .then(response => response.json())
            .then(data => {
                if(data.meals === null) return;
                setRecipes(data.meals);
                setLoading(false);
            });
    }, [ingredient]);

    return(
        <>
        {loading === true ? (
            <LoadingPage />
        ) : loading === false && recipes.length === 0 ? (
            <Page404 />
        ) : (
            <div className='ingredients-recipes'>
                <div className='recipes-declaration'>Recipes containing {ingredient}.</div>
                <div className='recipes-list'>
                    {recipes.slice(0, recipeNum).map((recipe, index) => (
                        <div className='recipe' key={index}>
                            <Link to={`/recipes/id/${recipe.idMeal}`}>
                            <div className='recipe-name'>{recipe.strMeal}</div>
                            <img className='recipe-image' src={recipe.strMealThumb} alt='T_T'/>
                            </Link>
                        </div>
                    ))}
                </div>
                {recipes.length > recipeNum ? (
                    <div className='button-container'>
                        <button className='button' onClick={moreRecipesHandler}>More Recipes</button>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        )}
        </>
    );
}

export default IngredientRecipes;