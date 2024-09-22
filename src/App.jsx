import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import VideoPage from './components/VideoPage';
import { useRoutes } from "react-router-dom";

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Homepage /> },
    { path: '/room/:id', element: <VideoPage /> },
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
