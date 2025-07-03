import Image from "next/image";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Landing />
      </div>

      

      <CustomCursor />
    </div>
  );
}
