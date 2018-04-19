import React, { Component } from 'react';
import ReviewListing from './review-listing';
import {VerifiedBuyer, VerifiedReviewer, StaffReviewer} from '../icons';
import {Thumb} from '../icons';
import {StarRating} from '../star-rating';
import Divider from 'material-ui/Divider';
import Datasort from 'react-data-sort'

class IndexView extends Component {

	render() {
		if (this.props.reviewBank === '') {
			return <div>Loading...</div>
		} else {
			return (
				<div className="IndexView">
					<ul id="IndexViewList">
						{this.props.reviewBank.map((item) =>
							<div>
							<div className="icon">
							<StarRating rating={item.metrics.rating} />
							</div>
							
							
							
				
							<ReviewListing
								key={item.review_id}
								name={item.review_id}
								headline={item.details.headline}
								comments={item.details.comments}
								nickname={item.details.nickname}
								location={item.details.location} />
								</div>
						)}
					</ul>
				</div>
			)
		}
	}
}

export default IndexView;
