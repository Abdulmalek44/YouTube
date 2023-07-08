import React, { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';



const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()

    const handleChange = (e) => {
        const search = e.target.value;
        setSearchTerm(search)
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (
        <Paper
            component='form'
            onSubmit={handleClick}

            sx={{
                borderRadius: 20,
                pl: 2,
                border: ' 1px solid #2e2e2e',
                boxShadow: 'none',
                mr: 2,
                background: '#121212',
                color: '#fff'
            }}
        >
            <input
                className='search-bar'
                onChange={handleChange}
                value={searchTerm}
                placeholder='Search...'
                style={{ background: '#121212', color: '#fff' }}
            />

            <IconButton
                type='submit'
                sx={{ p: '5px', color: '#808080', background: '#212121', }}
            >
                <Search />
            </IconButton>
        </Paper >
    )
}
export default SearchBar