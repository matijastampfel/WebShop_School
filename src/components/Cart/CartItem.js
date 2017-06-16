import React, { PropTypes } from 'react';

const CartItem = ({ name, price, currency }) => {
    return (
        <div className="cart-item">
          <span className="cart-item__name">{name}</span>
          <span className="cart-item__price">{price} {currency}</span>
          <button onClick="onEditArticle()"> Edit </button>
        </div>
    );
}

   function onEditArticle() {
        this.CartItem.name = prompt("New name", this.CartItem.name );
       // this.props.article.price = parseInt(prompt("New price", this.props.article.price), 10);
    }
       


CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default CartItem;
