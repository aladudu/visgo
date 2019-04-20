import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {combineReducers} from 'redux-immutable';
import Shopcar from './reducers/shopcar';

const reducer = combineReducers({

    Shopcar
})


const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store;