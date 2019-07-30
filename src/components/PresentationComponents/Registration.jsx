import React from 'react';

export default class Registration extends React.Component {
    constructor(props){
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
    }

    onEmailChange(event) {
        this.props.setEmailText(event.target.value);
    }

    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value);
    }

    onRepeatPasswordChange(event) {
        this.props.setRepeatPasswordText(event.target.value);
    }


    render() {
        return (
            <div className="registration" style={{flex: 1}}>
                <h3>Sign Up</h3>
                <form>
                    <div>
                        <input
                            type="text"
                            name="login"
                            autoComplete="off"
                            placeholder="E-mail"
                            spellCheck={false}
                            className="form-control col-6 mt-2"
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control col-6 mt-2"
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Repeat password"
                            className="form-control col-6 mt-2"
                            onChange={this.onRepeatPasswordChange}
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary mt-2">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}