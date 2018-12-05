import React, { Component } from "react";

import ChoiceGroup from "./ChoiceGroup";
import OptionGroup from "./OptionGroup";

export default class ChoicePannel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {},
            choices: [],
            options: [],
            shoppingCartList: []
        };

        this.setChoice = this.setChoice.bind(this);
        this.setOption = this.setOption.bind(this);
        this.close = this.close.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        this.setState({
            shoppingCartList: this.props.shoppingCartList,
            product: {
                name: this.props.product.name,
                price: this.props.product.price,
                product_id: this.props.product.product_id
            }
        });
    }

    setChoice(choice) {
        let flag = true;
        for (let index = 0; index < this.state.choices.length; index++) {
            if (this.state.choices[index].type === choice.type) {
                this.state.choices[index] = choice;
                this.flag = false;
                break;
            }
        }
        if (flag) {
            this.state.choices.push(choice);
        }
    }

    setOption(option) {
        let flag = true;
        for (let index = 0; index < this.state.options.length; index++) {
            if (this.state.options[index].type === option.option_value_name) {
                this.state.options[index] = option;
                this.flag = false;
                break;
            }
        }
        if (flag) {
            this.state.options.push(option);
        }
    }

    addToCart() {
        // todo:: check the existing list to determin add quantity or add new rows
        let orderItem = this.state.product;

        orderItem.choices = this.state.choices;
        orderItem.options = this.state.options;
        orderItem.quantity = 1;

        this.state.shoppingCartList.push(orderItem);

        this.props.updateShopCartList(this.state.shoppingCartList);
        this.props.setChoicePannelStatus(false);
    }

    close() {
        this.props.setChoicePannelStatus(false);
    }
    render() {
        return (
            <div className="choice-pannel">
                <div onClick={this.close} className="header">
                    <i className="material-icons hidden">close</i>
                    <span>选规格</span>
                    <i className="material-icons">close</i>
                </div>
                <div className="description">
                    <span className="description-img-wrapper">
                        <img
                            src={`/groupbuy/public${this.props.product.image}`}
                            alt=""
                        />
                    </span>
                    <span className="text-infos">
                        <span>{this.props.product.name}</span>
                    </span>
                </div>
                <div>
                    {this.props.product.choices.map((choice, index) => {
                        return (
                            <ChoiceGroup
                                key={`${choice.type}${index}`}
                                choice={choice}
                                setChoice={this.setChoice}
                            />
                        );
                    })}
                    {this.props.product.options.map((option, index) => {
                        return (
                            <OptionGroup
                                key={`${option.name}${index}`}
                                option={option}
                                setOption={this.setOption}
                            />
                        );
                    })}
                </div>
                <div onClick={this.addToCart} className="footer">
                    <span>加入购物车</span>
                </div>
            </div>
        );
    }
}
