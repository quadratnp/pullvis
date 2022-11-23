<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Product;
use Validator;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Http;
   
class FacebookController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Http::get(
            "https://graph.facebook.com/v14.0/me?fields=id,name,accounts{id,about,name,picture,followers_count,new_like_count,access_token}&access_token=".Request()->access_token
        );

        return $this->sendResponse($result->json(), 'Products retrieved successfully.');
    }
}