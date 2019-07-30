import React from 'react';
import {createStore} from "redux";
import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import AuthContainer from "./components/ContainerComponents/AuthContainer";
import RegistrationContainer from "./components/ContainerComponents/RegistrationContainer";
import PersonContainer from "./components/ContainerComponents/PersonContainer";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
