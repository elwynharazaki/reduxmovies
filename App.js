import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './src/components/common/Header';
import reducer from './src/reducers';
import MovieList from './src/components/MovieList';

const App = () => {
	return (
		<Provider store={createStore(reducer)}>
			<View style={{ flex: 1, backgroundColor: '#010709' }}>
            <StatusBar
               barStyle='light-content'
               backgroundColor='transparent'
               translucent
            />
            <Header />
				<MovieList />
			</View>
		</Provider>
  );
};

export default App;
