import React, { Component } from 'react';
//import './style.css';

class FileUploader extends Component {
  render() {
    return (
      <div className="file-uploader">
        <div>Drop here</div>
        <form action="/">
          <input type="file"/>
        </form>
      </div>
    );
  }
}

export default FileUploader;
