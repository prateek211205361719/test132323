

import React,{ Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as action from '../actions';
class Payment extends Component{
    onToken(token){
        this.props.handleToken(token);
    }
    render(){
     
        return(
          <StripeCheckout name="Prateek" description="5$ from 5 email" amount={500} token={this.onToken.bind(this)}   stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                <button className="btn">Add Credit</button>
          </StripeCheckout>
        );
    }

}

export default connect(null, action)(Payment);