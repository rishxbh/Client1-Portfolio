import './App.css';
import Intro from './components/Intro/Intro';
import Service from './components/service/service'
import Work from './components/work/work'
import Contact from './components/contact/contact'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <Work />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
