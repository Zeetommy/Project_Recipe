import React, { useState } from "react";

function RecipeCreate({addRec}) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [formData, setFormData] = useState({ ...initialFormState })
  
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addRec(formData);
    setFormData({ ...initialFormState });
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeHolder="Name"
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeHolder="Cuisine"
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleChange}
                required={true}
                placeHolder="URL"
              />
            </td>
            <td>
              <textarea 
                id="ingredients"
                type="text"
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeHolder="Ingredients"
              />
            </td>
            <td>
              <textarea 
                id="preparation"
                type="text"
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeHolder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
