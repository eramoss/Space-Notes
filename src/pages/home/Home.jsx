import "./home.css";

function Home() {
  function HandleButton() {
    window.location.href = "login";
  }

  return (
    <div className="home">
      <header className="header-home">
        <a href="https://github.com/eramoss" className="newsletter-home">
          JOIN MY GITHUB
        </a>
        <h1 className="changelog-home">
          WELCOME
        </h1>
      </header>
      <main className="main-home">
        <h1 className="title-home">Spaces</h1>
        <img className="img-home" src="./planet.png" alt="planet logo" />
        <p className="p-home">
          <strong className="strong">Notes, clean </strong> and{" "}
          <strong className="strong">simple</strong> to get you’re{" "}
          <strong className="underline">tasks done</strong> best.
        </p>
        <button onClick={HandleButton} className="button-home">
          GET STARTED
        </button>
      </main>

      <aside className="footer-home">
        <img className="footer-img-home" src="./unsplash.png" alt="" />
      </aside>
    </div>
  );
}
export default Home;
