import React, { Component } from 'react';
import logo from './logo.svg';

import FileUploader from './components/file-uploader';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FileUploader/>
      </div>
    );
  }
}

export default App;
