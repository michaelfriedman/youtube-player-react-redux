import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyAuyOZobjd3G0I66Dx7d4p7MPJOHib6x3o';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    YTSearch({
      key: API_KEY,
      term: 'surfboards',
    }, videos => this.setState({ videos }));
  }
  render() {
    const { videos } = this.state;
    return (
      <div>
        <SearchBar />
        <VideoList videos={videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
