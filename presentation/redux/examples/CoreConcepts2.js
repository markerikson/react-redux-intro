function visibilityFilter(state = 'SHOW_ALL', action) {
    return action.type === 'SET_VISIBILITY_FILTER' ?
        action.filter :
        state
}

function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([{
                text: action.text, completed: false
            }]);
        case 'TOGGLE_TODO':
            return state.map((todo, index) =>
                action.index === index ?
                    { text: todo.text, completed: !todo.completed } :
                    todo
            )
        default: return state;
    }
}

function todoApp(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
}