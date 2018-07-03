import React, { Component } from 'react';

class Login extends Component {
constructor(props){
    super(props);
    this.state={
        email: '',
        password: ''
    }
}
    signUp = () => {
        console.log('this.state', this.state);
    }
    render () {
        return (
        <div className="wrapper">
            <div className="form-inline">
                <h2 className="form-signin-heading">Please login</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        required="" 
                        autoFocus=""
                        onChange={event => this.setState({password: event.target.value})}
                    /> 
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.signUp}
                    >
                    Login
                    </button>
                </div>
            </div>
            </div>

        )
    }
}

export default Login;