import React, { Component } from 'react';
import {VerifiedBuyer, VerifiedReviewer, StaffReviewer} from '../icons';

class ReviewDetails extends Component {
	
	render() {
		return (
			<div>

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
							{ item.toString()==='true' &&  <StaffReviewer/>  }
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

