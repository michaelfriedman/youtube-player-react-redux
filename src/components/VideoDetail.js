import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div style={{margin: "0 auto"}}>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={url}
          title={video.snippet.title}
          className="embed-responsive-item"
        />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
