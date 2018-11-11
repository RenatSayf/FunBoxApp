import React, { Component } from 'react'
import Product from './Product'

class ProductsList extends Component {
    state = {
        windowWidth: window.innerWidth
      }    

    render() {
        const screen_width = this.state.windowWidth;
        const isOdd = this.props.products.length % 2;
        let class_name = "col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 text-center";
        const productsItems = this.props.products.map((product, index) => {
            if (index === this.props.products.length - 1 && isOdd === 1 && (screen_width > 760 && screen_width < 1030)) {
                class_name = "col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 offset-md-3 text-center";
            }
            return (
                <div key={product.id} className={class_name}>
                    <Product products={product} />
                </div>
            )
        });

        return (
            productsItems
        )
    }

    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }
}

export default ProductsList;