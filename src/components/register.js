import React from 'react';
import {Component} from 'react';
import '../index.css'

const initState = {
    email: "",
    password: "",
    emailError: "",
    PWError: ""
}


class Register extends Component{
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
        
        if(!this.state.email){
            emailError = "Email cannot be empty";
        }

        if(!this.state.password){
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
            alert("You have been registered!");
            this.setState(initState);
        }
    }
    render(){
        return(
            <div className="login-register-page margin-50">
                <b className="text-lg">Register</b>
                <div className="sp-32"></div>
                <b className="text-sm">Silahkan daftar untuk mendapatkan lebih banyak layanan</b>
                <div className="sp-32"></div>
                <section>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" required="" className="form-control" name="firstName" placeholder="First Name" onChange={this.handleChange} noValidate/>
                    </div>
                    <div className="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" required="" className="form-control" name="lastName" placeholder="Last Name" onChange={this.handleChange} noValidate/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" required="" className="form-control" name="email" placeholder="Email" onChange={this.handleChange} noValidate/>
                    </div>
                    <div className="errorMsg">{this.state.emailError}</div>
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" required="" className="form-control" name="username" placeholder="Username" onChange={this.handleChange} noValidate/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" required="" className="form-control" name="password" placeholder="Password" onChange={this.handleChange} noValidate/>
                    </div>
                    <div className="errorMsg">{this.state.PWError}</div>
                    <div className="form-group">
                        <label for="age">Age</label>
                        <input type="number" className="form-control" name="age" placeholder="Age" onChange={this.handleChange} noValidate/>
                    </div>
                    
                    <div className="form-group">
                        <label for="gender">Gender</label>
                        <div id="gender">
                            <label className="radio-inline">
                                <input type="radio" name="gender" value="Male"/>  Male
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="gender" value="Female"/>  Female
                            </label>
                        </div>

                    </div>
                    <div className="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="number" className="form-control" name="phoneNumber" placeholder="Phone Number" onChange={this.handleChange} noValidate/>
                    </div>

                    <button className="btn btn-primary" type="submit" name="btn_regis">Register</button>
                </form>
                
                </section>
            </div>
        );
    }
   
}

export default Register;