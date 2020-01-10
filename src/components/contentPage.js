import React from 'react';
import {Component} from 'react';
import '../index.css'
import NewsContentPage from '../components/newsContentPage';
import MiniNewsContainer from '../components/miniNewsContainer';

class ContentPage extends Component{
    state = {
        news:[]
    }

    componentDidMount() {
        var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=id' +
        '&category=' +this.props.category+ 
        '&pageSize=5'+
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
            console.log("berita lainnya "+newsJson.articles);
        });
    }

    render(){
        const news= {
            title : "Tampilan iPhone 'Murah' Terbaru Bocor - CNN Indonesia", 
            time : "8 Januari 2020", 
            // img:"../lorem-ipsum.png", 
            video:"../video.mp4",
            content: "Jakarta, CNN Indonesia -- Kabar ponsel baru Apple, iPhone SE 2 yang dibanderol dengan harga murah telah berhembus cukup lama. Seorang analis dari TF International Securities, Ming Chi Kuo menyebut Apple bakal menjual ponsel seharga Rp5,6 juta. Pada Senin (6/1) salah satu penggiat gadget @OnLeaks mengunggah tampilan iPhone SE 2 di akun Twitter pribadinya. \"Akhirnya muncullah tampilan pertama #iPhoneSE2 alias #iPhone9 yang sangat dinanti-nantikan! Video 360 derajat + video 5K + dimensi yang sangat memukau,\" cuitnya. Dilansir Digital Trends, iPhone SE 2 memiliki layar LCD 4,7 inci 720p. Kali ini Apple meniadakan fitur FaceID, sebagai gantinya perusahaan menggabungkan sensor sidik jari dan tombol beranda ponsel. Ponsel dikabarkan bakal ditenagai cipset anyar yaitu A13 Bionic, yang juga disematkan pada trio iPhone 11. Selain itu, iPhone SE 2 disebut memiliki kapasitas memori sebesar 3GB. Menyoal harga, pada awal penjualannya seri iPhone SE dijual Apple seharga US$399 atau sekitar Rp5,6 juta (US$1 = Rp14,120). Kuo memprediksi harga iPhone SE2 bakal dipatok US$349 atau Rp4,9 juta sedangkan iPhone 8 dibanderol US$449 atau Rp6,3 juta. Desas-desus soal iPhone SE terbaru yang akan dijual dengan harga terjangkau sebetulnya telah muncul sejak 2018 lalu. Saat ini perusahaan menghentikan sementara produksi seri SE yang sempat dijual hinga 40 juta unit sejak 2016 sampai akhir 2018. Selain iPhone SE 2, Apple dikabarkan akan merilis iPhone 12 dan empat iPhone 5G dengan konektivitas 5G tahun ini. iPhone baru kemungkinan akan diluncurkan pada semester kedua 2020. Ponsel akan hadir dalam berbagai ukuran layar. Satu set berukuran 5,4 inci, satu berukuran 6,7 inci, dan dua lainnya berukuran 6,1 inci. Prediksi dari JP Morgan sedikit berbeda dengan perkiraan lain yang menyebutkan jajaran iPhone 2020 akan menyerupai model 2019. Menurut JP Morgan, spesifikasi iPhone 5,4 inci dan 6,7 inci akan menjadi yang paling canggih di jajaran iPhone 2020. Sementara itu, iPhone 6,1 inci akan menjadi versi yang lebih murah.Prediksi dari JP Morgan menyeruak ketika perusahaan Samsung dan OnePlus ikut meluncurkan perangkat dan operator yang mendukung 5G. Sebelumnya, Verizon, AT&T dan T-Mobile telah terlebih dahulu menjamah teknologi 5G. Teknologi jaringan kelima diharapkan bisa mendorong teknologi dan inovasi dalam ponsel pintar. Termasuk berselancar video yang lebih baik dan mendukung teknologi mobil otonom."
        }
        return (
                <main class="margin-50 news-full-container">
                    <NewsContentPage tag={this.props.tag} title={news.title} time={news.time} img={news.img} content={news.content}/>
                    <MiniNewsContainer title="Berita lainnya" tag={this.props.tag} news={this.state.news}/>
                </main>        
        );
    }
   
}

export default ContentPage;