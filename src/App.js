import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <form encType="multipart/form-data" action="/" method="post">
          <p>File: <input type="file" name="file" className="btn btn-outline-secondary upload"/></p>
          <p><input type="submit" value="Upload" className="btn btn-outline-success"/></p>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
