import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import POI from './components/poi.jsx';
import CTA from './components/CTA.jsx';
import AboutUs from './components/AboutUs.jsx';
import Tours from './components/Tours.jsx';
import Registration from './components/Registration.jsx';
import RouteToUs from './components/RouteToUs.jsx';
import Footer from './components/footer.jsx';

import './fonts/fonts.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Container">
        <Hero/>
        <POI/>
        <CTA/>
        <AboutUs/>
        <Tours/>
        <Registration/>
        <RouteToUs/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
