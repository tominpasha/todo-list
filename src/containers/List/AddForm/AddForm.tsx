import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreModel } from 'src/store/store.model';
import Checkbox from 'src/components/Checkbox/Checkbox';
import { addTodo, setShowAddForm } from 'src/store/actions';
import './AddForm.scss';

const AddForm = () => {
	const dispatch = useDispatch();
	const showAddForm = useSelector((state: StoreModel) => state.showAddForm);
	let task = '';
	let done = false;

	if (!showAddForm) {
		return null;
	}

	const onTaskChange = (e: FormEvent<HTMLTextAreaElement>) => (task = e.currentTarget.value);

	const onDoneChange = (newDoneValue: boolean) => (done = newDoneValue);

	const onSave = () => {
		if (task === '') {
			alert('Enter the task!');
			return;
		}

		dispatch(addTodo(task, done));
	};

	const onClose = () => dispatch(setShowAddForm(false));

	return (
		<div className={'listAddForm'}>
			<div className={'listAddForm-content'}>
				<div className={'listAddForm-row'}>
					<div className={'listAddForm-label'}>Task</div>
					<textarea onChange={onTaskChange} />
				</div>
				<div className={'listAddForm-row'}>
					<Checkbox label={'Done'} onChange={onDoneChange} />
				</div>
				<div className={'listAddForm-buttons'}>
					<button className={'btn'} onClick={onSave}>
						Save
					</button>
					<button className={'btn btn-red'} onClick={onClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddForm;
