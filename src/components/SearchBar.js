import React, { Component } from 'react'
import './SearchBar.css';

import axios from "axios";

import { search } from "./utils";
import Movies from "./Movies";



//function SearchBar() {
class SearchBar extends Component {  

  state = {
    movies: null,
    loading: false,
    value: ""
  };

/*
  search = async val => {
    this.setState({ loading: true });
    const results = await search(
      `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
    );
    const movies = results;

    this.setState({ movies, loading: false });
  };
  */



   onChangeHandler = async e => {
    this.setState({ loading: true });
    const searchTerm = e.target.value;
    this.setState({ value: e.target.value });
    const results = await axios.get(
      `http://127.0.0.1:8000/api/search/${e}/${e}`
    )

    const movies = results;

    this.setState({ movies, loading: false });
    //console.log("Results for " + searchTerm + ": " + results.data);
    //console.log(JSON.stringify(results.data));
  }
  


/*
  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  */

  get renderMovies() {
    let movies = <h1>There's no movies</h1>;
    if (this.state.movies) {
      movies = <Movies list={this.state.movies} />;
    }

    return movies;
  };

  render() {
  return (
    <>
    <div className="dropdown">
  <div id="myDropdown" className="dropdown-content">
    <input 
    type="text" 
    placeholder="All categories.."
    value={this.state.value}
    onChange={e => this.onChangeHandler(e)}
    id="myInput" />
    <input 
    type="text" 
    placeholder="Location.." 
    id="myInput" />
    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Search Now</button>
  </div>
  <p><b>Find now in Kerala: </b>Wedding Photographers, Bridal Makeup, Venues, Catering, Honeymoon...</p>
</div>
{this.renderMovies}
    </>
  )
}
}

export default SearchBar