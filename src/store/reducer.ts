import { StoreModel, TodoModel } from './store.model';
import {
	ADD_TODO_ACTION,
	DELETE_TODO_ACTION,
	SET_FILTER_UNDONE_ACTION,
	SET_SHOW_ADD_FORM_ACTION,
} from './constants';

let newTodoIdx = 1;

const initialState: StoreModel = {
	todos: [],
	filterUndone: false,
	showAddForm: false,
};

export default (state = initialState, { type, ...payload }: any) => {
	switch (type) {
		case SET_SHOW_ADD_FORM_ACTION:
			return { ...state, showAddForm: payload.show };
		case SET_FILTER_UNDONE_ACTION:
			return { ...state, filterUndone: payload.filter };
		case ADD_TODO_ACTION:
			const newTodo: TodoModel = {
				id: newTodoIdx,
				task: payload.task,
				done: payload.done,
			};
			newTodoIdx++;
			return { ...state, todos: [newTodo, ...state.todos], showAddForm: false };
		case DELETE_TODO_ACTION:
			const todos = state.todos.filter((todo) => todo.id !== payload.id);
			return { ...state, todos };
	}
	return state;
};

export const getListTodos = (state: StoreModel) => {
	if (!state.filterUndone) {
		return state.todos;
	}

	return state.todos.filter((todo) => !todo.done);
};
