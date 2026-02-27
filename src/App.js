import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/footer.jsx';

import './fonts/fonts.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Container">
        <Hero/>
        <CTA/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
