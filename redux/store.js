import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './RootReducer';


export const store = createStore(moviesReducer,applyMiddleware(thunk));
