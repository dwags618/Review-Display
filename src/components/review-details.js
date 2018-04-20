import React, { Component } from 'react';
import {VerifiedBuyer, VerifiedReviewer, StaffReviewer, Thumb} from '../icons';
import {StarRating} from '../star-rating';

class ReviewDetails extends Component {

	constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      	thumpup_color: 'black',
      	thumbdown_color: 'black'
  	}

    this.handleThumbUp = this.handleThumbUp.bind(this);
    this.handleThumbDown = this.handleThumbDown.bind(this);
	}

	handleThumbUp() {

	    this.setState({
      		thumbup_color: 'blue',
      		thumbdown_color: 'black'
    	})
  	}

  	handleThumbDown() {

	    this.setState({
      		thumbup_color: 'black',
      		thumbdown_color: 'blue'
    	})
  	}
	
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
				<br/>
				<Thumb onClick={this.handleThumbUp} style={{color:this.state.thumbup_color}} className="thumbup"/>
				<Thumb onClick={this.handleThumbDown} style={{color:this.state.thumbdown_color}} className="thumbdown"/>
			</div>
			<div className="right-column">
				<ul>
					{this.props.created.map((item) => {
						return( 
							<li key={item}>
								<p>Submitted {29-(parseInt((item).substring(3,5), 10))} days ago</p>
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
						return( 
							<li key={item}>
							{ item.toString()==='true' &&  <div> Staff Reviewer <StaffReviewer className="badge"/> </div>  }
							</li>
							)
					})}
				</ul>
				<ul>
					{this.props.verifiedbuyer.map((item) => {
						return( 
							<li key={item}>
							{ item.toString()==='true' &&  <div> Verified Buyer <VerifiedBuyer className="badge"/> </div>  }
							</li>
							)
					})}
				</ul>
				<ul>
					{this.props.verifiedreviewer.map((item) => {
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

