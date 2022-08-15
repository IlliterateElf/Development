import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiKey: "6640078bed1c57de87f118d7a89399d3",
            movies: []
        }
    }

    render() {
        return (
            <div className="m-2">
                <h4>Home</h4>
            </div>
        )
    }

    componentDidMount = async () => {
        let response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=6640078bed1c57de87f118d7a89399d3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate",
            { method: "GET" });
        let query = await response.json();
        this.setState({ movies: query });
        console.log(this.state.movies);
    }
}