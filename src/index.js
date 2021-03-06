import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

ReactDOM.render(
      <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </Provider>,
  document.getElementById('root')
);
