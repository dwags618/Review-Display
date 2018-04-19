import * as React from "react";
import {StarRating} from './star-rating';
import {VerifiedBuyer, VerifiedReviewer, StaffReviewer, ExpertReviewer} from './icons';
import {Thumb} from './icons';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import Datasort from 'react-data-sort'
import IndexView from './components/index-view';
import originalRecipes from './data/original-recipes';



const styles = {
  page: {
    paddingTop: 30
  },
  icon: {
  	width: 200,
  	height: 40
  }
}



class App extends React.Component {

	constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      recipes: originalRecipes

  }
}
  componentDidMount() {
    // fetch('/reviews')
    //         .then(res => {
    //             console.log(res);
    //             return res.json()
    //          })
    //         .then(data => { 
    //             this.setState({ reviews:data.reviews })
    //          });
  }

  render() {

    return (
      <div className="App">
				<div id="new-container"></div>
				<div className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<h2>Recipe Box App</h2>
			</div>
				<div id="root"></div>
				<IndexView
					recipeBank={this.state.recipes}
					 />
      </div>
    );
  }
}

export default withStyles(styles)(App);