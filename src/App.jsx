import React from 'react';
import {createStore, applyMiddleware} from "redux";
import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import AuthContainer from "./components/ContainerComponents/AuthContainer";
import RegistrationContainer from "./components/ContainerComponents/RegistrationContainer";
import PersonContainer from "./components/ContainerComponents/PersonContainer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="wrapper">
                    <h1>Complex State</h1>

                    <div className="forms" style={{display: "flex"}}>
                        <AuthContainer/>
                        <RegistrationContainer/>
                        <PersonContainer/>
                    </div>
                </div>
            </Provider>
        )
    }
}
