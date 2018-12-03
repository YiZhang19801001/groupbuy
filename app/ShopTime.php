<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShopTime extends Model
{
    protected $table = "oc_shop_time";
    protected $primarykey = "shop_time_id";
    public $timestamps = false;
}
