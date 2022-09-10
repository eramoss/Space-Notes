import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import UserBar from "../../components/UserBar";



function Main() {

  const {logout} = useContext(AuthContext);

  const handleLogout = () => {
    logout()
  }

   return <div>
    <UserBar></UserBar>

   
  </div>;
}

export default Main;
