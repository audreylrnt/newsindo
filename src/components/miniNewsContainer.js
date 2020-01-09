import React from 'react';
import {Component} from 'react';
import MiniNewsContent from './miniNewsContent';
import '../index.css'

class MiniNewsContainer extends Component{
    render(){
          const News = this.props.news;
        let newsContents;
        if(typeof News !== "undefined"){
            newsContents = News.map((newsContent,index) => <MiniNewsContent img={newsContent.urlToImage} id={index} tag={this.props.tag} title={newsContent.title} time={newsContent.publishedAt}/>)
        }
        return (
            <article className="most-popular-article">
                <b className="text-title text-med">{this.props.title}</b>
                <div className="news-popular-container">
                    {newsContents}
                </div>
            </article>
        );
    }
   
}

export default MiniNewsContainer;