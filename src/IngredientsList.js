import React from 'react';
import classnames from 'classnames';
import {withStyles} from 'material-ui/styles';

const Ingredient = ({ amount, measurement, name}) =>
{
  <li>
    <span>{amount}</span>
    <span>{measurement}</span>
    <span>{name}</span>
  </li>
}

export default Ingredient;
