import React from 'react';
import Actions from './Actions/Actions';
import Header from './Header/Header';
import Items from './Items/Items';
import AddForm from './AddForm/AddForm';
import './List.scss';

const List = () => {
	return (
		<div className={'list'}>
			<Actions />
			<Header />
			<Items />
			<AddForm />
		</div>
	);
};

export default List;
