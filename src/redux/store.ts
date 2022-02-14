import {applyMiddleware, combineReducers, createStore} from "redux";
import contactReducer from "./reducers/contactReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    contact: contactReducer,
})

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
