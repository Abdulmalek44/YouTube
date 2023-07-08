import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Videos, WorngMessage } from './index';
import { FetchDataAPI } from '../utils/FeatchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);
    const { searchTerm } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchDataAPI(`search?part=snippet&q=${searchTerm}`);
                setVideos(data.items);
                setError(null);
            } catch (error) {
                console.error(error);
                setError(error.message);
            }
        };

        fetchData();
    }, [searchTerm]);

    return (
        <Box
            p={2}
            sx={{
                overflowY: 'auto',
                height: '88vh',
                flex: '2'
            }}
        >
            {error && <WorngMessage />}
            <Typography
                fontWeight='bold'
                variant='h4'
                mb={2}
                sx={{ color: '#fff' }}
            >
                Search Result For: <span style={{ color: '#fc1503' }}> {searchTerm} </span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;
