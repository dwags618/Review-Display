import * as React from "react";
import IndexView from './components/index-view';

class App extends React.Component {

	constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      	reviews: ''
  		}
	}

	componentDidMount() {
	    fetch('/reviews')
	            .then(res => {
	                return res.json()
	             })
	            .then(data => { 
	                this.setState({ reviews:data.reviews })
	             });
	}

  	render() {
	    return (
	      <div className="App">
			<div id="new-container"></div>
				<div className="App-header">
					<h2>Review Display</h2>
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