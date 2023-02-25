import React from 'react';
import Base from './base';
import $ from 'jquery';

class Register extends React.Component {
    state = {
        error_message: "",
        username: "",
        password: "",
        confirm_password: "",
    }

    handleClick = e => {
        e.preventDefault();

        if (this.state.username === "") {
            this.setState({error_message: "username is empty!"})
        } else if (this.state.password === "") {
            this.setState({error_message: "password is empty!"})
        } else if (this.state.confirm_password === "") {
            this.setState({error_message: "confirm_password is empty!"})
        } else if (this.state.password !== this.state.confirm_password) {
            this.setState({error_message: "password and confirm_password do not match!"})
        } else {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/calculator/register/",
                type: "get",
                data: {
                    username: this.state.username,
                    password: this.state.password,
                    password_confirm: this.state.confirm_password,
                },
                dataType: "json",
                success: resp => {
                    if (resp.result === "success") {
                        window.location.href="/calculator/";
                    } else {
                        this.setState({error_message: "username already exists!"});
                    }
                }
            })
        }
    }

    render() { 
        return (
            <Base>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-sm-3">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input onChange={e => {this.setState({username: e.target.value})}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input onChange={e => {this.setState({password: e.target.value})}} type="password" className="form-control" id="exampleInputPassword2" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirm_password" className="form-label">Confirm_Password</label>
                                    <input onChange={e => {this.setState({confirm_password: e.target.value})}} type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div style={{height: "2rem", color: "red"}}>{this.state.error_message}</div>
                                <button onClick={this.handleClick} style={{width: "100%"}} type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Base>
        )
    }
}
 
export default Register;