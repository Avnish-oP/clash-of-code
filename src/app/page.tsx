import AboutClashOfCode from "@/components/AboutUs";
import Hero2 from "@/components/Hero2";
import Organizers from "@/components/Organizers";
import Schedule from "@/components/Schedule";
import Tracks from "@/components/Tracks";


export default function Home() {
  return (
    <div className="">
      <Hero2 />
      <AboutClashOfCode />
      <Tracks />
      <Schedule />
      <Organizers />
    </div>
  );
}
