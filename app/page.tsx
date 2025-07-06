import Image from "next/image";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import CustomCursor from "./components/CustomCursor";
import OverlayNext from "./components/About"; // 

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Landing /> {/* This includes your image sliders and JarvisSection */}
      </div>

      <OverlayNext /> 

      <CustomCursor />
      
    </div>
  );
}
