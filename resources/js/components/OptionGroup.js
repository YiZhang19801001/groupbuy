import React, { Component } from "react";

import OptionCard from "./OptionCard";
export default class OpitonGroup extends Component {
    constructor(props) {
        super(props);

        this.state = { quantity: 0 };
    }

    componentDidMount() {
        //console.log("option in props: ", this.props.option);
    }

    render() {
        return (
            <div className="option-group">
                <div className="header1">{this.props.option.option_name}</div>
                <div className="options">
                    {this.props.option.option_values.map((option, index) => {
                        return (
                            <OptionCard
                                key={`${
                                    this.props.option.option_value_name
                                }${index}`}
                                option={option}
                                setOption={this.props.setOption}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
