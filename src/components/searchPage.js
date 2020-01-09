import React from 'react';
import {Component} from 'react';
import LargeNewsContainer from './largeNewsContainer';
import '../index.css';


class SearchPage extends Component{
    state = {
        news:[]
    }

    componentDidUpdate(){
        var url = 'https://newsapi.org/v2/everything?' +
        'q=' + this.props.match.params.q+
        '&domains=detik.com'+
        '&pageSize=15'+ 
        '&apiKey=c57d44eeb3f44a46bc66c9e3a32d6af0';
        var req = new Request(url);
        fetch(req)
        .then((response) => {
            return response.json();
        })
        .then((newsJson) => {
            this.setState({
                news : newsJson.articles
            });
        });
    }

    componentDidMount(){
        var url = 'https://newsapi.org/v2/everything?' +
        'q=' + this.props.match.params.q+
        '&domains=detik.com'+
        '&pageSize=15'+ 
        '&apiKey=c57d44eeb3f44a46bc66c9e3a32d6af0';
        var req = new Request(url);
        fetch(req)
        .then((response) => {
            return response.json();
        })
        .then((newsJson) => {
            this.setState({
                news : newsJson.articles
            });
        });
    }

    render(){
        const title = 'Hasil Pencarian Berita Tentang "'+ this.props.match.params.q+'"';
        return ( 
            <main className="margin-50">
                <LargeNewsContainer title={title} news={this.state.news} tag="Umum"/>
            </main>
        );
    }
   
}

export default SearchPage;