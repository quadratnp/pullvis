<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Cache;
use Validator;
use Illuminate\Support\Facades\Http;
   
class TiktokController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //user data
        Cache::remember('user-data-tiktok-' . Request()->username, 60*60*24, function(){
            $input = Request()->username;
            $response = Http::withHeaders(
                [
                    'X-RapidAPI-Host' => 'tiktok-best-experience.p.rapidapi.com',
                    'X-RapidAPI-Key' => '9c4cff68bamsh25eb854cd5fd8fbp1e6637jsn75a624fe44c2'
                ]
            )->get("https://tiktok-best-experience.p.rapidapi.com/user/" . $input);
            return $response->json('data');
        });  
        $value_user = Cache::get('user-data-tiktok-' . Request()->username);
        if($value_user == null){
            return $this->sendError('Cannot Find Data');
            exit();
        }
        $userData['id_user'] =  $value_user['uid'];
        $userData['profile_pic'] = $value_user['avatar_larger']['url_list'][1];
        $userData['full_name'] = $value_user['nickname'];
        $userData['username'] =  $value_user['unique_id'];
        $userData['biography'] =  $value_user['signature'];
        if(isset($value_user['bio_url'])){
            $userData['bio_url'] = $value_user['bio_url'];
        }
        $userData['following'] =  $value_user['following_count'];
        $userData['follower'] =  $value_user['follower_count'];
        $userData['total_like'] =  $value_user['total_favorited'];
        $userData['total_post'] = $value_user['aweme_count'];

        //user data video
        Cache::remember('user-video-tiktok-' . Request()->username, 60*60*24, function(){
            $input = Request()->username;
            $response = Http::withHeaders(
                [
                    'X-RapidAPI-Host' => 'tiktok-scraper2.p.rapidapi.com',
                    'X-RapidAPI-Key' => '9c4cff68bamsh25eb854cd5fd8fbp1e6637jsn75a624fe44c2'
                ]
            )->get("https://tiktok-scraper2.p.rapidapi.com/user/videos?user_name=" . $input);
            return $response->json('itemList');
        });

        $value_video = Cache::get('user-video-tiktok-' . Request()->username);
        if($value_video == null){
            return $this->sendError('Cannot Find Data');
            exit();
        }
        $userVideo = array();
        for($i=0;$i<count($value_video);$i++){
            $userVideo[$i] = array(
                'id_video' => $value_video[$i]['id'],
                'thumbnail' => $value_video[$i]['video']['cover'],
                'caption' => $value_video[$i]['desc'],
                'like_count' => $value_video[$i]['stats']['diggCount'],
                'share_count' => $value_video[$i]['stats']['shareCount'],
                'comment_count' => $value_video[$i]['stats']['commentCount'],
                'createdAt' => gmdate("l, d F Y H:i:s", $value_video[$i]['createTime'])
            );
        }

        $result = array(
            'user' => $userData, 
            'video' => $userVideo
        );


        return $this->sendResponse($result, 'Data retrieved successfully.');
    }
}