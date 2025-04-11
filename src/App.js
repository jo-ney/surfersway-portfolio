import About from './components/About';
import './App.css';
import Project from './components/Project';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BtnUp from './components/BtnUp';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
      <BtnUp/>
    </div>
  );
}

export default App;
