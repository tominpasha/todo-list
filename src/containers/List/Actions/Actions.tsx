import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterUndone, setShowAddForm } from 'src/store/actions';
import Checkbox from 'src/components/Checkbox/Checkbox';
import './Actions.scss';

const Actions = () => {
	const dispatch = useDispatch();

	const onAdd = () => dispatch(setShowAddForm(true));

	const onSetFilterUndone = (filter: boolean) => dispatch(setFilterUndone(filter));

	return (
		<div className={'listActions'}>
			<button className={'btn'} onClick={onAdd}>
				Add
			</button>
			<Checkbox label={'Display only undone'} align={'right'} onChange={onSetFilterUndone} />
		</div>
	);
};

export default Actions;
