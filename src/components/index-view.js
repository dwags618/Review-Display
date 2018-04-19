import React, { Component } from 'react';
import ReviewListing from './review-listing';
import {VerifiedBuyer, VerifiedReviewer, StaffReviewer, ExpertReviewer} from '../icons';
import {Thumb} from '../icons';
import {StarRating} from '../star-rating';

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
							<div>
							<div className="icon">
							<StarRating rating={item.metrics.rating} />
							</div>
							<div className="icon">
							<VerifiedBuyer />
							</div>
							<div className="icon">
							<VerifiedReviewer />
							</div>
							<div className="icon">
							<StaffReviewer />
							</div>
							<div className="icon">
							<ExpertReviewer />
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
