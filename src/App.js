import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/Homepage';
import ButtonScroller from './components/BtnScroller/ButtonScroller';
import WhatWeDo from './components/wwd/WhatWeDo';
import WhyAi from './components/Why/WhyAi';
import HeroBanner from './components/HomePage/Homepage';
import Certificate from './components/certificates/certificate';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroBanner/>
      <ButtonScroller/>
      <WhatWeDo/>
      <WhyAi/>
      <Certificate/>
      <Footer/>
    </div>
  );
}

export default App;
