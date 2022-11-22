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
"https://pullvis.herokuapp.com/api/facebook?access_token=EAAeFSQsSGnEBADynNmKHsilVMyYB6hsOXMZA2zkq4NBG2ZB8ciPI9s3Mo12JktKBColWFHSnm1INdrxr16PMqNe46tZBppl5QGKjUjkR1J7RejaGkcDFZCqSOoFU76SPqA1bQZBBhQOcZC0mJ0lsBLqs0N7Jfz8J7ZCcHZCNSDE3kRaZB8A4AIHnzd1JssiNTmEoZD")
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
            <h1>Fetch data user</h1>{
                <ol>
                    <li>id : {items.data.id}</li>
                    <li>name : {items.data.name}</li>
                </ol>
            }
			<h1> Fetch data from an api in react </h1> {
                items.data.accounts.data.map((item)=>(
                    <>
                        <p>name page: {item.name}</p>
                        <p>about: {item.about}</p>
                        <p>followers count : {item.followers_count}</p>
                        <p>like count : {item.new_like_count}</p>
                        <img src={item.picture.data.url} />
                    </>
                ))
			}
            {console.log(items.data.accounts.data)}
		</div>
	    );
    }
}

export default index;