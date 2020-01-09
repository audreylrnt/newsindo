import React from 'react';
import {Component} from 'react';
import Carousel from './carousel';
import MiniNewsContainer from './miniNewsContainer';
import LargeNewsContainer from './largeNewsContainer';
import '../index.css';

class HomePage extends Component{

    state = {
        newsTerkini:[],
        newsPopuler:[],
        selected: {}
    }

    componentDidMount(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=id&' +
        'pageSize=10&'+
        'apiKey=c57d44eeb3f44a46bc66c9e3a32d6af0';
        var req = new Request(url);
        fetch(req)
        .then((response) => {
            return response.json();
        })
        .then((newsJson) => {
            console.log(newsJson.articles);
            const news = newsJson.articles;
            this.setState({
                newsTerkini : news.splice(5,10),
                newsPopuler : news
            });
        });
    }

    render(){
        return (
            <main className="margin-50 news-home-container">
                <section className="news-home-header">
                    <Carousel news={this.state.newsPopuler}/>
                    <div className="sp-32"></div>
                    <div className="sp-32"></div>
                    <LargeNewsContainer title="Berita Terkini" news={this.state.newsTerkini} tag="Umum"/>
                </section>
                <MiniNewsContainer title="Paling Popular" tag="Umum" news={this.state.newsPopuler}/>
            </main>
        );
    }
   
}

export default HomePage;