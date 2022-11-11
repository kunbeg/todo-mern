import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { todosReducer } from "./reducers/todosReducer";
import { tabReducers } from "./reducers/tabReducers";
const reducer = combineReducers({
  todos: todosReducer,
  currentTab: tabReducers
});

const middleware = [thunk]
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;