<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\ProductDescription;
use App\ProductToCategory;
use App\CategoryDescription;
use App\Product;
use App\ProductExt;
use App\ProductAddType;
use App\OptionDescription;
use App\OptionValue;
use App\OptionValueDescription;
use App\ProductOptionValue;

class ProductController extends Controller
{
    /**
     * get all products with option and ext (if appliable)
     * @ params - $lang [1-en, 2-cn]
     * @ url - 'api/getproducts'
     */

     public function getProducts($lang)
     {
        /** get all categorries first, cause products need group by categories */
        $categories = array(); // categories query result container

        // fetch category_descriptions from database only category is needed
        $category_ids = CategoryDescription::select('category_id')->distinct()->get();

        /** create returning result */
        foreach ($category_ids as $category_id) {
            /** fetch category information for certain language, if no record in this language return anything get first */
            $category_in_db = CategoryDescription::where('category_id',$category_id->category_id)->where('language_id',$lang)->first();
            if($category_in_db==null){
                $category_in_db = CategoryDescription::where('category_id',$category_id->category_id)->first();
            }

            $category["category_id"] = $category_in_db->category_id;
            $category["name"] = $category_in_db->name;

            array_push($categories,$category);
        }

        /** start creating result which is all products group by category */
        $result = array(); // result container

        foreach ($categories as $category) {
            $new_category["name"]   = $category["name"];
            $new_category["id"]     = $category["category_id"];

            $p_ids = ProductToCategory::where('category_id',$category["category_id"])->get();
            $products_groupby_category=[];

            foreach ($p_ids as $id) {
                /** select the target product in DB then map the need value to new_product */

                //select target product in DB
                $target_product = ProductDescription::where('product_id',$id->product_id)->where('language_id',$lang)->first();
                if($target_product === null){
                    $target_product = ProductDescription::where('product_id',$id->product_id)->first();
                }
                /** create price value*/
                //fetch price first
                $p = Product::where('product_id',$id->product_id)->first();
                $price = $p->price;
                //cut after 2 digts decimal point, i.e 1.0000000 -> 1.00
                $posOfdecimal = strpos($price,".");
                $length = $posOfdecimal + 3;
                $price = substr($price,0,$length);
                /** end of create price value */

                //map values to product
                $new_product["product_id"]    = $target_product->product_id;
                $new_product["name"]          = $target_product->name;
                $new_product["price"]         = $price;
                $new_product["image"]         = $p->image;
                $new_product["sold"]          = $p->sold_quantity;
                //details only needed for show options mode

                $new_product["choices"]       = $this->getChoicesHelper($target_product->product_id,$lang);
                $new_product["options"]       = $this->getOptionsHelper($target_product->product_id,$lang);


                //save new product to certain group depending on category name
                array_push($products_groupby_category,$new_product);
            }

            /** save products which are grouped by category in the foreach loop already */
            $product_group = ["categorys"=>$new_category,"products"=>$products_groupby_category];
            array_push($result,$product_group);
        }

        //return the result to client side
        return response()->json([
            "products" => $result
        ], 200);

     }

     public function getChoicesHelper($id,$lang)
    {
        /**this is the returning result */
        $choices_groupby_type=array();

        /** find out all types for certain product */
        $typeIds_to_product = ProductExt::where('product_id',$id)->select('type')->distinct()->get();//return array(obj)

        //Fix Lang:
        foreach ($typeIds_to_product as $typeId_to_product) {
            $choices = array();
            /**oc_product_add_type: [add_type_id:int] [name:string][type:bit][required:bit][checkbox:bit] */
            $choice = ProductAddType::where('add_type_id',$typeId_to_product->type)->where('language_id',$lang)->first();
            /**oc_product_ext: [product_ext_id:int][product_id:int][type:int][name:string][price:float] */
            $choices_to_type = ProductExt::where('product_id',$id)->where('type',$choice["add_type_id"])->get();

            foreach ($choices_to_type as $choice_to_type) {
                $choices_item["product_ext_id"] = $choice_to_type["product_ext_id"];
                $choices_item["name"]           = $choice_to_type["name"];
                $choices_item["price"]          = $choice_to_type["price"];
                array_push($choices,$choices_item);
            }

            /**map value */
            $new_choice["type_id"]    = $typeId_to_product["type"];
            $new_choice["type"]       = $choice["name"];
            $new_choice["choices"]    = $choices;

            array_push($choices_groupby_type,$new_choice);
        }

        return $choices_groupby_type;
    }

    public function getOptionsHelper($id,$lang)
    {
        /** overview
         * 1. use product id found all records in oc_product_option_value [option_id,option_value_id]
         * 2. option_id found option_name
         * 3. option_value_id found option_value_name
         * 4. should output an array
        */

        /** this is result container */
        $productOptionList = array();


        /**oc_product_option_value(many cols only short list here):
         * [product_option_value_id:int][product_option_id:int][product_id:int][option_id:int]
         * [option_value_id:int][price:float ex:1.0000]
         * ??::[display:bit]
          */
        $productOptionValueList = ProductOptionValue::where('product_id',$id)->get();

        $option_ids = ProductOptionValue::where('product_id',$id)->select('option_id')->distinct()->get();

        /** create option details */
        foreach ($option_ids as $option_id) {
            /**add option name & language_id,sort_order to the obj
             * oc_option_description: [option_id:int][language_id:bit][name:string]
            */
            $option_name = OptionDescription::where('option_id',$option_id->option_id)->where('language_id',$lang)->first();
            $option_name = $option_name["name"];

            /**ToDo: may use for display*/
            // $sort_order = Option::where('option_id',$option_id)->first()->sort_order;

            /**create option value group */
            $option_value_group = array();

            foreach ($productOptionValueList as $product_option_value) {

                if($product_option_value->option_id === $option_id->option_id){
                    /**add option_value name, sort_order to the obj */
                    $option_value_id = $product_option_value->option_value_id;

                    /** oc_option_value:[option_value_id:int][option_id:int][image:varchar(255)	][sort_order:int(3)]*/
                    /**ToDo: may use for display*/
                    // $option_value_sort_order = Option_value::where('option_value_id',$option_value_id)->first()->sort_order;

                    /** oc_option_value_description
                     * [option_value_id:int(11)][language_id:int(11)][option_id:int(11)][name:varchar(128)]
                    */
                    $option_value_name = OptionValueDescription::where('option_value_id',$option_value_id)->where('language_id',$lang)->first();

                    $option_value_name = $option_value_name["name"];
                    /** create price
                     * parse price to float */
                    $price = $product_option_value->price;
                    $posOfdecimal = strpos($price,".");
                    //cut after 2 digts decimal point
                    $length = $posOfdecimal + 3;
                    $price = substr($price,0,$length);

                    //map values
                    $new_option_value=array();

                    $new_option_value["product_option_value_id"] = $product_option_value->product_option_value_id;
                    $new_option_value["option_value_name"]       = $option_value_name;
                    //$new_option_value["option_value_sort_order"] = $option_value_sort_order;
                    $new_option_value["price"]                   = $price;

                    array_push($option_value_group,$new_option_value);
                    /** object structure
                     * [
                     *   {
                     *       "product_option_value_id": 22,
                     *       "option_value_name": "Small",
                     *       "option_value_sort_order": 0,
                     *       "price": "2.00"
                     *   }
                    ] */
                }
            }

            /**add new option with value group to array */
            $new_productOption = array("option_id"=>$option_id,"option_name"=>$option_name,"option_values"=>$option_value_group);

            array_push($productOptionList,$new_productOption);
        }

        /** return manipulated data for further use */
        return $productOptionList;
    }


}
