import React, { Component } from 'react';
import Sidebar from './sidebar';
import Header from './header';
import About from './about';
import Features from './features';
import Testimonials from './testimonials';
import Shop from './shop';
import Gallery from './gallery';
import Footer from './footer';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="header">
          <Header/>
        </div>
        <div className="about">
          <About/>
        </div>
        <div className="features">
          <Features />
        </div>
        <div className="testim">
          <Testimonials/>
        </div>
        <div className="shop">
          <Shop/>
        </div>
        <div className="gallery">
          <Gallery/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
