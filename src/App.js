import Layout from "./components/Layout/Layout.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import Education from "./pages/Education/Education.js";
import Footer from "./pages/Footer/Footer.js";
import Projects from "./pages/Projects/Projects.js";
import TechStack from "./pages/TechStack/TechStack.js";
import WorkExp from "./pages/WorkExp/WorkExp.js";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext.js";


function App() {

  const [theme] = useTheme();

  return (
    <>
        <div id={theme}>
        <Layout/>
        <About/>
        <Education/>
        <TechStack/>
        <Projects/>
        <WorkExp/>
        <Contact/>
        <Footer/>
        </div>
        <ScrollToTop smooth color="black" className='scroll' />
    </>
  );
}

export default App;
