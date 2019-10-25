import React from "react";
import axios from "axios";
import Movie from "./Movie";
import { directive } from "@babel/types";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // axios may be slow so need to tell wait a second till DidMount function finish to JS.
  // async ~ await: wait till axios.get() function finish.
  getMovies = async () => {
    const {
      // a.b.c = {a: {b: {c}}}
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // this.setState({movies:movies}); -> movies from state: movies from axios
    this.setState({ movies, isLoading: false });
  };

  // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  componentDidMount() {
    this.getMovies();
  }

  render() {
    // 아래 코드는 {this.state.isLoading ? "Loading..." : "We are ready"}와 동일하다.
    // const { isLoading } = this.state; -> Get me this.state status.
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
