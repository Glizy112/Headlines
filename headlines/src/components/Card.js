import React from 'react';
import '../styles/card.css';
import {Link} from 'react-router-dom';
import { AiOutlineShareAlt } from 'react-icons/ai';

const Card = ({article, key}) => {

    //const[pubTime, setPubTime]= useState('');

    const dateString=JSON.stringify(article.publishedAt)
    const published= dateString.slice(1,11)
    const time= dateString.slice(12,17)
    const{title, date, author, desc}= [article.title, article.publishedAt, article.author, article.description]

    // const handleClick=(uniTime)=> {
    //     setPubTime(uniTime);
    //     console.log(pubTime);
    // }

    return (
        
            <div key={key} className="card_container">
                <img src={article.urlToImage} alt="img" width='100%' height={320} className="articleImage"/>
                
                    <Link to={{pathname:`/details/${time}`, state: {title, date, author, desc}}} className="card_heading">{article.title}</Link>
                
                <label className="date">Published: {published}</label>
                <AiOutlineShareAlt size={26} color='gray' style={{marginLeft: 164, cursor: 'pointer'}}/>
            
            </div>

    )
}

export default Card
