import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducers from '../reducers/usersReducer'
import customerReducer from '../reducers/customerReducer'
import driverReducer from '../reducers/driverReducer'
// import studentReducer from '../reducers/studentReducer'


const configureStore=()=>{
    const store=createStore(combineReducers({
        userAccnt:usersReducers,
        customers:customerReducer,
        drivers:driverReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore
