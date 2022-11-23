<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Product;
use Validator;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
   
class InstagramController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //user data
        Cache::remember('user-data-ig-' . Request()->username, 60*60*24, function(){
            $input = Request()->username;
            $response = Http::withHeaders(
                [
                    'X-RapidAPI-Host' => 'instagram188.p.rapidapi.com',
                    'X-RapidAPI-Key' => '9c4cff68bamsh25eb854cd5fd8fbp1e6637jsn75a624fe44c2'
                ]
            )->get("https://instagram188.p.rapidapi.com/userinfo/" . $input);
            return $response->json('data');
        });
        
        $user = Cache::get('user-data-ig-' . Request()->username);
        if($user == 'Not Found Username'){
            return $this->sendError('username not found');
            exit();
        }
        else if($user == null){
            return $this->sendError('Cannot Find Data');
            exit();
        }
        else{
            $userData['id'] = $user['id'];
            $userData['profile_pic'] = $user['profile_pic_url_hd'];
            $userData['verified'] = $user['is_professional_account'];
            $userData['fullname'] = $user['full_name'];
            $userData['username'] = $user['username'];
            $userData['biography'] = $user['biography'];
            $userData['bio_url'] = $user['external_url'];
            $userData['follower'] = $user['edge_followed_by']['count'];
            $userData['following'] = $user['edge_follow']['count'];
            $userData['total_post'] = $user['edge_owner_to_timeline_media']['count'];
            
            // user data post
            Cache::remember('user-video-ig-' . Request()->username, 60*60*24, function() use ($userData){
                $input = $userData['id'];
                $response = Http::withHeaders(
                    [
                        'X-RapidAPI-Host' => 'instagram188.p.rapidapi.com',
                        'X-RapidAPI-Key' => '9c4cff68bamsh25eb854cd5fd8fbp1e6637jsn75a624fe44c2'
                    ]
                )->get("https://instagram188.p.rapidapi.com/userpost/". $input ."/50/%7Bend_cursor%7D" );
                return $response->json('data.edges');
            });

            $video = Cache::get('user-video-ig-' . Request()->username);
            if($video == null){
                return $this->sendError('Cannot Find Data');
                exit();
            }
            $userVideo = array();
            for($i=0;$i<count($video);$i++){
                $userVideo[$i] = array(
                    'id_post' => $video[$i]['node']['id'],
                    'thumbnail' => $video[$i]['node']['display_url'],
                    'is_video' => $video[$i]['node']['is_video'],
                    'comment_count' => $video[$i]['node']['edge_media_to_comment']['count'],
                    'like_count' => $video[$i]['node']['edge_media_preview_like']['count'],
                    'createdAt' => gmdate("l, d F Y H:i:s",$video[$i]['node']['taken_at_timestamp'])

                );
                if($video[$i]['node']['is_video'] == true){
                    $userVideo[$i]['video_view_count'] = $video[$i]['node']['video_view_count'];
                }
                else{
                    $userVideo[$i]['video_view_count'] = null;

                } 

                if(isset($video[$i]['node']['edge_media_to_caption']['edges'][0]['node']['text'])){
                    $userVideo[$i]['caption'] = $video[$i]['node']['edge_media_to_caption']['edges'][0]['node']['text'];
                }
                else{
                    $userVideo[$i]['caption'] = null;

                }
            }
        }

        $result = array(
            'user' => $userData, 
            'video' => $userVideo
        );

        return $this->sendResponse($result, 'Products retrieved successfully.');
    }
}