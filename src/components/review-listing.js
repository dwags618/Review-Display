import React, { Component } from 'react';
import ReviewDetails from './review-details';

class ReviewListing extends Component {
	

	

	render() {

		
			return (
				<li className="review-listing">
					<ReviewDetails
						headline={this.props.headline}
						comments={this.props.comments}
						nickname={this.props.nickname}
						location={this.props.location}
						name={this.props.name} />
				</li>

			);
		
	}
}

export default ReviewListing;
