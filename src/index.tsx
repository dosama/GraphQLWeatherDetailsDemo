import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer, { RootState } from './reducers/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThunkAction } from 'redux-thunk';
import { Action, configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer
})
export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <App />
     </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
