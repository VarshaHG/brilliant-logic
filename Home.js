import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__head">
            <img className="home__image" src="https://brilliant.org/site_media/version-71a486a605/images/coupon-banner-bg.svg" 
            alt=""  
            />
            <div className="home__page">    
              
              <div className="home__option">
                 <Link to="/courses" className="home__link">   
                 <span className="home__optionLineOne"> *back to all courses</span> 
                 </Link>
                 <h2>Logic</h2>
                 <h3>Stretch your analytic with Knights,Knaves,logic gates, and more</h3> 
                 

                 <p>The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.</p>   
     
                 </div> 
                 <div className="home__right">
                 <img className="home__rightImage" src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254" />
                 </div>
                
                 
                 </div>
                 </div>
                 
                 <Product />
                 
               
            </div>
            //https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280
            //https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png?width=280
    )
    //	https://ds055uzetaobb.cloudfront.net/brioche/chapt…ne_Logic_and_Strategy-jrTuIK-2FIeRk.png?width=280
}

export default Home
