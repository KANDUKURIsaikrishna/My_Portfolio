import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import BlogPlatforms from "@/components/BlogPlatforms";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TawkTo from "@/components/TawkTo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Writing />
      <BlogPlatforms />
      <Contact />
      <Footer />
      <TawkTo />
    </div>
  );
};

export default Index;
