import { combineReducers, createStore, compose } from "redux";

import modalsReducer from "./modal/reducer";
import themesReducer from "./themes/reducer";
import userReducer from "./user/reducer";

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const store = createStore(
    combineReducers({
        modals: modalsReducer,
        themes: themesReducer,
        user: userReducer,
    }),
    composeEnhancers()
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
