import React from 'react';
import {connect} from 'react-redux';
import {saveApiData} from "../../store/person/actions";
import Person from "../PresentationComponents/Person";

class PersonContainer extends React.Component {

    constructor(props) {
        super(props);
        //this.onEmailChange = this.onEmailChange.bind(this);
        this.state = {
            api: {}
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/1/')
            .then((response) => {
                return response.json();
            })
            .then((user) => {
                this.setState({api:user});
            })
            .catch( console.log );
    }

    render() {
        return <Person api={this.state.api} saveApiData={this.props.saveApiData}/>
    }
}

const mapStateToProps = (state) => {
    return {
        api: state.person.api
    };
};

const mapDispatchToProps = {
    saveApiData
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);