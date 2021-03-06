import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {startGetAccount} from './actions/userAction'

const store=configureStore()
console.log('Intial state',store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})
if(localStorage.getItem('token')){
    store.dispatch(startGetAccount())  
  }
const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('root'))


