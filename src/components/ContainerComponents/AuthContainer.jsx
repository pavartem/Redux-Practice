import React from 'react';
import {connect} from 'react-redux';
import Auth from "../PresentationComponents/Auth";
import {setEmailText, setPasswordText} from "../../store/auth/actions";

class AuthContainer extends React.Component {
    render() {
        return <Auth email={this.props.email} password={this.props.password} api={this.props.api} setEmailText={this.props.setEmailText}
                     setPasswordText={this.props.setPasswordText}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        api: state.person.api
    };
};

const mapDispatchToProps = {
    setEmailText,
    setPasswordText
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);