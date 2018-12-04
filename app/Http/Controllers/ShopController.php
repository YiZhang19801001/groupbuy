<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Location;
use App\ShopTime;


class ShopController extends Controller
{
    /**
     * fetch all available shop with date to the confirm page, let customer pick up as a pick up address
     * @param $lang - language code 1 = en 2 = cn
     */
    public function getShops($lang){
        /** 1. fetch shop
         * 2. append details to the shop
         * 3. every shop + date is a row
         */

        $shops = Location::select('location_id','name','address','telephone','image')->get();

        $result = array(); // result container

        foreach ($shops as $shop) {

            $shopTimes = ShopTime::where('location_id',$shop['location_id'])->select('location_id','times')->get();
                $shopWithDate["shop_id"] = $shop['location_id'];
                $shopWithDate["name"]=$shop["name"];
                $shopWithDate["address"]=$shop["address"];
                $shopWithDate["phone"]=$shop["telephone"];
                $shopWithDate["image_url"]=$shop["image"];
                $shopWithDate["valid_date"]=$shopTimes;

                array_push($result,$shopWithDate);
        }

        return response()->json(["shop_with_date"=>$result],200);


    }
}
