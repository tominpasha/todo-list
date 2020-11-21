export interface StoreModel {
	todos: TodoModel[];
	filterUndone: boolean;
	showAddForm: boolean;
}

export interface TodoModel {
	id: number;
	task: string;
	done: boolean;
}
