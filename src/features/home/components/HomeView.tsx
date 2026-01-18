import HomeContent from "./HomeContent";
import HomeBanner from "./HomeBanner";

export default function HomeView() {
  return (
    <div className="home-view">
      <HomeBanner />
      <HomeContent />
    </div>
  );
}
