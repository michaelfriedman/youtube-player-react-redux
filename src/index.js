import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyAuyOZobjd3G0I66Dx7d4p7MPJOHib6x3o';

class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
