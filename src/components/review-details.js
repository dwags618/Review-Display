import React, { Component } from 'react';

class ReviewDetails extends Component {
	
	render() {
		return (
			<div>
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

export default ReviewDetails;
