import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import './index.css';
import Videos from './video/MyFavVideo.mp4'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className='video-player test' >
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=JtUIQz_EkUw'/> */}
      <ReactPlayer url={Videos} controls={true}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
