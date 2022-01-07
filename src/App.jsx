import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
    return <div>
        <Sidebar/>
        <Intro/>
        <About/>
      </div>;
  };
  
  export default App;