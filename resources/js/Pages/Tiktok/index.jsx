import React from "react";
class index extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://pullvis.herokuapp.com/api/tiktok?username=iben_ma")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
            <h1>User Data</h1>
            <p>id user : {items.data.user.id_user}</p>
            <p>foto profil : <img src={items.data.user.profile_pic} alt="" /></p>
            <p>full name : {items.data.user.full_name}</p>
            <p>username : {items.data.user.username}</p>
            <p>bio : {items.data.user.biography} <a href={items.data.user.bio_url} target='_blank'>{items.data.user.bio_url}</a></p>
            <p>follower : {items.data.user.follower}</p>
            <p>following : {items.data.user.following}</p>
            <p>total like : {items.data.user.total_like}</p>
            <p>total post : {items.data.user.total_post}</p>

            <h1>User Video</h1>
            <h4>hanya 30 video terakhir</h4>{
            items.data.video.map((item)=>(
                    <>
                        <p>id video : {item.id_video}</p>
                        <p>thumbnail : <img src={item.thumbnail} /></p>
                        <p>caption : {item.caption}</p>
                        <p>like : {item.like_count}</p>
                        <p>comment count : {item.comment_count}</p>
                        <p>share count : {item.share_count}</p>
                        <p>dibuat pada tanggal : {item.createdAt}</p>
                    </>
                ))
            }            
		</div>
	    );
    }
}

export default index;