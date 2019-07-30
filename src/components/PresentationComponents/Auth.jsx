import React from 'react';

export default class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onEmailChange(event) {
        this.props.setEmailText(event.target.value);
    }

    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value);
    }

    render() {
        return (
            <div>
                <h3>Sign In</h3>
                <form>
                    <div>
                        <input
                            type="text"
                            name="login"
                            autoComplete="off"
                            placeholder="E-mail"
                            spellCheck={false}
                            className="form-control col-6 mt-2"
                            value={this.props.email}
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control col-6 mt-2"
                            value={this.props.password}
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary mt-2">Sign In</button>
                    </div>
                    <div className="p-5 bg-light mt-5">
                        <p>Name: {this.props.api.name}</p>
                        <p>Height: {this.props.api.height}</p>
                        <p>Mass: {this.props.api.mass}</p>
                    </div>
                </form>
            </div>
        );
    }
}