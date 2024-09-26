import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Graph from "./components/Graph";
import TeamMember from "./components/TeamMember";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

export default function Home() {
  return (
    <div className="">
      {/* <Preloader /> */}
      <div className="mt-[65px]">
      <Hero  />
      {/* <Graph />
      <TeamMember /> */}
      </div>
      
    </div>
    
  );
}
