import "./styleComponents.css";



function UserBar() {

  return (
    <div className="body">
      <div className="user-bar">
        <header className="header-user-bar">
          <img className="img-user-bar" src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="user profile icon " />
          
          <div className="title-user-bar">
            <h1 className="username">eramoss</h1>
            <h2 className="user-subtitle">subtitle</h2>
          </div>
          
        </header>
        
      </div>
    </div>
  );
}

export default UserBar;
