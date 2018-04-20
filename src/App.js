import * as React from "react";
import IndexView from './components/index-view';
import sortBy from 'sort-by';

class App extends React.Component {

	constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      	reviews: '',
  		value: ''
  	}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
	    fetch('/reviews')
	            .then(res => {
	                return res.json()
	             })
	            .then(data => { 
	                this.setState({ reviews:data.reviews.sort(sortBy('-details.created')) })
	             });
	}

	handleChange(event) {

	    this.setState({value: event.target.value});

  	}

  	handleSubmit(event) {

	    event.preventDefault();

	    if(this.state.value==='most_helpful')
	    {
	    	this.setState({ reviews:this.state.reviews.sort(sortBy('-metrics.helpful_score')) })
	    }

	    else if(this.state.value==='most_recent')
	    {
	    	this.setState({ reviews:this.state.reviews.sort(sortBy('-details.created')) })
	    }

	    else if(this.state.value==='lowest_rated')
	    {
	    	this.setState({ reviews:this.state.reviews.sort(sortBy('metrics.rating')) })
	    }

	    else if(this.state.value==='highest_rated')
	    {
	    	this.setState({ reviews:this.state.reviews.sort(sortBy('-metrics.rating')) })
	    }

	    else if(this.state.value==='oldest')
	    {
	    	this.setState({ reviews:this.state.reviews.sort(sortBy('details.created')) })
	    }
  	}

  	render() {
	    return (
	      <div className="App">
			<div id="new-container"></div>
				<div className="App-header">
					<h2>Review Display</h2>
				</div>
				<div style={{marginLeft:40}}>
					<form onSubmit={this.handleSubmit}>
			          	<select value={this.state.value} onChange={this.handleChange}>
				            <option value="most_recent">Most Recent</option>
				            <option value="most_helpful">Most Helpful</option>
				            <option value="lowest_rated">Lowest Rated</option>
				            <option value="highest_rated">Highest Rated</option>
				            <option value="oldest">Oldest</option>
			          	</select>
			          	<input type="submit" value="Submit" />
	      			</form>
      			</div>
				<div id="root"></div>
				<IndexView
					reviewBank={this.state.reviews}
				/>
	      </div>
	    );
  	}
}

export default App;