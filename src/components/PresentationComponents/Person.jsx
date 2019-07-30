import React from 'react';

export default class Person extends React.Component {

    onSavePerson = () => {
        this.props.saveApiData(this.props.api);
    };

    render() {
        return (
            <div >
                <h3>Person</h3>
                <p>Name: {this.props.api.name}</p>
                <p>Height: {this.props.api.height}</p>
                <p>Mass : {this.props.api.mass}</p>
                <button className="btn btn-primary mt-2" onClick={this.props.getApiData}>Get person</button>
            </div>
        );
    }
}