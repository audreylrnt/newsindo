import React from 'react';
import {Component} from 'react';
import '../index.css';
import {NavLink} from 'react-router-dom';

class MiniNewsContent extends Component{
    render(){
        const path = "/"+this.props.tag+"/page/"+this.props.id;
        return(
            <div className="most-popular-container">
                <div className="most-news-img">
                    <img src={this.props.img} alt="news-img"/>
                </div>
                <div className="most-news-content">
                    <div className="tag-sm"><b>{this.props.tag}</b></div>
                    <b className="text-sm color-secondary "><NavLink to={path} >{this.props.title}</NavLink></b>
                    <span className="sp-16 "></span>
                    <div className="news-time-release ">
                        <img src={require('../clock.svg')} alt="news-time-release"/>
                        <p>{this.props.time}</p>
                    </div>
                </div>
            </div>
        );
    }
   
}

export default MiniNewsContent;