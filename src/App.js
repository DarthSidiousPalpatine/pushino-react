import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
//POI
import CTA from './components/CTA.jsx';
import AboutUs from './components/AboutUs.jsx';
//Tours
//Registration
import RouteToUs from './components/RouteToUs.jsx';
import Footer from './components/footer.jsx';

import './fonts/fonts.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Container">
        <Hero/>
        <CTA/>
        <AboutUs/>
        <RouteToUs/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
