import React from 'react';
import {Component} from 'react';
import LargeNewsContainer from './largeNewsContainer';
import '../index.css';


class CategoryPage extends Component{
    state = {
        news:[]
    }

    componentDidMount(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=id' +
        '&category=' +this.props.category+ 
        '&apiKey=c57d44eeb3f44a46bc66c9e3a32d6af0';
        var req = new Request(url);
        fetch(req)
        .then((response) => {
            return response.json();
        })
        .then((newsJson) => {
            console.log(newsJson.articles);
            this.setState({
                news : newsJson.articles
            });
            console.log(this.state.news);
        });
    }

    render(){
        return ( 
            <main className="margin-50">
                <LargeNewsContainer title={this.props.title} news={this.state.news} tag={this.props.title}/>
            </main>
        );
    }
   
}

export default CategoryPage;