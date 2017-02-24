import {createStore} from "redux";

import rootReducerFunction from "reducers/rootReducer";

const store = createStore(rootReducerFunction, preloadedState);

console.log(store.getState());
// {todos : [.....], visibilityFilter : "SHOW_COMPLETED"}

store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' })
console.log(store.getState());
// {todos : [.....], visibilityFilter : "SHOW_ALL"}

const stateBefore = store.getState();
console.log(stateBefore.todos.length);
// 2

store.subscribe( () => {
    console.log("An action was dispatched");
    const stateAfter = store.getState();
    console.log(stateAfter.todos.length);
});

store.dispatch({ type: 'ADD_TODO', text: 'Go to swimming pool' });
// "An action was dispatched"
// 3

