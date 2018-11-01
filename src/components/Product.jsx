import React, { Component } from 'react';

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.onClick = this.onClick.bind(this);
    }
    render(){
        const products = this.props.products;
        console.log('----', this.props);
        
        const selected = products.product_selected;
        return(
            <div className='product'>
                <div id={products.id} className={['product-img', selected].join(' ')} onClick={this.onClick}>
                    <div>
                        Сказочное заморское явство
                    </div>
                    <h1>
                        Нямушка
                    </h1>
                    <h3>
                        {products.with_what}
                    </h3>
                    <div>
                        {products.dose}
                    </div>
                    <div>
                        {products.present}
                    </div>
                    <div>
                        {products.customer_satisfied}
                    </div>
                    <div className='product-weight'>
                        {products.weight}
                    </div>
                </div>
                <div className='product-footer'>
                    Чего сидишь, Порадуй котэ, <span onClick={this.onClick}>купи.</span>
                </div>
            </div>
        )        
    }

    onClick = (event) => {
        const s = event.currentTarget.attributes.id.nodeValue;
        debugger;
    }
}

export default Product;