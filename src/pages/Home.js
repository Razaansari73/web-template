import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1> Welcome to MyFood </h1>{" "}
        <p> Your favorite meals delivered fresh and fast. </p>{" "}
        <a href="/menu" className="hero-btn">
          {" "}
          Order Now🍽️{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
}

export default Home;
