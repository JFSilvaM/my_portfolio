import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import SkillsTools from "./SkillsTools";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <SkillsTools />
      </main>
    </>
  );
}
