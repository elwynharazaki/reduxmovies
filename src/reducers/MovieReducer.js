const MovieReducer = (state = [], action) => {
   console.log(action)
   switch (action.type) {
      case 'GET':
      console.log('GET TRIGGERED', action);
         return action.payload;
      default:
      console.log('default');
         return state;
   }
};

export default MovieReducer;
