import React from 'react';

import classes from './Burger.module.css';

import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

const Burger = (props) => {
    let TransformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngridient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    console.log(TransformedIngredients);
    if (TransformedIngredients.length === 0) {
        TransformedIngredients = <p>Please Start adding the ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {TransformedIngredients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
};

export default Burger;