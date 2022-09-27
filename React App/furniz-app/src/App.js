import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import React from 'react';
class App extends React.Component {
  // return (
  // <>
  //   <Header/>
  //   <Content/>
  //   <AboutUs/>
  //   <ContactUs/>
  //   <Footer/>
  // </>
  // );
  render() {
    return <>
       <Header/>
       <Content/>
       <AboutUs/>
       <ContactUs/>
       <Footer/>
     </>
  }
}

export default App;