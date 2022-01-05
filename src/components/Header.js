import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <div className = "ui inverted menu">
            <div className="ui container">
               <Link to="/">
                <h2 className='item'>
                    E-COMMERZE
                </h2>
                </Link>
                <Link to="/cart">
                  
                    <div class="ui primary button">
                        <i class="shop icon"></i> Add to Cart
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
