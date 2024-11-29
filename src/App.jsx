import { useState } from "react";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Program from "./Components/Program/Program";
import TestiMonials from "./Components/Testimonials/Testmonials";
import Title from "./Components/Title/Title";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {

    const [platState, setPlatState] = useState(false)



  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cntaner">
        <Title subtitle="OUR PROGRAM" title="What We Offer" />
        <Program />
        <About setPlatState={setPlatState}/>
        <Title subtitle="Gallery" title="Camps Photos " />
        <Campus/>
        <Title subtitle="TESTIMONIAL`S" title="What Student Says " />
        <TestiMonials/>
        <Title subtitle="Contact US" title="Get In Touch " />
        <Contact/>
        <Footer/>
      </div>
      {/* <VideoPlayer platState={platState}  setPlatState={setPlatState}/> */}
    </div>
  );
};

export default App;
