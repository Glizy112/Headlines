import React from 'react';
import staticImage from '../financial.png';
import '../styles/details.css';
import '../App.css';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Search from './Search';
import { Link } from 'react-router-dom';

const Details = (props) => {
    // let {articleTitle}= useParams();
    // console.log(articleTitle)
    // const {params: {time},}= match;

    console.log (props.location.state);
    //const{title, author, date, desc}= props.location.state;
    const {title,date,author,desc}= props.location.state;
    //const dateString=JSON.stringify(article.publishedAt)
    //const published= dateString.slice(1,11)

    return (
        <div className="container">
            <header className="App-header">
                <div className="nav">
                    <Link to="/" className="nav_heading"> Headlines </Link> 
                </div>
                <Search/>
            </header>
            
            <div className="newsDetails">
                <img src={staticImage} alt="img" width='80%' height='80%' className="image"/>
                <h3 className="title">{title}</h3>
                <div className="articleInfo">
                    <label className="date"> Published: {date} </label>
                    <label className="author"> Author: {author} </label>
                </div>

                <div className="content">
                    {desc}
                </div>
            </div>

            <footer className="App-footer">
                    <div className="newsletter">
                        <input className="subscribe_input" type="text" placeholder="Subscribe to your newsletter"/>
                        <button type="submit" className="subscribe_btn"> Subscribe </button>
                    </div>

                    <label className="copyright"> Copyright © 2020-2021 </label> 

                <ul className="social_links">
                    <li> <a href="https://www.facebook.com"><FaFacebook size={30} color="black" className="fb"/></a> </li>
                    <li> <a href="https://www.twitter.com"><FaTwitter size={30} color="black" className="tweet"/></a> </li>
                    <li> <a href="https://www.instagram.com"><FaInstagram size={30} color="black" className="insta"/></a> </li>
                </ul>
            </footer>
            
        </div>
    )
}

export default Details
