import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class RecipeDetails extends Component {
	constructor(props) {
		super(props);

		
	}

	

	render() {
		return (
			<div className="recipe-details">
				<ul>
					{this.props.headline.map((item) => {
						return <li key={item}><p>{item}</p></li>
					})}
				</ul>
				<ul>
					{this.props.comments.map((item) => {
						return <li key={item}><p>{item}</p></li>
					})}
				</ul>
				<ul>
					{this.props.nickname.map((item) => {
						return <li key={item}><p>{item}</p></li>
					})}
				</ul>
				<ul>
					{this.props.location.map((item) => {
						return <li key={item}><p>{item}</p></li>
					})}
				</ul>
				
			</div>
		)
	}
}

export default RecipeDetails;
