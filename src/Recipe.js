import React, { useState } from 'react';

function Recipe({ recipe, deleteRecipe }) {
 const handleDelete = () => {
    (false);
  };
    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img className="scale-down" src={recipe.photo} alt={recipe.name}/></td>
            <td className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td className="content_td"><p>{(recipe.preparation)}</p></td>
            <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    )
  } 


export default Recipe