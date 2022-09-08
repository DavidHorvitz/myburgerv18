import React, { useEffect, Component } from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = (props)=> {
    // const ingredients = props.ingredients;
    //This could be a functional component,doesn't have to be a class
    useEffect(() => {
        console.log('[OrderSummary] will update');//It checks when this function is enabled
    });

const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey => {
        return (<li key={igkey}>
            <span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {props.ingredients[igkey]}
        </li>);
    });
return (
    <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout ?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE </Button>
    </React.Fragment>
);

    

};

export default OrderSummary;
// class OrderSummary extends Component {
//     //This could be a functional component,doesn't have to be a class
//     componentDidUpdate() {
//         console.log('[OrderSummary] will update');//It checks when this function is enabled
//     }
//     render() {
//         const ingredientSummary = Object.keys(this.props.ingredients)
//             .map(igkey => {
//                 return (<li key={igkey}>
//                     <span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {this.props.ingredients[igkey]}
//                 </li>);
//             });
//         return (
//             <React.Fragment>
//                 <h3>Your Order</h3>
//                 <p>A delicious burger with the following ingredients:</p>
//                 <ul>
//                     {ingredientSummary}
//                 </ul>
//                 <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
//                 <p>Continue to Checkout ?</p>
//                 <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
//                 <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE </Button>
//             </React.Fragment>
//         );

//     }

// };

// export default OrderSummary;