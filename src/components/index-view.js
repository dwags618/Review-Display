import React, { Component } from 'react';
import ReviewListing from './review-listing';

class IndexView extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		if (this.props.reviewBank === '') {
			return <div>Loading...</div>
		} else {
			return (
				<div className="IndexView">
					<ul id="IndexViewList">
						{this.props.reviewBank.map((item) =>
							// <li>{item.name}</li>
							<ReviewListing
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
