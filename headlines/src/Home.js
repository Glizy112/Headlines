import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './components/Card';
import Search from './components/Search';
import Category from './components/Category';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLoading, ThreeDots } from '@agney/react-loading';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
// import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";

const Home = () => {
    const API_KEY= 'e3936bf4f3f34d308bba1b5c18c819d8';

    const[data, setData]= useState([]);
    const[keyword, setKeyword]= useState('');
    const[filter, setFilter]=useState('');
    const[loading, setLoading]= useState(false);
    const[showModal, setShowModal]= useState(false);

    const url= `https://newsapi.org/v2/top-headlines?country=in&q=${keyword}&category=${filter}&apiKey=${API_KEY}`;
    
    useEffect(()=> {
        getData();
        //setLoading(false);
    },[setData, keyword, filter]);

    const getData=()=>{
        setLoading(true);
        axios.get(url)
        .then((response)=> response.data)
        .then(response=> {
            setData(response.articles);
            setLoading(false);
        })
        .catch(err=> console.log(err)); 
    }

    const Loading_Indicator=()=> {
        const { containerProps, indicatorEl } = useLoading({
            loading: true,
            indicator: <ThreeDots width="50" />,
          });

          return (
            <section {...containerProps} style={{marginTop: 48}}>
                {indicatorEl}
            </section>
          );
        
        //   return (
        //     {/* Accessibility props injected to container */}
        //     <section {...containerProps}>
        //       {indicatorEl} {/* renders only while loading */}
        //     </section>
        //   );
    }

    const handleShare=()=> {
        setShowModal(true);
    }

    const index= Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    
    return (
        <div className="container">
            <header className="App-header">
                <div className="nav">
                    <Link to="/" className="nav_heading"> Headlines </Link> 
                </div>
                <Search searchText={(text)=> setKeyword(text)}/>
            </header>
            
            <div className="links">
                <Category filterText={(text)=> setFilter(text)}/>
            </div>
            
            
            {loading===true 
                ? <Loading_Indicator/>
                :   <div className="feed_layout">
                        {data.map((article)=>{
                            return <Card key={index} article={article} handleShare={handleShare}/>   
                        })}
                    </div>
            }

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

            { showModal===true &&
                <Modal size="sm" active={showModal} toggler={()=> setShowModal(false)}>
                    <ModalHeader toggler={() => setShowModal(false)}>
                        Modal Title
                    </ModalHeader>
                    <ModalFooter>
                        <button type="submit" onClick={()=> {setShowModal(false)}}> Close </button>
                    </ModalFooter>
                </Modal>
            }
            
        </div>
    )
}

export default Home
