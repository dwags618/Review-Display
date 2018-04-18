import * as React from "react";
import {StarRating} from './star-rating';
import {VerifiedBuyer, VerifiedReviewer, StaffReviewer, ExpertReviewer} from './icons';
import {Thumb} from './icons';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';

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
  componentDidMount() {
    
  }

  render() {
    const { classes } = this.props;

   

    return (
      <div className={classes.page}>
<div>
	<div>
		
	</div>
	<Typography variant="display1">
        {'Review Display'}
      </Typography>
	<div>
        
           <StarRating rating={5} className={classes.icon}>
		</StarRating>
		<VerifiedBuyer className={classes.icon}>
		</VerifiedBuyer>
		<Thumb className={classes.icon}>
		</Thumb>
		<div>
		{'Dylan'}
		</div>
          <Divider />
          <StarRating rating={5} className={classes.icon}>
		</StarRating>
		<div>
		{'Dylan'}
		</div>
	</div>
</div>
</div>
    );
  }
}

export default withStyles(styles)(App);