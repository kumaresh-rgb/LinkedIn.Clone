import React from 'react';
import ReactDOM from 'react-dom';
import App from './heading/header';
import Sidebar from './heading/sidebar';
import '../src/css-compo/index.css'
import Feed from './heading/feed'


function Linkedlin() {
  return (
    <div classsName="Main-app">
      <App/>
      <div className="Main-sidebar">
        <Sidebar/>
        <Feed/>
        </div>
      </div>
     
  
    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Linkedlin/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

