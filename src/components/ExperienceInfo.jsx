import '../styles/ExperienceInfo.css'

export default function ExperienceInfo() {
  return (
    <div id="experience-info">
      <input type="text" placeholder="Position" className="edu-level" />
      <input type="text" placeholder="Company Name" className="college-name" />
      <input type="date" placeholder="Start Date"/>
      <input type="date" placeholder="End Date"/>
      <div className="personal-buttons">
        <button className="cancel-btn">Cancel</button>
        <button className="submit-btn">
          <i className="ri-check-line"></i>Done
        </button>
      </div>
    </div>
  );
}
