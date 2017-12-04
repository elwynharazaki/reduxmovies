import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import MovieDetail from './MovieDetail';
import * as actions from './../actions';

class MovieList extends Component {
   componentWillMount() {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=eea85db15baebd083012741bef30dd93&language=en-US&page=1')
      .then((response) => {
         this.props.getMovie(response.data.results);
      });
   }

   render() {
      console.log(this.props.movies);
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      
      this.movieData = ds.cloneWithRows(this.props.movies);

      return (
         <ListView
            dataSource={this.movieData}
            enableEmptySections
            renderRow={(movie) =>
               <MovieDetail key={movie.id} mainMovie={movie} />
            }
         />
      );
   }
}

const mapStateToProps = (state) => {
   return {
      movies: state.movies
   };
};

export default connect(mapStateToProps, actions)(MovieList);
