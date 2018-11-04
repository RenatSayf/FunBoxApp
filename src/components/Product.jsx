import React, { Component } from 'react';
import notSelectedBack from '../images/Back.png'
import selectedBack from '../images/SelectedBack.png';
import disabledBack from '../images/DisabledBack.png'

class Product extends Component{    
    state = {
        isPresence : this.props.products.presence,
        isSelected : this.props.products.product_selected
    }
    render(){
        const products = this.props.products;
        const onClickEvent = this.state.isPresence ? this.onClick : null;
        let bgImage = this.state.isPresence ? `url(${notSelectedBack})` : `url(${disabledBack})`;
        if (this.state.isSelected) {
            bgImage = `url(${selectedBack})`;
        }
        return(
            <div id={products.id} className='product'>
                <div className='product-img' onClick={onClickEvent} style={{backgroundImage: bgImage}}>
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
                    Чего сидишь, Порадуй котэ, <span onClick={onClickEvent}>купи.</span>
                </div>
            </div>
        )        
    }

    onClick = (event) => {
        // let parentId = event.currentTarget.parentNode.id;
        // if(parentId === "" || parentId === null || parentId === undefined) {
        //     parentId = event.currentTarget.parentNode.parentNode.id;
        // }
        // $('#' + parentId + '  > div.product-img').css('background-image','url(' + selectedBack + ')');
        this.setState({
            isSelected : !this.state.isSelected
        })
    }
}

export default Product;