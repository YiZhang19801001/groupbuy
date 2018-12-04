import React, { Component } from "react";

export default class QuantityControlPannel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.quantity,
            mode: this.props.mode,
            shopping_cart_list: [],
            product: this.props.product || {}
        };
        this.decreaseItem = this.decreaseItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {
        if (this.props.shoppingCartList) {
            this.setState({ shopping_cart_list: this.props.shoppingCartList });
        }
        this.setState({ quantity: this.props.quantity });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            shopping_cart_list: this.props.shoppingCartList,
            quantity: nextProps.quantity
        });
    }

    decreaseItem() {
        if (this.state.mode == 1) {
            this.state.shopping_cart_list.forEach((cart_item, index) => {
                if (
                    cart_item.product_id === this.state.product.product_id &&
                    cart_item.quantity > 1
                ) {
                    cart_item.quantity--;
                } else {
                    this.state.shopping_cart_list.splice(index, 1);
                }
                this.props.updateShopCartList(this.state.shopping_cart_list);
            });
        } else {
            this.props.decrease();
        }
    }

    addItem() {
        if (this.state.mode == 1) {
            let flag = false;
            for (let i = 0; i < this.state.shopping_cart_list.length; i++) {
                if (
                    this.state.shopping_cart_list[i].product_id ===
                    this.state.product.product_id
                ) {
                    this.state.shopping_cart_list[i].quantity++;

                    flag = true;
                    break;
                }
            }
            if (!flag) {
                this.state.product.quantity = 1;
                this.state.shopping_cart_list.push(this.state.product);
            }

            this.props.updateShopCartList(this.state.shopping_cart_list);
        } else {
            this.props.increase();
        }
    }

    render() {
        return this.state.quantity > 0 ? (
            <div className="quantity-control-pannel">
                <i onClick={this.decreaseItem} className="material-icons">
                    remove
                </i>
                <span className="quantity">{this.state.quantity}</span>
                <i onClick={this.addItem} className="material-icons">
                    add
                </i>
            </div>
        ) : (
            <div className="quantity-control-pannel">
                <i onClick={this.addItem} className="material-icons">
                    add
                </i>
            </div>
        );
    }
}
