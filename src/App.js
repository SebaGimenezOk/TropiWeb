import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AudioPlayer from "./components/AudioPLayer"
import Store from "./components/Store";
import Contacto from "./components/Contacto";
import Video from "./components/Video";
import Top5 from "./components/Top5";


function App() {



  return (
    <div>
      <div className="relative z-0">
        <AudioPlayer />
        <NavBar />
      </div>

      <Video  />
      <div className="relative z-[-1]">
      <Home />
        <Top5 />
    
        <Store />
        <Contacto />
      

      </div>




    </div>
  );
}

export default App;
