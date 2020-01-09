import React from 'react';
import {Component} from 'react';
import '../index.css'

const initState = {
    custPW: "",
    custEmail: "",
    PWError: "",
    emailError: ""
}

class Login extends Component{
    state = initState;

    handleChange = event =>{
        const isCheckBox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckBox ? event.target.checked : event.target.value
        });
    };

    validate = () =>{
        let PWError = "";
        let emailError = "";

        if(!this.state.custEmail){
            emailError = "Email cannot be empty";
        }
        if(!this.state.custPW){
            PWError = "Password cannot be empty";
        }
        if(emailError || PWError){
            this.setState({emailError, PWError});
            return false;
        }
        return true;
    };

    handleSubmit = event =>{
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            alert("Hi!");
            this.setState(initState);
        }
        
    }
    render(){
        return(
            <div className="login-register-page margin-50">
                <b className="text-lg">Login</b>
                <div className="sp-32"></div>
                <b className="text-sm">Silahkan Login dengan menggunakan akun yang benar</b>
                <div className="sp-32"></div>
                <section>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" c/>
                        
                    </div>
                    <div className="errorMsg">{this.state.emailError}</div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary" id="btn_login">Login</button>
                </form>
                
                </section>
            </div>
        );
    }
   
}

export default Login;