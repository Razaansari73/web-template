import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
    return ( <
        div className = "home-container" >
        <
        div className = "hero-section" >
        <
        h1 > Welcome to MyFood < /h1>{" "} <
        p > Your favorite meals delivered fresh and fast. < /p>{" "} <
        Link to = "/menu"
        className = "hero-btn" >
        Order Now🍽️ { " " } <
        /Link>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Home;