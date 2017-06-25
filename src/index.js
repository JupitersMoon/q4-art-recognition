import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Navbar from './components/navbar.jsx'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends React.Component{

// let video = document.querySelector('video');
// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');
// let localMediaStream = null;
// let errorCallback = function(e) {
//   console.log('Reeeejected!', e);
// };
//
// function snapshot() {
//   if (localMediaStream) {
//     ctx.drawImage(video, 0, 0);
//     // "image/webp" works in Chrome.
//     // Other browsers will fall back to image/png.
//     document.querySelector('img').src = canvas.toDataURL('image/webp');
//   }
// }
//
// video.addEventListener('click', snapshot, false);
//
// // Not showing vendor prefixes or code that works cross-browser.
// navigator.getUserMedia({
//   video: true
// }, function(stream) {
//   video.src = window.URL.createObjectURL(stream);
//   localMediaStream = stream;
// }, errorCallback);



// component links
render() {
  return(
    <Router>
    <div className="container">
      <Navbar/>
      </div>
      </Router>
  )
}



}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
