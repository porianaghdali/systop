import HeroSection from "./heroSection/heroSection";
import Baner from "./baner/baner";
import Repairs from "./repairs/repairs";
import Bloges from "./bloges/bloges";
export default function HomePage() {
  return (
    <div className="  text-center ">
      <HeroSection />
      <Baner/>
      <Repairs/>  
      <Bloges/>

    </div>
  );
}
