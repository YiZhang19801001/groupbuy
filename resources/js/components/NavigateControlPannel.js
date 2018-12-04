import React, { Component } from "react";

export default class NavigateControlPannel extends Component {
    
    constructor(props){
        super(props);

        this.setChoicePannelStatus = this.setChoicePannelStatus.bind(this);
    }

    setChoicePannelStatus(){
        this.props.setChoicePannelStatus(true);
    }

    render() {
        return <div onClick={this.setChoicePannelStatus} className="navigate-control-pannel">选规格</div>;
    }
}
