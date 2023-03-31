# React Video Player 

A easy way to reproduce videos on React

```bash
npm i @rogeliolb/react-v-player
```

## How to use

```jsx
import VideoPlayer from "@rogeliolb/react-v-player"
import video from "./../public/video.mp4"

function App() {

  return (
    <div className="App">
      <div className="container">
        <VideoPlayer width="100%" height="100%" url={video}/>
      </div>
    </div>
  )
}

export default App
```

