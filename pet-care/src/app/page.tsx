import HeroSection from "./components/HeroSection";
import UspList from "./components/USP/UspList";
import TextWithBackground from "./components/TextWithBackground";
import ImageAndText from "./components/ImageAndText";
import UspListImg from "./components/USPImageAndText/UspListImg";
import { frontPageUspListMockData } from "@/data/uspListData";

export default function HomePage() {
  return (
    <main className="HomePage">
      <ImageAndText />
      <HeroSection />
      <UspList />
      <TextWithBackground />
      <UspListImg uspListImgData={frontPageUspListMockData} />
    </main>
  );
}
