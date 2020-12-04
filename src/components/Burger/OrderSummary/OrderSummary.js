import React from 'react'

import Button from '../../UI/Button/Button'

function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });
    return (
        <>
            <h3>Your order</h3>
            <p>A delicious order with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={}>CANCEL</Button>
            <Button btnType="Succes" clicked={}>CONTINUE</Button>
        </>
    )
}

export default OrderSummary
