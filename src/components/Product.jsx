import React, { Component } from 'react';

class Product extends Component{
    render(){
        const product = this.props.product;
        console.log('----', this.props.product);
        return(
            <div className='product'>
                <div className='product-img'>
                    <div>
                        Сказочное заморское явство
                    </div>
                    <h1>
                        Нямушка
                    </h1>
                    <h3>
                        {product.with_what}
                    </h3>
                    <div>
                        {product.dose}
                    </div>
                    <div>
                        {product.present}
                    </div>
                    <div>
                        {product.customer_satisfied}
                    </div>
                    <div className='product-weight'>
                        {product.weight}
                    </div>
                </div>
                <div className='product-footer'>
                    Чего сидишь, Порадуй котэ, <a href="#">купи.</a>
                </div>
            </div>
        )
    }
}

export default Product;