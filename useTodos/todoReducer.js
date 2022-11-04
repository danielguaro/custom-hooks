export const todoReducer = (initialState = [], action) => {
	switch (action.type) {
		case '[TODO] Add Todo':
			return [...initialState, action.payload];

		case '[TODO] Remove Todo':
			return initialState.filter((todo) => todo.id !== action.payload); // regresa todos los todo, siempre y cuando el id sea diferente del payload

		case '[TODO] Toggle Todo':
			return initialState.map((todo) => {
				// suponiendo que el payload es el id
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done, // Devolver la negación
					};
				}
				return todo;
			});

		default:
			return initialState;
	}
};
