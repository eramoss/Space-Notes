import './home.css'


function Home () {
    function HandleButton(){
        window.location.href = "login"
      }

  return(
    <div className='home'>
        <header className='header-home'>
            <a href='https://github.com/eramoss' className='newsletter-home'>JOIN THE NEWSLETTER</a>
            <a href='changelog.com' className='changelog-home'>CHANGELOG</a>
        </header>
        <main className='main-home'>
            <h1 className='title-home'>Spaces</h1>
            <img className='img-home' src='./planet.png' alt="planet logo" />
            <p className='p-home'><h2 className='strong'>Simple, clean </h2> and <h2 className='strong'>fast</h2> to get you’re <h2 className='underline'>tasks done</h2> best.</p>
            <button onClick={HandleButton} className='button-home'>GET STARTED</button>
        </main>

        <aside className='footer-home'><img className='footer-img-home' src="./unsplash.png" alt="" /></aside>
    </div>
);
}

export default Home;