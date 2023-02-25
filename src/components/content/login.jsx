import React from 'react';
import Base from './base';
import $ from 'jquery'

class Login extends React.Component {
    state = {
        error_message: "",
        username: "",
        password: "",
    }

    handleClick = e => {
        e.preventDefault();

        if (this.state.username === "") {
            this.setState({error_message: "username is empty!"})
        } else if (this.state.password === "") {
            this.setState({error_message: "password is empty!"})
        } else {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/calculator/login/",
                type: "get",
                data: {
                    username: this.state.username,
                    password: this.state.password,
                },
                dataType: "json",
                success: resp => {
                    console.log(resp.result)
                    if (resp.result === "success") {
                        window.location.href="/calculator/";
                    } else {
                        this.setState({error_message: "username or password is error!"});
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
                                    <input onChange={e => {this.setState({password: e.target.value})}} type="password" className="form-control" id="exampleInputPassword1" />
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
 
export default Login;