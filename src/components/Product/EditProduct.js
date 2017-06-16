import React, { Component } from 'react';

class EditProduct extends Component {
    render() {
        return (
            <div className="product thumbnail">
               Name of product: <input type="text" name="name" name={this.props.data.name}/>
               Price: <input type="text" name="price"/>
               Picture: <input type="text" name="link"/>
               <button>Change</button>
            </div>
        );
    }
}

export default EditProduct;