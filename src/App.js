import mama from './mama.gif';
import './App.css';
import AdventuresContainer from './containers/AdventuresContainer';
import React from 'react';

class App extends React.Component {
  render() {
  return (
    <div style={{ backgrounsImage: `url("https://www.rainbowtours.co.uk/upload-files/blog-sections/section-123_1236.jpg")`}}>
      <div className="App">
      <header className="App-header">
        <img src={mama} className="App-logo" alt="logo" />
        <AdventuresContainer />
        </header>
      </div>
    </div>




export default App;
