import React, { Component } from 'react';
import LoginCmp from '../../Component/LoginCmp/LoginCmp';

export class Login extends Component {
    state = {
        email: "",
        password: "",
        address: "",
        emailErr: "",
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        if (name === "email") {
            if (value.length >= 6) {
                this.setState({ emailErr: "Text is too long" })
            } else {
                this.setState({ emailErr: "" })
            }
            this.setState({ email: value })
        } else if (name === "password") {
            this.setState({ password: value });
        } else if (name === "address") {
            this.setState({ password: value });
        }
        // this.setState({ [name]: value });
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <LoginCmp
                    handleChange={this.handleChange}
                    emailErr={this.state.emailErr}
                />
            </div>
        )
    }
}

export default Login;
