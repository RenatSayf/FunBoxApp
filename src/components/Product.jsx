import React, { Component } from 'react';

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.onClick = this.onClick.bind(this);
    }
    render(){
        const product = this.props.product;
        console.log('----', this.props.product);
        const selected = product.product_selected;
        return(
            <div className='product'>
                <div id={product.id} className={['product-img', selected].join(' ')} onClick={this.onClick}>
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
                    Чего сидишь, Порадуй котэ, <span onClick={this.onClick}>купи.</span>
                </div>
            </div>
        )        
    }

    onClick = (event) => {
        const s = event.currentTarget.attributes.id;
        debugger;
    }
}

export default Product;