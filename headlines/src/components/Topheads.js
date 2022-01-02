import React, {useState} from 'react';
import '../styles/topheads.css';
import { BiTrendingUp } from "react-icons/bi";

const Topheads = () => {

    const[text, setText]= useState('');

    const onSubmit=(e)=> {
        e.preventDefault();
        //topLines(text);
    }

    return (
        <form onSubmit={onSubmit} className="headlines_container">
            <button type="submit" className="top_headlines" value="top-headlines" onClick={e=> setText(e.target.value)}>
                <BiTrendingUp size={22} color="black" className="trend_icon"/>
                Top Headlines
            </button>
        </form>
    )
}

export default Topheads
