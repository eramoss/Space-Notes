import { useState } from "react";
import "./styleComponents.css";

function UserBar() {
  const user = "eramoss";
  const user_welcome = "space de " +  user ;


  const [display,setDisplay] = useState({display:'none'})
  const ShowUser = () => {
        setDisplay({display:'flex'})
  };

  const CloseUser = () =>{
    setDisplay({display:'none'})
}


  return (
    <div>
      <header>
        <img src="./planet.png" alt="logo of Space Notes" />
        <button onClick={ShowUser} className="show-popUp-user">{user_welcome}</button>
        <div onBlur={CloseUser} style={display} className="popUp-user">
          <button value="logout">logout</button>
          <button value="compartilhar feedback">compartilhar feedback</button>
        </div>
        
      </header>
    </div>
  );
}

export default UserBar;
