import React from 'react';
import classnames from 'classnames';
import {withStyles} from 'material-ui/styles';
import IngredientsList from './IngredientsList'

const Recipe = ({ name, ingredients, steps}) =>
{
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <IngredientsList list={ingredients}/>
  </section>
}

export default Recipe;
