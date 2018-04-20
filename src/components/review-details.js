import React, { Component } from 'react';
import {VerifiedBuyer, VerifiedReviewer, StaffReviewer} from '../icons';
import {StarRating} from '../star-rating';

class ReviewDetails extends Component {
	
	render() {
		return (
			<div>
			<div className="icon">
			{this.props.rating.map((item) => {
				return(<li key={item}>
							<StarRating rating={item} />
							</li>)
			})}
			
							
							</div>
				<div className="left-column">
				<div className="headline">
				<ul>
					{this.props.headline.map((item) => {
						return <li key={item}><p>{item}</p></li>
					})}
				</ul>
				</div>
				<ul>
					{this.props.comments.map((item) => {
						return <li key={item}><p>{item}</p></li>
					})}
				</ul>
				<br/>
				<div>Was this review helpful to you?</div>
				</div>
				<div className="right-column">
				<ul>
					{this.props.created.map((item) => {
						return( 
							<li key={item}>
								<p>Submitted {29-(parseInt((item).substring(3,5)))} days ago</p>
							</li>
							)
					})}
				</ul>
				<ul>
					{this.props.nickname.map((item) => {
						return( 
							<li key={item}>
								<p>By {item}</p>
							</li>
							)
					})}
				</ul>
				<ul>
					{this.props.location.map((item) => {
						return( 
							<li key={item}>
								<p>From {item}</p>
							</li>
							)
					})}
				</ul>
				<ul>
					{this.props.staffreviewer.map((item) => {
						console.log(item)
						return( 
							<li key={item}>
							{ item.toString()==='true' &&  <div> Staff Reviewer <StaffReviewer className="badge"/> </div>  }
							</li>
							)
					})}
				</ul>
				<ul>
					{this.props.verifiedbuyer.map((item) => {
						console.log(item)
						return( 
							<li key={item}>
							{ item.toString()==='true' &&  <div> Verified Buyer <VerifiedBuyer className="badge"/> </div>  }
							</li>
							)
					})}
				</ul>
				<ul>
					{this.props.verifiedreviewer.map((item) => {
						console.log(item)
						return( 
							<li key={item}>
							{ item.toString()==='true' &&  <div> Verified Reviewer <VerifiedReviewer className="badge"/> </div>  }
							</li>
							)
					})}
				</ul>
				</div>
			</div>
		)
	}
}

export default ReviewDetails;

