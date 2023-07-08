import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom';
import { FetchDataAPI } from '../utils/FeatchFromAPI';
import { Box, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material'
import { Videos, Loader, WorngMessage } from './index';


const VideoDetail = () => {

    const [videos, setVideos] = useState([]);
    const [videoDetails, setVideoDetails] = useState('');
    const { id } = useParams();

    useEffect(() => {
        try {
            FetchDataAPI(`videos?part=snippet,statistics&id=${id}`)
                .then((data) => setVideoDetails(data.items[0]))

            FetchDataAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
                .then((data) => setVideos(data.items))
        }
        catch (error) {
            return <WorngMessage />
        }

    }, [id])
    if (!videoDetails?.snippet) return <Loader />;

    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: "column", md: "row" }}>
                <Box flex={1}>
                    <Box sx={{ width: "100%", position: "sticky", top: "50px" }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                            {videoDetails?.snippet?.title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
                            <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                                    {videoDetails?.snippet?.channelTitle}
                                    <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(videoDetails?.statistics?.viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(videoDetails?.statistics?.likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} display='flex' alignItems='center' justifyContent='center'>
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetail