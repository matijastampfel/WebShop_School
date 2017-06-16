import React, { Component, PropTypes } from 'react';

class Product extends Component {
    constructor (props) {
    super(props);
    this.state = { name: this.props.name,
                    price: this.props.price};
                    
  }

    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }
        onEdit= () => {
        const { id, name, price} = this.props;
        this.name = prompt("New name", name );
        this.price = parseInt(prompt("New Price", price));
        this.setState((prevState, props) => ({name: this.name, price: this.price}));
       // this.setState((prevState, props) => ({price: this.price}));
        console.log("this.name",this.name);
        // name = this.name.bind(this);
        // this.props.article.price = parseInt(prompt("New price", this.props.article.price), 10);
    }
       
    render() {
        const { name, price, currency, image, url, isInCart } = this.props;

        return (
            <div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <h3>
                        <a href={url}>{this.state.name}</a>
                    </h3>
                    <div className="product__price">{this.state.price} {this.props.currency}</div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-success'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                        <button
                        className='btn btn-default'
                        onClick={(e) => this.onEdit(e)}
                        >Edit</button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
