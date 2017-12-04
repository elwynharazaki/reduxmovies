import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import Card from './common/Card';
import CardSection from './common/CardSection';
import * as actions from './../actions';

class MovieDetail extends Component {
	onTitlePressed = () => {
      this.props.selectMovie(this.props.mainMovie.id);
   };

   renderMovieDetail() {
      if (this.props.selectedMovieId === this.props.mainMovie.id) {
         return (
            <View>
               <Card>
                  <CardSection>
                     <Image
                        style={{ height: 400, flex: 1 }}
                        source={{ uri: `https://image.tmdb.org/t/p/w500${this.props.mainMovie.poster_path}` }}
                     />
                  </CardSection>
                     
                  <CardSection>
                     <View>
                        <Text style={styles.dateTextStyle}>{this.props.mainMovie.overview}</Text>
                     </View>
                  </CardSection>
               </Card>
            </View>
         );
      }
   }

   render() {
      return (
            <Card>
               <CardSection>
                  <View>
                     <Image
                        style={{ width: 130, height: 75 }}
                        source={{ uri: `https://image.tmdb.org/t/p/w500${this.props.mainMovie.backdrop_path}` }}
                     />
                  </View>
                  
                  <View style={styles.headerContentStyle}> 
                     <TouchableOpacity onPress={this.onTitlePressed.bind(this)}>
                        <Text style={styles.titleTextStyle}>{this.props.mainMovie.title}</Text>
                     </TouchableOpacity>
                        <Text style={styles.dateTextStyle}>
                        Release: {this.props.mainMovie.release_date}
                        </Text>
                        <Text style={styles.dateTextStyle}>
                        Ratings: {this.props.mainMovie.vote_average}
                        </Text>
                  </View>
               </CardSection>
               {this.renderMovieDetail()}
            </Card>
      );
   }
}

const styles = {
   dateTextStyle: {
		color: '#85A4AF',
		fontSize: 14,
		padding: 2
   },

   headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		paddingLeft: 10
	},
	
	titleTextStyle: {
		color: '#EAF9FF',
		fontSize: 14,
		padding: 1,
		fontWeight: 'bold'
   }
};

const mapStateToProps = (state) => {
   return {
      selectedMovieId: state.selectedMovieId
   };
};

export default connect(mapStateToProps, actions)(MovieDetail);
