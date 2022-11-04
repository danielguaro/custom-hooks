import { useEffect, useReducer } from 'react';

import { todoReducer } from './todoReducer';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
	// El todoReducer NOO se ejecuta, solo se pasa la referencia y es el reducer, la función
	const [todos, dispatch] = useReducer(todoReducer, [], init);
	// Para poder hacer uso del LocalStorage, debo tener un useEffect
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos) || []);
	}, [todos]);

	const handleNewTodo = (todo) => {
		const action = {
			type: '[TODO] Add Todo',
			payload: todo,
		};

		dispatch(action);
	};

	// Para eliminar
	const handleDelete = (id) => {
		// console.log(id);
		dispatch({
			type: '[TODO] Remove Todo',
			payload: id,
		});
	};

	const handleToggleTodo = (id) => {
		dispatch({
			type: '[TODO] Toggle Todo',
			payload: id,
		});
	};

	const todosCount = todos.length;

	const pendingTodosCount = todos.filter((todo) => !todo.done).length;

	return {
		todos,
		handleNewTodo,
		handleDelete,
		handleToggleTodo,
		todosCount,
		pendingTodosCount,
	};
};
