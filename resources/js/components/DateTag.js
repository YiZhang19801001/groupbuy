import React, { Component } from "react";

export default class TimeTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagClass: ""
        };
    }
    componentDidMount() {
        const dt = new Date();
        const propsDt = new Date(this.props.validDate);
        const diffMonth = propsDt.getMonth() - dt.getMonth();
        const diffDays = diffMonth * 30 + propsDt.getDay() - dt.getDay();
        const tagClass = diffDays < 7 ? "tag-red" : "tag-green";
        this.setState({ tagClass: tagClass });
    }
    render() {
        return (
            <span className={this.state.tagClass}>{this.props.validDate}</span>
        );
    }
}
