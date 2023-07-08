import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FetchDataAPI } from '../utils/FeatchFromAPI';
import { Videos, ChannelCard } from "./index";

const ChannelDetail = () => {
    const [videos, setVideos] = useState([]);
    const [channelDetail, setChannelDetail] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        try {
            const fetchResults = async () => {
                const channelData = await FetchDataAPI(`channels?part=snippet&id=${id}`);
                setChannelDetail(channelData?.items[0]);

                const viseodsata = await FetchDataAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
                setVideos(viseodsata.items)
            }
            fetchResults();
        }
        catch (error) {
            console.log(error);
        }
    }, [id])

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    height: '300px',
                    background: ' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 42%, rgba(0,212,255,1) 100%)',
                    zIndex: 10,
                }} />
                <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
            </Box >
            <Box display='flex' p='2' mt='60px'>
                <Box />
                <Videos videos={videos} />

            </Box>
        </Box >
    )
}

export default ChannelDetail