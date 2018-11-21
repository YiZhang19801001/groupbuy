import React, { Component } from "react";

export default class CategoryList extends Component {
    render() {
        const fake_categoryList = [
            { category_id: 1, category_name: "家常菜" },
            { category_id: 2, category_name: "特色小吃" },
            { category_id: 3, category_name: "汤羹" },
            { category_id: 4, category_name: "特色套饭" },
            { category_id: 5, category_name: "凉拌菜" },
            { category_id: 6, category_name: "砂锅" },
            { category_id: 7, category_name: "汤面/干面/水饺/馄饨" },
            { category_id: 8, category_name: "炒面" }
        ];
        return (
            <div className="category-list">
                {fake_categoryList.map(category => {
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
