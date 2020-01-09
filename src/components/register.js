import React from 'react';
import {Component} from 'react';
import '../index.css'
const initState = {
    custPW: "",
    custEmail: "",
    PWError: "",
    emailError: "",
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
        else{
            console.log(this.state.custPW);
            console.log(this.state.custPW2);
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
                        <input type="text" required="" className="form-control" id="firstName" placeholder="First Name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" required="" className="form-control" id="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" required="" className="form-control" id="email" placeholder="Email" onChange={this.handleChange}/>
                    </div>
                    <div className="errorMsg">{this.state.emailError}</div>
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" required="" className="form-control" id="username" placeholder="Username" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" required="" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <div className="errorMsg">{this.state.PWError}</div>
                    <div className="form-group">
                        <label for="age">Age</label>
                        <input type="number" className="form-control" id="age" placeholder="Age" onChange={this.handleChange}/>
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
                        <input type="number" className="form-control" id="phoneNumber" placeholder="Phone Number" onChange={this.handleChange}/>
                    </div>

                    <button className="btn btn-primary" type="submit" id="btn_regis">Register</button>
                </form>
                
                </section>
            </div>
        );
    }
   
}

export default Register;