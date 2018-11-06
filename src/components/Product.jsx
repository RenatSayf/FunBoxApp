import React, { Component } from 'react';
import notSelectedBack from '../images/Back.png'
import selectedBack from '../images/SelectedBack.png';
import disabledBack from '../images/DisabledBack.png'

const color = {
    "NotSelected":"#00bfff",
    "Selected":"#ff00ff",
    "Disabled":"#808080"
}

class Product extends Component{    
    state = {
        isPresence : this.props.products.presence,
        isSelected : this.props.products.product_selected,
        isBuyReferenced : this.props.products.buy_referenced
    }
    render(){
        const products = this.props.products;
        const onClickEvent = this.state.isPresence ? this.onClick : null;
        let bgImage = this.state.isPresence ? `url(${notSelectedBack})` : `url(${disabledBack})`;
        if (this.state.isSelected) {
            bgImage = `url(${selectedBack})`;
        }

        let weightCircleColor = this.state.isPresence ? color.NotSelected : color.Disabled;
        if (this.state.isSelected) {
            weightCircleColor = color.Selected;
        }

        let productFooterContent = this.state.isPresence ? products.product_footer1 : products.product_footer3;
        if (this.state.isSelected) {
            productFooterContent = products.product_footer2;
        }

        let buyReferenced = this.state.isPresence ? " купи" : "";
        if (this.state.isSelected) {
            buyReferenced = "";
        }

        return(
            <div id={products.id} className='product'>
                <div className='product-img' onClick={onClickEvent} style={{backgroundImage: bgImage}}>
                    <div>
                        {products.tagline}
                    </div>
                    <h1>
                        {products.product_name}
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
                    <div className='product-weight' style={{backgroundColor: weightCircleColor}}>
                        {products.weight}
                    </div>
                </div>
                <div className='product-footer'>
                    {productFooterContent}<span onClick={onClickEvent}>{buyReferenced}</span>
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