import React, { Component } from 'react';
import VideoListItem from './video-list-item';

// class VideoList extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const videoList = this.props.videos.map((video) => {
//             return <VideoListItem video={ video }/>
//         });

//         return (
//             <ul className="col-md-4 list-group">
//                 { videoList }
//             </ul>
//         );
//     }
// }


const VideoList = (props) => {
  const videoList = props.videos.map((video) => {
    return <VideoListItem key={ video.etag }  video={ video }/>
  });

  return (
    <ul className="col-md-4 list-group">
      { videoList }
    </ul>
  );
};

export default VideoList;
