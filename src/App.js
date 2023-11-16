import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ImageSlider from './components/ImageSlider';



function App() {
  const slides = [
    { url: "/assets/1.png", title: "beach" },
    { url: "/assets/10167.jpg", title: "boat" },
    { url: "/assets/11873.jpg", title: "forest" },
    { url: "/assets/3.png", title: "city" },
    { url: "/assets/2.png", title: "italy" },
  ];

  const containerStyles = {
    width: "800px",
    height: "800px",
    margin: "0 auto",
  };

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Home />
        <Home />
        <Home />
        <div>
          <h1>Hello monsterlessons</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides} /> {/* Pass the slides prop */}
          </div>
        </div>
      
     
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
