import React from 'react';
import {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../index.css';
import {Link} from 'react-router-dom';

class nav extends Component { 
    state={
        searchPath : ""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : "/search/"+e.target.value
        })
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "300px";
        document.getElementById("backDrop").style.display ="block";
      }
      
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("backDrop").style.display ="none";
    }

    render(){
        return (
            <div>
                <nav>
                    <b className="text-lg">newsindo<b className="text-extralg color-primary">.</b></b>
                    <span style={{fontSize:"30px",cursor:"pointer"}} className="burgerbutton" onClick={this.openNav}>&#9776;</span>
                    <ul className="defaultnav">
                        <li><NavLink to="/" exact activeClassName="nav-active">Home</NavLink></li>
                        <li><NavLink to="/umum" activeClassName="nav-active">Umum</NavLink></li>
                        <li><NavLink to="/bisnis" activeClassName="nav-active">Bisnis</NavLink></li>
                        <li><NavLink to="/hiburan" activeClassName="nav-active">Hiburan</NavLink></li>
                        <li><NavLink to="/kesehatan" activeClassName="nav-active">Kesehatan</NavLink></li>
                        <li><NavLink to="/sains" activeClassName="nav-active">Sains</NavLink></li>
                        <li><NavLink to="/olahraga" activeClassName="nav-active">Olahraga</NavLink></li>
                        <li><NavLink to="/teknologi" activeClassName="nav-active">Teknologi</NavLink></li>
                    </ul>
                </nav>
                <div className="search-bar-container">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Masukkan keyword untuk mencari berita" id="searchPath" onChange={this.handleChange}/>
                        <Link className="search-button" to={this.state.searchPath}>
                            <button type="submit" value="reset">Search</button>
                        </Link>
                    </form>
                    <ul>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
                <ul id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <li><NavLink to="/" exact activeClassName="nav-active" onClick={this.closeNav}>Home</NavLink></li>
                    <li><NavLink to="/umum" activeClassName="nav-active" onClick={this.closeNav}>Umum</NavLink></li>
                    <li><NavLink to="/bisnis" activeClassName="nav-active" onClick={this.closeNav}>Bisnis</NavLink></li>
                    <li><NavLink to="/hiburan" activeClassName="nav-active" onClick={this.closeNav}>Hiburan</NavLink></li>
                    <li><NavLink to="/kesehatan" activeClassName="nav-active" onClick={this.closeNav}>Kesehatan</NavLink></li>
                    <li><NavLink to="/sains" activeClassName="nav-active" onClick={this.closeNav}>Sains</NavLink></li>
                    <li><NavLink to="/olahraga" activeClassName="nav-active" onClick={this.closeNav}>Olahraga</NavLink></li>
                    <li><NavLink to="/teknologi" activeClassName="nav-active" onClick={this.closeNav}>Teknologi</NavLink></li>
                </ul>
                <div className="BackDrop" id="backDrop" onClick={this.closeNav}></div>
            </div>
           
        );
    }
   
}

export default nav;
