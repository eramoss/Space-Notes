import "./styleHeader.css";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth";

function HeaderUserBar() {
  // eslint-disable-next-line
  const { user } = useContext(AuthContext);

  return (
    <div className="containerBtn">
      <a href="/home">
        <img
          className="imgHeaderUser"
          src="planet.png"
          alt="Space-notes logo"
        />
      </a>

      <button className="btnHeaderUser">
        {" "}
        Space of eramoss <i className="ai-chevron-down"></i>{" "}
      </button>
    </div>
  );
}

export default HeaderUserBar;
