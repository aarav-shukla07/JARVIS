import Image from "next/image";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Head from "next/head";
import CustomCursor from "./components/CustomCursor";

<Head>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
</Head>


export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <CustomCursor />
    </div>
  );
}
