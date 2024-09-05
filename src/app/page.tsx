import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Graph from "./components/Graph";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-[100px]">
      <Hero />
      <Graph />
      </div>
    </div>
  );
}
