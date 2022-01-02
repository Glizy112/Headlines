import React, {useState} from 'react';
import buttons from '../assets/Buttons';

const Category = ({filterText, searchText}) => {

    const [text,setText]= useState('');

    const onSubmit =(e)=> {
        e.preventDefault();
        //console.log(text);
        //setText(e.target.value);
        filterText(text);
        //searchText(text);
    }


    return (
        <div className="category_container">
            <h3 className="category_label"> Discover </h3>
            <form className="btn_container" onSubmit={onSubmit}>
            {
                buttons.map(button=> (
                    <button onClick={e=> setText(e.target.value)} className="category_btn" type="submit" value={button.title} key={button.id}>{button.title}</button>
                ))
            }
            </form>
        </div>
    )
}

export default Category
