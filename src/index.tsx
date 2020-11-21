import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './assets/scss/index.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import './utils/window';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
