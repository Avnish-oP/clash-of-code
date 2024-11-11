import AboutClashOfCode from "@/components/AboutUs";
import SpecialBounty from "@/components/Blockchain";
import FAQ from "@/components/FAQs";
import GoldSponsor from "@/components/GoldSponsor";
import Hero2 from "@/components/Hero2";
import Organizers from "@/components/Organizers";
import Prizes from "@/components/Prizepool";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import TitleSponsor from "@/components/TechCanvass";
import Tracks from "@/components/Tracks";



export default function Home() {
  return (
    <div className="">
      <Hero2 />
      <div id="about"><AboutClashOfCode /></div>
      <TitleSponsor />
      <Tracks />
      <div id="blockchain"><SpecialBounty /></div>
      <div id="schedule"><Schedule /></div>
      <div id="prizes"><Prizes /></div>
      <GoldSponsor />
      <div id="sponsors"><Sponsors /></div>
      <Organizers />
      <div id="faq"><FAQ /></div>
    </div>
  );
}
