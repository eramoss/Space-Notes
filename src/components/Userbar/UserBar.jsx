import "./styleBar.css";
import HeaderUserBar from "./components/headerUserBar";
import SectionList from "./components/sectionList";



function UserBar() {

  return (
    <div className="bodyUserBar">
        <HeaderUserBar></HeaderUserBar>
        <SectionList></SectionList>
    </div>
  );
}

export default UserBar;
