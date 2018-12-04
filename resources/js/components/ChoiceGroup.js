import React, { Component } from "react";

export default class ChoiceGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="choice-group">
                <div className="header1">{this.props.choice.type}</div>
                <div className="choices">
                    {this.props.choice.choices.map((item, index) => {
                        return (
                            <label className="radio-container">
                                <input
                                    key={`${this.props.choice.type_id}${index}`}
                                    type="radio"
                                    name={this.props.choice.type}
                                    value={item.name}
                                />
                                <span className="check-mark-wrapper">
                                    <span className="check-mark">
                                        {item.name}
                                    </span>
                                </span>
                            </label>
                        );
                    })}
                </div>
            </div>
        );
    }
}
