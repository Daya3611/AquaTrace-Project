import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Graph from "./components/Graph";
import TeamMember from "./components/TeamMember";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      
      <div className="mt-[65px]">
      <Hero />
      {/* <Graph />
      <TeamMember /> */}
      </div>
      
    </div>
    
  );
}
