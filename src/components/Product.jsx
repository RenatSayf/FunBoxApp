import React, { Component } from 'react';
import notSelectedBack from '../images/Back.png'
import selectedBack from '../images/SelectedBack.png';
import disabledBack from '../images/DisabledBack.png'

class Product extends Component{    
    state = {
        isPresence : this.props.products.presence,
        isSelected : this.props.products.product_selected,
        isBuyReferenced : this.props.products.buy_referenced
    }
    render(){
        let productClass = 'product-non-selected';
        let productImgClass = 'product-img-non-selected';
        let productTagLineClass = 'product-tagline-non-selected';
        let productNameClass = 'product-name-non-selected';
        let productWithWhatClass = 'product-with-what-non-selected';
        let productDoseClass = 'product-dose-non-selected';
        let productPresentClass = 'product-present-non-selected';
        let productCustomerSatisfiedClass = 'product-customer-satisfied-non-selected';
        let productWeightClass = 'product-weight-non-selected';
        let productFooterClass = 'product-footer-non-selected';
        

        const products = this.props.products;
        const onClickEvent = this.state.isPresence ? this.onClick : null;
        let buyReferenced = this.state.isPresence ? " купи" : "";
        let productFooterContent = products.product_footer1;

        if (!this.state.isPresence) {
            productClass = 'product-is-disabled';
            productImgClass = 'product-img-is-disabled';
            productWeightClass = 'product-weight-is-disabled';
            productFooterClass = 'product-footer-is-disabled';
            productFooterContent = products.product_footer3;
        }
        
        if (this.state.isSelected) {
            productClass = 'product-is-selected';
            productImgClass = 'product-img-is-selected';
            productWeightClass = 'product-weight-is-selected';
            productFooterClass = 'product-footer-is-selected';
            productFooterContent = products.product_footer2;
            buyReferenced = "";
        }
        
        return(
            <div id={products.id} className={productClass}>
                <div className={productImgClass} onClick={onClickEvent}>
                    <div className={productTagLineClass}>
                        {products.tagline}
                    </div>
                    <div className={productNameClass}>
                        {products.product_name}
                    </div>
                    <div className={productWithWhatClass}>
                        {products.with_what}
                    </div>
                    <div className={productDoseClass}>
                        {products.dose}
                    </div>
                    <div className={productPresentClass}>
                        {products.present}
                    </div>
                    <div className={productCustomerSatisfiedClass}>
                        {products.customer_satisfied}
                    </div>
                    <div className={[productWeightClass, 'product-weight-cyrcle'].join(' ')}>
                        {products.weight}
                    </div>
                </div>
                <div className={productFooterClass}>
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