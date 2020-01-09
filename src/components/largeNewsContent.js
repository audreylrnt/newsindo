import React from 'react';
import {Component} from 'react';
import '../index.css';
import {NavLink} from 'react-router-dom';

class LargeNewsContent extends Component{
    render(){
        const path = "/"+this.props.tag.toLowerCase()+"/page/"+this.props.id;
        return(
            <div className="news-container">
                <div className="news-img">
                    <img src={this.props.img} alt="news-img"/>
                </div>
                <div className="news-content">
                    <div className="tag-lg "><b>{this.props.tag}</b></div>
                    <b className="text-extramed color-secondary"><NavLink to={path} >{this.props.title}</NavLink></b>
                    <span className="sp-16 "></span>
                    <p className="text-sm ">{this.props.desc}</p>
                    <span className="sp-16 "></span>
                    <div className="news-time-release ">
                        <img src={require('../clock.svg')} alt="news-time-release"/>
                        <p src="text-extrasm ">{this.props.time}</p>
                    </div>
                </div>
            </div>
    );
    }
   
}

export default LargeNewsContent;