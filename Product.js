import React from 'react';
import "./Product.css"

function Product() {
    return (
        <div className="product">
            <div className="product__head">
                <h3>1   Introduction</h3>
                <p>Put your logic to the test with these warmups</p>
            </div>
            <div className="product__row">
                <div className="product__body1">
               <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" alt= "" />
               <h2>Warmup puzzles</h2>
               <p>Get started with some warmups</p>
               
               </div>

               <div className="product__body2">
               <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png?width=280" alt= "" />
               <h2>Truth-Seeking</h2>
               <p>Who or what is telling the?</p>
               
               </div>

               
               



            </div>
        </div>
    )
}

export default Product;
