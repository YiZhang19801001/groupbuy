import React, { Component } from "react";

export default class ValidDate extends Component {
    constructor(props) {
        super(props);

        this.state = { date: {}, isActive: false };
        this.selecting = this.selecting.bind(this);
    }

    componentDidMount() {
        const status = this.props.index == this.props.selectIndex;
        this.setState({ date: this.props.date, isActive: status });
    }

    componentWillReceiveProps(newProps) {
        const status = newProps.index == newProps.selectIndex;
        this.setState({ date: newProps.date, isActive: status });
    }

    selecting() {
        this.props.setDateIndex(this.props.index);
        this.props.pickupDate(this.state.date);
    }

    render() {
        return (
            <div
                onClick={this.selecting}
                className={`valid-date${this.state.isActive ? " active" : ""}`}
            >
                <span>{this.state.date.times}</span>
            </div>
        );
    }
}
