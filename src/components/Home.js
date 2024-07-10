import React from 'react';
import {Link} from 'react-router-dom';
//import {useState} from 'react';
import './common.css'
function Home(){
    return(
        <section className="qqq"> 
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>
            <link rel="stylesheet" href="App.css"></link>
            <div className="welcomeScreen pranav">
                <p>
                <br></br>
                Welcome
                </p>
                <div className="homeMsg aaa">"Indulge in a celebratory dining experience, effortlessly reserve your table online, and savor culinary delights in Tamil Nadu, moments from your hostel."</div>
                <div className="quote mb-4">Experience Fine Dining with Ease

Book Your Table Today at Wraps and Fries</div>
            </div>
            <Link to='/login'><button id="register-link" className="btn btn-danger m-4 dd">Make a reservation</button></Link>
        </section>
    );
}

export default Home;