import React, { Component } from "react";

export default class ChoiceGroup extends Component {
    constructor(props) {
        super(props);
        this.setChoice = this.setChoice.bind(this);
    }

    setChoice(e) {
        let pickedChoice = {};
        pickedChoice.name = this.props.choice.type;
        pickedChoice.value = e.target.value;
        this.props.setChoice(pickedChoice);
    }

    render() {
        return (
            <div className="choice-group">
                <div className="header1">{this.props.choice.type}</div>
                <div className="choices">
                    {this.props.choice.choices.map((item, index) => {
                        return (
                            <label
                                key={`choicegrouplabel${index}`}
                                className="radio-container"
                            >
                                <input
                                    key={`choicegroupinput${index}`}
                                    type="radio"
                                    onChange={this.setChoice}
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
