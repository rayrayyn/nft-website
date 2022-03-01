import { combineReducers, createStore } from "redux";

import modalsReducer from "./modals/reducer";

const store = createStore(
    combineReducers({
        modals: modalsReducer,
    })
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
