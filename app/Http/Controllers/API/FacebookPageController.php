<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use Illuminate\Support\Facades\Http;
   
class FacebookPageController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Http::get(
            "https://graph.facebook.com/v14.0/".Request()->page_id."/feed?fields=permalink_url,attachments,likes,comments,reactions,shares&access_token=".Request()->access_token
        );


        return $this->sendResponse($result->json(), 'Products retrieved successfully.');
    }
}