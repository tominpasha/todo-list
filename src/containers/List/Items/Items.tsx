import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListTodos } from 'src/store/reducer';
import { TodoModel } from 'src/store/store.model';
import Checkbox from 'src/components/Checkbox/Checkbox';
import { changeTodoDone, deleteTodo } from 'src/store/actions';
import './Items.scss';

const Items = () => {
	const dispatch = useDispatch();
	const todos = useSelector(getListTodos);

	const onDelete = (id: number) => dispatch(deleteTodo(id));

	const onChangeDone = (id: number, done: boolean) => dispatch(changeTodoDone(id, done));

	const NoItems = () => <div className={'listItems-noItems'}>No items found</div>;

	const Item = ({ id, task, done }: TodoModel) => (
		<div key={`Item-${id}`} className={'listItems-item'}>
			<div className={'listItems-item-col listItems-item-task'}>{task}</div>
			<div className={'listItems-item-col listItems-item-done'}>
				<Checkbox value={done} onChange={(done) => onChangeDone(id, done)} />
			</div>
			<div className={'listItems-item-col listItems-item-del'}>
				<button className={'btn btn-red'} onClick={() => onDelete(id)}>
					Delete
				</button>
			</div>
		</div>
	);

	return <div className={'listItems'}>{todos.length ? todos.map(Item) : <NoItems />}</div>;
};

export default Items;
