import React from 'react'
import { VideoCard, ChannelCard } from './index'
import { Box, Stack } from '@mui/material'


const Videos = ({ videos, direction }) => {

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={2}>
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    );
}


export default Videos
