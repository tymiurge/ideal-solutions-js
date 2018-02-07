import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// views 
import FormWizard from './FormWizard'
import FormsView from './FormsView';

const Root = ({store}) => 
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={FormsView} />
                <Route path="/form/:id" component={FormWizard} />
            </Switch>
        </BrowserRouter>
    </Provider>

export default Root