import React from 'react';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import List from 'src/containers/List/List';
import './App.scss';

const App = () => {
	return (
		<div className={'app'}>
			<Header />
			<List />
			<Footer />
		</div>
	);
};

export default App;
