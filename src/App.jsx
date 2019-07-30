import React from 'react';
import {createStore, applyMiddleware} from "redux";
import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import AuthContainer from "./components/ContainerComponents/AuthContainer";
import RegistrationContainer from "./components/ContainerComponents/RegistrationContainer";
import PersonContainer from "./components/ContainerComponents/PersonContainer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="wrapper">
                    <h1>Complex State</h1>

                    <div className="row">
                        <div className="col-6">
                            <AuthContainer/>
                        </div>
                        <div className="col-6">
                            <RegistrationContainer/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <PersonContainer/>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}
