import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import './index.css';
import Videos from './video/MyFavVideo.mp4'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className='header'>Welcome to React Video Player using GCS</div>
    <div className='video-player-section' >
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=JtUIQz_EkUw'/> */}
      {/* <ReactPlayer url={Videos} controls={true}/> */}
      <ReactPlayer className='video-player' url='https://storage.googleapis.com/bell-3_first_bucket/The%20Pursuit%20of%20Happyness%20(8_8)%20Movie%20CLIP%20-%20Final%20Scene_%20Chris%20is%20Hired%20(2006)%20HD.mp4' controls={true}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
