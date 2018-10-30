import React, { Component } from 'react';

class Product extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {isToggleOn: true};
    //     this.onClick = this.onClick.bind(this);
    // }
    render(){
        const product = this.props.product;
        console.log('----', this.props.product);
        const selected = product.product_selected;
        return(
            <div className='product'>
                <div id={product.id} className={['product-img', selected].join(' ')} onClick={onClick}>
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
                    Чего сидишь, Порадуй котэ, <span onClick={onClick}>купи.</span>
                </div>
            </div>
        )

        function onClick(event){
            const s = event.target.attributes.id.nodeValue;
            debugger;
        }
    }
}

export default Product;