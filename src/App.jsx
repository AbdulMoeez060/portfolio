import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
    return <div>
        <Sidebar/>
        <Intro/>
        <About/>
        <ProjectList/>
      </div>;
  };
  
  export default App;