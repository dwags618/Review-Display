import React, { Component } from 'react';
import RecipeDetails from './recipe-details';

class RecipeListing extends Component {
	

	

	render() {

		
			return (
				<li className="recipe-listing">
					<RecipeDetails
						headline={this.props.headline}
						comments={this.props.comments}
						nickname={this.props.nickname}
						location={this.props.location}
						name={this.props.name} />
				</li>

			);
		
	}
}

export default RecipeListing;
