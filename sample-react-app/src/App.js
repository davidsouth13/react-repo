import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Page from './components/page/Page'


class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Page />
          <Footer />
      </div>
    );
  }
}

export default App;
