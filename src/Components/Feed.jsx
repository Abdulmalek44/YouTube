import { Box, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { SideBar, Videos, WorngMessage } from './index';
import { FetchDataAPI } from '../utils/FeatchFromAPI';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null); // New state to store the error

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchDataAPI(`search?part=snippet&q=${selectedCategory}`);
                setVideos(data.items);
                setError(null); // Clear the error if successful
            } catch (error) {
                console.log(error);
                setError('Error fetching data.'); // Set the error message
            }
        };

        fetchData();
    }, [selectedCategory]);

    return (
        <Stack
            sx={{ flexDirection: { sx: 'column', md: 'row' } }}
        >
            <Box
                sx={{
                    height: { sx: 'auto', md: '91vh' },
                    px: { sx: 0, md: 2 }
                }}
            >
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Box>
            <Box
                p={2}
                sx={{
                    overflowY: 'auto',
                    height: '86vh',
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
                    {selectedCategory} <span style={{ color: '#fc1503' }}>Videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;
