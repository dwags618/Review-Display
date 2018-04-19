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
      reviews: ''

  }
}
  componentDidMount() {
    fetch('/reviews')
            .then(res => {
                console.log(res);
                return res.json()
             })
            .then(data => { 
                this.setState({ reviews:data.reviews })
             });
  }

  render() {
  	console.log(this.state.reviews)
    const { classes } = this.props;

   const tableData = [{ ic: 1, name: 'b', ic: 2, name: 'c', id: 3, name: 'a' }]

    return (
      <Table>
          <TableHead>
            
          </TableHead>
          <TableBody>
            {this.state.reviews}
          </TableBody>
        </Table>
    );
  }
}

export default withStyles(styles)(App);