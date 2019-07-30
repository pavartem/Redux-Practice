import React from 'react';
import {connect} from 'react-redux';
import {saveApiData} from "../../store/person/actions";
import Person from "../PresentationComponents/Person";

class PersonContainer extends React.Component {
    render() {
        return <Person api={this.props.api} saveApiData={this.props.saveApiData}/>
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