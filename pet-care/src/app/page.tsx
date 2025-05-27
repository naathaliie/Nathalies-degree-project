import HeroSection from "./components/HeroSection";
import UspList from "./components/USP/UspList";
import TextWithBackground from "./components/TextWithBackground";
import ImageAndText from "./components/ImageAndText";
import UspListImg from "./components/USPImageAndText/UspListImg";
import { uspListMockData } from "@/data/uspListData";

export default function HomePage() {
  const uspListImgData = uspListMockData.filter((item) => {
    return item.category === "FrontPageUsp";
  });
  return (
    <main>
      <ImageAndText />
      <HeroSection />
      <UspList />
      <TextWithBackground />
      <UspListImg uspListImgData={uspListImgData} />
    </main>
  );
}
