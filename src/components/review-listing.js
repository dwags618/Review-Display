import React, { Component } from 'react';
import ReviewDetails from './review-details';
import Divider from 'material-ui/Divider';

class ReviewListing extends Component {
	
	render() {
		return (
			<div>
			<li className="review-listing">
				<ReviewDetails
					headline={this.props.headline}
					comments={this.props.comments}
					nickname={this.props.nickname}
					location={this.props.location}
					name={this.props.name}
					staffreviewer={this.props.staffreviewer}
					verifiedreviewer={this.props.verifiedreviewer}
					verifiedbuyer={this.props.verifiedbuyer}
					created={this.props.created}
					rating={this.props.rating}
					/>
			</li>
			
			</div>
		);
	}
}

export default ReviewListing;
