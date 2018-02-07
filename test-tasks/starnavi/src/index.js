import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import 'font-awesome/css/font-awesome.min.css';
import { store } from './store'
import Root from './components/Root'

const appStore = store()
ReactDOM.render(<Root store={appStore} />, document.getElementById('root'));
