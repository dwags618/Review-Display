import React, { Component } from 'react';
import RecipeListing from './review-listing';

class IndexView extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		if (this.props.recipeBank === '') {
			return <div>Loading...</div>
		} else {
			return (
				<div className="IndexView">
					<ul id="IndexViewList">
						{this.props.recipeBank.map((item) =>
							// <li>{item.name}</li>
							<RecipeListing
								key={item.review_id}
								name={item.review_id}
								headline={item.details.headline}
								comments={item.details.comments}
								nickname={item.details.nickname}
								location={item.details.location} />
						)}
					</ul>

				</div>
			)
		}

	}
}

export default IndexView;
