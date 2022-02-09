import React from 'react';
import './Home.sass';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Typography className='center' variant="h2" component="div">
                <span>The Swift</span>
                <Link to='/index' className='explore-link'>
                    Index
                </Link>
            </Typography>
            <Typography variant='subtitle1' className='center'>
                <span>
                    All of Taylor Swift's songs objectively rated. 
                </span>
            </Typography>
            <div className='home-banner-container spacing'>
                <div>
                    <img className='home-img' alt='tay1' src='https://www.morrisonhotelgallery.com/images/big/McClister_TaylorSwift_RS_1224.jpg' />
                </div>
                <div>
                    <img className='home-img' alt='tay1' src='https://img5.goodfon.com/wallpaper/nbig/a/1e/taylor-swift-devushka-litso-vzgliad-cherno-beloe.jpg' />
                </div>
                <div>
                    <img className='home-img' alt='tay1' src='https://www.rollingstone.com/wp-content/uploads/2021/02/taylor-swift-tour-canceled.jpg' />
                </div>
            </div>
            <div className='explore-container'>
                <Button component={Link} to='/index' id='explore-button' variant="outline" color='primary'>Explore</Button>
            </div>
            <Typography variant='h3'>
                Top Rated
            </Typography>
        </div>
    );
}

export default Home;