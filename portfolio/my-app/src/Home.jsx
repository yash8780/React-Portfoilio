import { Link, useLocation } from "react-router-dom";
import "./Home.css";
export default function Home() {
  // const loaction = useLocation();
  return (
    <div className="App">
      
      
     
    <div id="text">
    <div className="intro">
        <p id="name"> Yash Shah <br/><span id="t1"> Ui/Ux Designer & Front end Developer</span></p>
       
      </div>
    I am Yash Shah. I am 20 years old and currenly pursuing Computer Engineering from G.E.C Modasa.
                            I live in Ahmedabad.
                            I am a Design & Computer science Enthusiast. I love to Code and design Stuffs.
    </div> 
    <div>
       <img src="blogging.png" alt="" />
    </div>
    </div>
    
  );
}
