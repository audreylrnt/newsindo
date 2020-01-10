import React from 'react';
import {Component} from 'react';
import LargeNewsContent from './largeNewsContent';
import '../index.css'

class LargeNewsContainer extends Component{
    
    render(){
        const News = this.props.news;
        let newsContents;
        if(typeof News !== "undefined") {
            newsContents = News.map((newsContent,index) => <LargeNewsContent img={newsContent.urlToImage} id={index} tag={this.props.tag} title={newsContent.title} desc={newsContent.description} time={newsContent.publishedAt}/>)
        }
        return (
            <section>
                <b className="text-title text-lg ">{this.props.title}</b>
                {newsContents}
            </section>
        );
    }
   
}

export default LargeNewsContainer;