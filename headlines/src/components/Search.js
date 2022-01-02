import React, {useState} from 'react';
import '../App.css';
import {AiOutlineSearch} from 'react-icons/ai';

const Search = ({searchText}) => {

    const[text, setText]= useState('');

    const onSubmit=(e)=> {
        e.preventDefault();
        searchText(text);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="searchBox">
                <input className="search" placeholder="Search" type="text" onChange={e=> setText(e.target.value)}/>
                <button className="search_icon" type="submit"><AiOutlineSearch size={24} color="gray"/></button>
            </div>
        </form>
    )
}

export default Search
