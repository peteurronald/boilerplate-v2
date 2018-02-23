import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import authReducer  from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
