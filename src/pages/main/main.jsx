import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { token } from "../../contexts/auth";

function Main() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return <div>
    <button onClick={console.log(token)}> aaaaaaaaaaaaaaaaaaaaaaaaaa </button>
  </div>;
}

export default Main;
