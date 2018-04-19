import React from 'react';
import classnames from 'classnames';
import {withStyles} from 'material-ui/styles';
import Ingredient from './Ingredient'

const IngredientsList = ({ list}) =>
{
  <ul>
    {list.map((ingredient, i) =>
      <Ingredient key={i} {...ingredient} />
      )}
  </ul>
}

export default IngredientsList;
