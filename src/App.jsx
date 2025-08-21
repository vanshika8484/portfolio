import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/herosection/heroMain";
import SubHeroSection from "./components/herosection/SubHeroSection";
import HeroGradient from "./components/herosection/heroGradient";
import AboutMeMain from "./components/aboutMe/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillMain from "./components/skillSection/SkillMain";
import SubSkills from "./components/skillSection/SubSkills";
import ProjectMain from "./components/projectSection/ProjectMain";
import ConatactMeMain from "./components/contactMeSection/ConatactMeMain";
import FooterMain from "./components/footer/FooterMain";

const App = () => {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillMain />
      <SubSkills />
      <ProjectMain />
      <ConatactMeMain />
      <FooterMain />
      <HelperSection />
    </main>
  );
};
export default App;
