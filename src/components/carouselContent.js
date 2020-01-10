import React from 'react';
import {Component} from 'react';
import '../index.css'

class CarouselContent extends Component{
    render(){
        if(this.props.id === 0 ){
            return (
                <div className="carousel-item active">
                    <div style={{backgroundColor:"black", width :"100%", height: "100%"}}>
                        <div className="news-highlight" style={{backgroundImage:`url(${this.props.img}) !important`}}>
                            <div className="news-highlight-content">
                                <div className="tag-lg"><b>{this.props.tag}</b></div>
                                <b className="text-extramed">{this.props.title}</b>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="carousel-item">
                    <div className="news-highlight" style={{backgroundImage:`url(${this.props.img})`}}>
                        <div className="news-highlight-content">
                            <div className="tag-lg"><b>{this.props.tag}</b></div>
                            <b className="text-extramed">{this.props.title}</b>
                        </div>
                    </div>
                </div>
            );
            
        }
        
    }
   
}

export default CarouselContent;