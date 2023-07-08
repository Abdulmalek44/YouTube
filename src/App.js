import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom'
import { ChannelDetail, Feed, Nav, SearchFeed, VideoDetail } from './Components';


const App = () => (
  <Box>
    <Nav />
    <Routes>
      <Route path='/YouTube' element={<Feed />} />
      <Route path='/video/:id' element={<VideoDetail />} />
      <Route path='/channel/:id' element={<ChannelDetail />} />
      <Route path='/search/:searchTerm' element={<SearchFeed />} />
    </Routes>
  </Box>
)

export default App;
