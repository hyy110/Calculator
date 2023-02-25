import React from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Navbar extends React.Component {
    state = {

    }

    handleClick = () => {
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/calculator/logout/",
            type: "get",
            success: resp => {
                console.log(resp.result)
                if (resp.result === "success") {
                    window.location.href="/calculator/";
                }
            }
        })
    }

    render_calculator = () => {
        if (this.props.is_login) {
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/calculator/calculator">Calculator</Link>
                </li>
            )
        } else {
            return "";
        }
    }

    render_user = () => {
        if (this.props.is_login) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" style={{cursor: "pointer"}}>{this.props.username}</a>
                    </li>
                    <li className="nav-item">
                    <a onClick={this.handleClick} className="nav-link" style={{cursor: "pointer"}}>Logout</a>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/calculator/login">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/calculator/register">Register</Link>
                    </li>
                </ul>
            )
        }
    }

    render() { 
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/calculator">Web</Link>

                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/calculator/home">Home</Link>
                    </li>
                    {this.render_calculator()}
                </ul>
                {this.render_user()}
                </div>
            </div>
        </nav>
        )
    }
}
 
export default Navbar;