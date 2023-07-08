import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom';
import logo from '../Image/YouTube-White-Full-Color-Logo.wine.svg';
import SearchBar from './SearchBar';

const Nav = () => {
    return (
        <>
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-between'
                sx={{ background: '#0f0f0f', position: 'sticky', zIndex: '1', top: '0' }}
            >
                <Link to='/'>
                    <img src={logo} alt='N_photo' height={45}
                        style={{ paddingLeft: '10px' }}
                    />
                </Link>
                <SearchBar />
            </Stack >
        </>
    )
}

export default Nav
