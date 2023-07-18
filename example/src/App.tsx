import React from 'react'
import './App.css'
import VideoPlayer from "../../src/index"

function App() {

  return (
    <div className="App">
      <div className="container">
        <VideoPlayer width="100%" height="100%" url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
      </div>
    </div>
  )
}

export default App
