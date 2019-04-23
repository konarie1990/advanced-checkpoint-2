import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  padding: 50px;
`;

const MovieList = props => (
  <Wrapper>
    <h3>Available Movies</h3>
    {props.movies.map((movie, index) => (
      <p key={index}>
        {movie.movieName} &nbsp;
        <Link to={`/movies/${movie._id}`}>details</Link>
      </p>
    ))}
  </Wrapper>
);

MovieList.propTypes = {
  movie: PropTypes.array
};

export default MovieList;

// * Create a function component that list out a collection of your models (ListOfUsers)
//     * Use prop types to define what props the component needs
//     * It should probably need a prop named after the plural of your model, and it should probably be an array
//     * Probably want to map over this array and create some divs or li’s showing 3 of the properties of the item
//     * Create a Link on each item so you can navigate to the detail page
//     * Create a button on each item so you can delete the item
