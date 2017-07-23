import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyAuyOZobjd3G0I66Dx7d4p7MPJOHib6x3o';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }
  render() {
    const { videos } = this.state;
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);
    return (
      <div className="container-fluid">
        <div style={{maxWidth: "400px", margin: "0 auto"}}>
        <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={videos}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
