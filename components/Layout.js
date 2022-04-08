import Home from "./Home";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  );
}
