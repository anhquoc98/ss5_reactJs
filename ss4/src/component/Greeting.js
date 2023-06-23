import React, {Component} from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: window.localStorage.getItem('firstName') || '',
            lastName: window.localStorage.getItem('lastName') || '',
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
    }

    handleFirstNameChange = (e) => this.setState({firstName: e.target.value})
    handleLastNameChange = (e) => this.setState({lastName: e.target.value})

    componentDidUpdate() {
        // eslint-disable-next-line no-unused-expressions
        window.localStorage.setItem('classFirstName', this.state.firstName),
            [this.state.firstName];
        // eslint-disable-next-line no-unused-expressions
        window.localStorage.setItem('classLastName', this.state.lastName),
            [this.state.lastName];
    }

    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.firstName}
                       onChange={this.handleFirstNameChange}
                />
                <br/>
                <input type="text"
                       value={this.state.lastName}
                       onChange={this.handleLastNameChange}
                />
                <p>
                    Hello,{''}
                    <span>
                        {this.state.firstName} {this.state.lastName}
                    </span>
                </p>
            </div>
        );
    }
}

export default Greeting;