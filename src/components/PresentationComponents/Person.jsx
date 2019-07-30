import React from 'react';

export default class Person extends React.Component {

    constructor(props) {
        super(props);
        //this.onEmailChange = this.onEmailChange.bind(this);
        this.state = {
            api: {}
        };
        console.log(this);
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

    onSavePerson = () => {
        this.props.saveApiData(this.state.api);
    };
    render() {
        return (
            <div className="person">
                <h3>Person</h3>
                <p>Name: {this.state.api.name}</p>
                <p>Height: {this.state.api.height}</p>
                <p>Mass : {this.state.api.mass}</p>
                <button className="btn btn-primary mt-2" onClick={this.onSavePerson}>Save person</button>
            </div>
        );
    }
}