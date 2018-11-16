import React, { Component } from 'react';

class Product extends Component{    
    state = {
        isPresence : this.props.products.presence,
        isSelected : this.props.products.product_selected,
        isBuyReferenced : this.props.products.buy_referenced
    }
    render(){
        const products = this.props.products;
        const onClickEvent = this.state.isPresence ? this.onClick : null;
        let buyReferenced = this.state.isPresence ? " купи" : "";
        let productFooterContent = products.product_footer1;

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

        if (!this.state.isPresence) {
            productClass = 'product-is-disabled';
            productImgClass = 'product-img-is-disabled';
            productTagLineClass = 'product-tagline-is-disabled';
            productNameClass = 'product-name-is-disabled';
            productWithWhatClass = 'product-with-what-is-disabled';
            productDoseClass = 'product-dose-is-disabled';
            productPresentClass = 'product-present-is-disabled';
            productCustomerSatisfiedClass = 'product-customer-satisfied-is-disabled';
            productWeightClass = 'product-weight-is-disabled';
            productFooterClass = 'product-footer-is-disabled';
            productFooterContent = products.product_footer3;
        }
        
        if (this.state.isSelected) {
            productClass = 'product-is-selected';
            productImgClass = 'product-img-is-selected';
            productTagLineClass = 'product-tagline-is-selected';
            productNameClass = 'product-name-is-selected';
            productWithWhatClass = 'product-with-what-is-selected';
            productDoseClass = 'product-dose-is-selected';
            productPresentClass = 'product-present-is-selected';
            productCustomerSatisfiedClass = 'product-customer-satisfied-is-selected';
            productWeightClass = 'product-weight-is-selected';
            productFooterClass = 'product-footer-is-selected';
            productFooterContent = products.product_footer2;
            buyReferenced = "";
        }
        
        return(
            <div id={products.id} className={[productClass, 'product'].join(' ')}>
                <div className={productImgClass} onClick={onClickEvent}>
                    <div className={[productTagLineClass, 'product-tag-line'].join(' ')}>
                        {products.tagline}
                    </div>
                    <div className={[productNameClass, 'product-mame'].join(' ')}>
                        {products.product_name}
                    </div>
                    <div className={[productWithWhatClass, 'product-with-what'].join(' ')}>
                        {products.with_what}
                    </div>
                    <div className={[productDoseClass, 'product-dose'].join(' ')}>
                        {products.dose}
                    </div>
                    <div className={[productPresentClass, 'product-present'].join(' ')}>
                        {products.present}
                    </div>
                    <div className={[productCustomerSatisfiedClass, 'product-customer-satisfied'].join(' ')}>
                        {products.customer_satisfied}
                    </div>
                    <div className={[productWeightClass, 'product-weight-cyrcle'].join(' ')}>
                        <span className="product-weighing-value">{products.weight}</span>
                        <br/>                        
                        <span className="product-weighing-unit">кг</span>
                    </div>
                </div>
                <div className={[productFooterClass, 'text-center', 'product-footer'].join(' ')}>
                    {productFooterContent}<span onClick={onClickEvent}>{buyReferenced}</span>
                </div>
            </div>
        )        
    }

    onClick = () => {
        this.setState({
            isSelected : !this.state.isSelected
        })
    }
}

export default Product;