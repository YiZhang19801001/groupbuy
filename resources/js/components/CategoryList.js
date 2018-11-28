import React, { Component } from "react";
import axios from "axios";

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = { fake_categoryList: [] };
    }

    componentDidMount() {
        axios.get("/groupbuy/public/api/getcategories").then(res => {
            this.setState({ fake_categoryList: res.data });
        });
    }

    render() {
        return (
            <div className="category-list">
                {this.state.fake_categoryList.map(category => {
                    return (
                        <div
                            key={category.category_id}
                            className="category-list-item"
                        >
                            {category.category_name}
                        </div>
                    );
                })}
            </div>
        );
    }
}
