import {
	ADD_TODO_ACTION,
	CHANGE_TODO_DONE_ACTION,
	DELETE_TODO_ACTION,
	SET_FILTER_UNDONE_ACTION,
	SET_SHOW_ADD_FORM_ACTION,
} from './constants';

export const setShowAddForm = (show: boolean) => (dispatch: any) =>
	dispatch({
		type: SET_SHOW_ADD_FORM_ACTION,
		show,
	});

export const setFilterUndone = (filter: boolean) => (dispatch: any) =>
	dispatch({
		type: SET_FILTER_UNDONE_ACTION,
		filter,
	});

export const addTodo = (task: string, done: boolean) => (dispatch: any) =>
	dispatch({
		type: ADD_TODO_ACTION,
		task,
		done,
	});

export const changeTodoDone = (id: number, done: boolean) => (dispatch: any) =>
	dispatch({
		type: CHANGE_TODO_DONE_ACTION,
		id,
		done,
	});

export const deleteTodo = (id: number) => (dispatch: any) =>
	dispatch({
		type: DELETE_TODO_ACTION,
		id,
	});
