import React, { Component } from "react";

export default class OptionCard extends Component {
    constructor(props) {
        super(props);

        this.state = { quantity: 0 };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.setOption = this.setOption.bind(this);
    }

    increase() {
        this.setState({ quantity: this.state.quantity + 1 });
        this.setOption();
    }

    decrease() {
        this.setState({ quantity: this.state.quantity - 1 });
        this.setOption();
    }

    setOption() {
        this.props.setOption({
            option_value_name: this.props.option.option_value_name,
            price: this.props.option.price,
            product_option_value_id: this.props.product_option_value_id,
            quantity: this.state.quantity + 1
        });
    }

    render() {
        return (
            <div className="option-card">
                <span className="name">
                    {this.props.option.option_value_name}
                </span>
                <span className="price">${this.props.option.price}</span>
                {this.state.quantity > 0 ? (
                    <div className="quantity-control-pannel">
                        <i onClick={this.decrease} className="material-icons">
                            remove
                        </i>
                        <span className="quantity">{this.state.quantity}</span>
                        <i onClick={this.increase} className="material-icons">
                            add
                        </i>
                    </div>
                ) : (
                    <div className="quantity-control-pannel">
                        <i onClick={this.increase} className="material-icons">
                            add
                        </i>
                    </div>
                )}
            </div>
        );
    }
}
