import React, { Component } from 'react';
import ReviewListing from './review-listing';
import {Thumb} from '../icons';
import Divider from 'material-ui/Divider';

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
							<div>
							<ReviewListing
								key={item.review_id}
								name={item.review_id}
								staffreviewer={item.badges.is_staff_reviewer}
								verifiedbuyer={item.badges.is_verified_buyer}
								verifiedreviewer={item.badges.is_verified_reviewer}
								headline={item.details.headline}
								comments={item.details.comments}
								nickname={item.details.nickname}
								location={item.details.location}
								created={item.details.created}
								rating={item.metrics.rating}
								/>
								</div>

								</div>
						)}

					</ul>
				</div>
			)
		}
	}
}

export default IndexView;
