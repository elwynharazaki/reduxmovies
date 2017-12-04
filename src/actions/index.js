const getMovie = (movieList) => {
   console.log(movieList);
   return {
      type: 'GET',
      payload: movieList
   };
};

const selectMovie = (id) => {
   return {
      type: 'SELECT',
      payload: id
   };
};

export { getMovie, selectMovie };
