import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './homeStyles.css';

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <div className='logo-home'>
                    <Link to='/camping' className='category-link'>
                        <img className='category-image' src="https://image.flaticon.com/icons/svg/71/71412.svg" alt="" />
                        <h2 className='category-title'>Camping</h2>
                    </Link>
                </div>
                <div className='logo-home'>
                    <Link to='/cycling' className='category-link'>
                        <img className='category-image' src="https://image.flaticon.com/icons/svg/71/71422.svg" alt="" />
                        <h2 className='category-title'>Cycling</h2>
                    </Link>
                </div>
                <div className='logo-home'>
                    <Link to='/fishing' className='category-link'>
                        <img className='category-image' src="https://image.flaticon.com/icons/svg/71/71440.svg" alt="" />
                        <h2 className='category-title'>Fishing</h2>
                    </Link>
                </div>
                <div className='logo-home'>
                    <Link to='/skiing' className='category-link'>
                        <img className='category-image' src="https://image.flaticon.com/icons/svg/71/71546.svg" alt="" />
                        <h2 className='category-title'>Skiing</h2>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home