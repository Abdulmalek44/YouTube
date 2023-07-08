import React from 'react'
import { demoThumbnailUrl, demoChannelTitle, demoVideoTitle, demoVideoUrl } from '../utils/constants'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { xs: '330px', sm: '358px', md: "300px", }, boxShadow: "none", borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ width: { xs: '330px', sm: '358px' }, height: 180 }} />
            </Link>
            <CardContent sx={{ bgcolor: '#212121', height: '50px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                        {snippet?.title.slice(0, 27) || demoVideoTitle.slice(0, 27)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelTitle}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                        {snippet?.channelTitle.slice(0, 27) || demoChannelTitle}
                        <CheckCircle color='gray' sx={{ fontSize: 12, ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card >
    )

}
export default VideoCard