import "../styles/NavBar.css";
import PersonalInfo from './PersonalInfo'
import EducationInfo from './EducationInfo'
import ExperienceInfo from "./ExperienceInfo";
function NavBar({onComponentChange}) {
  return (
    <div id="navbar">
      <button className="nav-button" onClick={() => onComponentChange(<PersonalInfo />)}>About</button>
      <button className="nav-button" onClick={() => onComponentChange(<EducationInfo />)}>Education</button>
      <button className="nav-button" onClick={() => onComponentChange(<ExperienceInfo />)}>Experience</button>
    </div>
  );
}
export default NavBar;
