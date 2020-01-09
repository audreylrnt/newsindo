import React from 'react';
import {Component} from 'react';
import '../index.css'

class NewsContentPage extends Component{
    render(){
        return(
            <section class="news-full-content">
                <div class="tag-lg "><b>{this.props.tag}</b></div>
                <b class="text-extramed color-secondary ">{this.props.title}</b>
                <div class="news-time-release ">
                    <img src={require('../clock.svg')} alt="news-time-release"/>
                    <p src="text-extrasm ">{this.props.time}</p>
                </div>
                {/* <img src={require("../lorem-ipsum.png")}/> */}
                <video src={require("../video.mp4")} controls width="100%"/>
                <p class="text-sm ">{this.props.content} </p>
            </section>
        );
    }
   
}

export default NewsContentPage;