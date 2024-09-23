import { BrowserRouter } from 'react-router-dom';
import Homepage from './components/Homepage';
import VideoPage from './components/VideoPage';
import { useRoutes } from "react-router-dom";

function AppRoutes() {
  // Define routes for Homepage and VideoPage
  const routes = useRoutes([
    { path: '/', element: <Homepage /> },        // Route for the homepage
    { path: '/room/:id', element: <VideoPage /> }, // Route for the video page, room ID passed in URL
  ]);

  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
