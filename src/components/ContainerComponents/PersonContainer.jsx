import React from 'react';
import {connect} from 'react-redux';
import {getApiData} from "../../store/person/actions";
import Person from "../PresentationComponents/Person";

class PersonContainer extends React.Component {
    state = {
        api: {
            name: 'test',
            height: 175,
            mass: 55
        }
    };


    render() {
        return <Person api={this.props.api}
                       getApiData={this.props.getApiData}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        api: state.person.localApi
    };
};

const mapDispatchToProps = {
    getApiData
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);