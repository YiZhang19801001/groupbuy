import React, { Component } from "react";

export default class ControlPannel extends Component {
    constructor(props) {
        super(props);

        this.state = { price: 0, quantity: 0 };
    }

    componentDidMount() {
        this.setState({
            price: this.props.product_price,
            quantity: this.props.quantity
        });
    }

    render() {
        return (
            <div className="control-pannel">
                <span className="price">{this.state.price}</span>
                {this.state.quantity > 0 ? (
                    <div>
                        <i className="material-icons">remove</i>
                        <span>{this.state.quantity}</span>
                        <i className="material-icons">add</i>
                    </div>
                ) : (
                    <div>
                        <i className="material-icons">add</i>
                    </div>
                )}
            </div>
        );
    }
}
