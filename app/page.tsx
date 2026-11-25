import Script from "next/script";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Designs from "@/components/sections/Designs";
import Process from "@/components/sections/Process";
import Tools from "@/components/sections/Tools";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/Footer";
import CaseStudyOverlay from "@/components/CaseStudyOverlay";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Projects />
        <About />
        <Designs />
        <Process />
        <Tools />
        <Experience />
      </main>
      <Footer />
      <CaseStudyOverlay />
      <BottomNav />
      <Script src="/js/site.js" strategy="afterInteractive" />
    </>
  );
}
