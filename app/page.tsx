import Header from "./components/header";
import Hero from "./components/hero";
import Aboutme from "./components/aboutme";
import Timeline from "./components/timeline";
import Skills from "./components/skills";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section id="home" className={`bg-indigo-200`}>
          <Hero />
        </section>
        <section className="bg-gray-200 shadow shadow-gray-300 h-max flex flex-wrap items-center  justify-center  " id="aboutme">
          <Aboutme />
        </section>
        <section id="experience" className={`bg-indigo-200 pt-1`}>
          <Timeline />
        </section>
        <section className="bg-gray-200 shadow shadow-gray-300 py-8">
          <Skills />
        </section>
      </main>
      <Footer />
    </>
  );
}
