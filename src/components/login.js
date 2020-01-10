import React from 'react';
import {Component} from 'react';
import '../index.css'

const initState = {
    exampleInputEmail1: "",
    exampleInputPassword1: "",
    emailError: "",
    PWError: ""
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
        let emailError = "";
        let PWError = "";
        
        if(!this.state.exampleInputEmail1){
            emailError = "Email cannot be empty";
        }

        if(!this.state.exampleInputPassword1){
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
            alert("Welcome back!");
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
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"
                        onChange={this.handleChange} noValidate/>
                    </div>
                    <div className="errorMsg">{this.state.emailError}</div>
                    
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="exampleInputPassword1" placeholder="Password"
                        onChange={this.handleChange} noValidate/>
                    </div>
                    <div className="errorMsg">{this.state.PWError}</div>
                    <button type="submit" className="btn btn-primary" id="btn_login">Login</button>
                </form>
                
                </section>
            </div>
        );
    }
   
}

export default Login;