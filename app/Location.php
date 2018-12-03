<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $table = "oc_location";
    protected $primarykey = "location_id";
    public $timestamps = false;
}
