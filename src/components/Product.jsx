import React, { Component } from 'react';

class Product extends Component{
    render(){
        return(
            <div className='product'>
                <div className='product-img'>
                    <div>
                        Сказачное заморское явство
                    </div>
                    <h1>
                        Нямушка
                    </h1>
                    <h3>
                        с фуагра
                    </h3>
                    <div>
                        10 порций
                    </div>
                    <div>
                        мышь в подарок
                    </div>
                    <div className='product-weight'>
                        0,5 кг
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