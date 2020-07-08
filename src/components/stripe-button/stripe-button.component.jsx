import React from 'react';

import StripeCheckOut from 'react-stripe-checkout';


const StripeCheckOutButton =({price}) => {
    
    const priceForStripe = price * 100;
    const publishableKey= 'pk_test_51H2hyjAgBays4WrlpvnZfs0HdXxbRqabcdjY5nQmVLZqKXrF7NT1VBGj3jeY0ZV4TQtLsjPPtSceM0ZqxIE9IjkW00jbEH24af';
    
   const onToken = token => 
    {
            console.log(token);
        alert('Payment Successful');
    }
    

    return(
           <StripeCheckOut 
           label='Pay Now'
           name='Crown Clothing Ltd.'
           billingAddress
           shippingAddress
           image='https://svgshare.com/i/Cuz.svg'
           description={ `Yout total is $${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
           />
    );
};

export default StripeCheckOutButton;