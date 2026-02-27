import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import CTA from './components/cta.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <container>
        <Hero/>
        <CTA/>
      </container>
      <Footer/>
    </div>
  );
}

export default App;
