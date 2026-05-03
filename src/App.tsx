import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Story from './pages/Story';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Location from './pages/Location';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="menu" element={<Menu />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
    </Router>
  );
}
