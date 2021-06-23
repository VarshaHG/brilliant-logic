import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DehazeIcon from "@material-ui/icons/Dehaze";

function Header() {
    return (
        
         <nav className="header">
         <Link to="/">   
         <img 
         className="header__logo" 
         src="data:image/png;base64,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" alt="" />   
         </Link>

         <div className="header__nav">
             <Link to="/daily-problems/" className="header__link">
             <div className="header__option">
              <span className="header__optionLineOne">TODAY</span>
              </div>
             </Link>

             <Link to="/courses/" className="header__link">
             <div className="header__option">
              <span className="header__optionLineOne">COURSES</span>
              </div>
             </Link>

             <Link  className="header__link">
             <div className="header__option">
              <span className="header__optionLineOne">PRACTICE</span>
        
              </div>
             </Link>

         </div>

        <div className="header__search">
         <input type="text" className="header__searchInput" />
         <SearchIcon className="header__searchIcon"/>
         </div>

         <Link className="header__link">
             <div className="header__trail">
             <button className="header__trailLineOne">GO PREMIUM</button>
             </div>
         </Link> 


         <Link className="header__link">
          <div className="header__optionDehaze">
            <DehazeIcon />
          </div>
         </Link>
        </nav>
        
    
      
    )
}

export default Header;
