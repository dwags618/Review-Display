import React from 'react';
import classnames from 'classnames';
import {withStyles} from 'material-ui/styles';
import Recipe from './Recipe';

const Menu = ({recipes}) => {
	{recipes.map((recipe, i) =>
<Recipe key={i} {...recipe} />)
		}
		
}

export default Menu;