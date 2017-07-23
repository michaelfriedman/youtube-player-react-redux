import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        key={video.etag}
        onVideoSelect={props.onVideoSelect}
        video={video}
      />
    );
  });
  return (
    <ul className="col col-4 list-unstyled">
      {videoItems}
    </ul>
  );
};

export default VideoList;
