<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ValueController extends Controller
{

    public function getProducts(){
        return response()->json(array(
            array(
                "category_id"=>1,
                "category_name"=>"家常菜",
                "products"=>array(
                    [
                        "product_id"=> 1,
                        "product_name"=> "招牌羊蝎子",
                        "product_description"=> "老北京回民特色菜",
                        "product_price"=> "$19.77",
                        "img_url"=> "/groupbuy/public/images/product.png",
                        "product_sold"=>999
                    ],
                    [
                        "product_id"=> 2,
                        "product_name"=> "上海红烧肉",
                        "product_description"=> "甜口非凉菜",
                        "product_price"=> "$25.89",
                        "img_url"=> "/groupbuy/public/images/product.png",
                        "product_sold"=>999
                    ],
                    [
                        "product_id"=> 3,
                        "product_name"=> "四川回锅肉",
                        "product_description"=> "20年川菜大师独家秘制",
                        "product_price"=> "$21.19",
                        "img_url"=> "/groupbuy/public/images/product.png",
                        "product_sold"=>999
                    ],
                    [
                        "product_id"=> 4,
                        "product_name"=> "宫保鸡丁",
                        "product_description"=> "可调辣度，甜度",
                        "product_price"=> "$18.83",
                        "img_url"=> "/groupbuy/public/images/product.png",
                        "product_sold"=>999
                    ],
                    [
                        "product_id"=> 5,
                        "product_name"=> "鱼香肉丝",
                        "product_description"=> "下饭极品",
                        "product_price"=> "$18.83",
                        "img_url"=> "/groupbuy/public/images/product.png",
                        "product_sold"=>999
                    ],
                    [
                        "product_id"=> 6,
                        "product_name"=> "辣子鸡丁",
                        "product_description"=> "可调辣度，麻度",
                        "product_price"=> "$19.77",
                        "img_url"=> "/groupbuy/public/images/product.png",
                        "product_sold"=>999
                    ]
                )
            )
        ),200);
    }

    public function getCategories(){
        return  response()->json([
                ["category_id"=> 1, "category_name"=> "家常菜"],
                [ "category_id"=> 2, "category_name"=> "特色小吃"],
                [ "category_id"=> 3, "category_name"=>"汤羹" ],
                [ "category_id"=> 4, "category_name"=> "特色套饭" ],
                [ "category_id"=> 5, "category_name"=> "凉拌菜" ],
                [ "category_id"=> 6, "category_name"=> "砂锅" ],
                [ "category_id"=> 7, "category_name"=> "汤面/干面/水饺/馄饨" ],
                [ "category_id"=> 8, "category_name"=> "炒面" ]
            ],200);
    }

    public function getShops($product_id){
        /** find the shop which are sold select items */

        // 1. show have a bridge table like shop_product get all shop ids for products
        // 2. pick all shops in an array

        $valid_dates = ["12/10", "11/25"];
        $fake_shops = [
            [
                "shop_id"=>"1",
                "name"=> "天府川菜馆 South Yarra旗舰店",
                "distance"=> "393米",
                "address"=>"176 Toorak Road, South Yarra，VIC 3141",
                "phone"=>"03-9078 1686",
                "image_url"=> "/groupbuy/public/images/shop_1.png",
                "valid_date"=> $valid_dates
            ],
            [
                "shop_id"=>"2",
                "name"=> "天府川菜馆 Glen Waverley分店",
                "distance"=> "393米",
                "address"=>"25 Railway Parade North, Glen Waverley, VIC 3150",
                "phone"=>"03-9887 8686",
                "image_url"=> "/groupbuy/public/images/shop_2.png",
                "valid_date"=> $valid_dates
            ],
            [
                "shop_id"=>"3",
                "name"=> "天府精品火锅 Box Hill分店",
                "distance"=> "393米",
                "address"=>"Level 1, 2A Cambridge Street, Box Hill, VIC 3128",
                "phone"=>"03-9041 4318",
                "image_url"=> "/groupbuy/public/images/shop_3.png",
                "valid_date"=> $valid_dates
            ],
            [
                "shop_id"=>"4",
                "name"=> "天府川菜馆 South Yarra旗舰店",
                "distance"=> "393米",
                "address"=>"149 Lonsdale Street, Melbourne, VIC 3000",
                "phone"=>"03-9662 2019",
                "image_url"=> "/groupbuy/public/images/shop_4.png",
                "valid_date"=> $valid_dates
            ]
        ];
        //create container
        $shops = array();
        // shop_id hasMany({product_id,product_sold})
        $fake_shop_product_table = [
            "1"=>[["1",222],["2",222],["3",222]],
            "2"=>[["2",333],["3",333],["4",333]],
            "3"=>[["3",444],["4",444],["5",444]],
            "4"=>[["4",555],["5",555],["6",555]]
        ];
        foreach ($fake_shop_product_table as $key => $value) { //["product_id","sold in this shop"]
            foreach ($value as $item) {
                if($item[0]==$product_id){ // if product_id match
                    foreach($fake_shops as $shop){ // found shop
                        if($shop["shop_id"]==$key)
                        {
                            $shop["sold"]=$item[1]; // add one property to shop obj
                            array_push($shops,$shop);
                        }
                    }

                }
            }

        }

        return response()->json($shops,200);

    }
}
