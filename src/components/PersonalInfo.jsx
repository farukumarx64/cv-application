import "../styles/PersonalInfo.css";

function PersonalInfo() {
  return (
    <div id="personal-info">
      <input type="text" placeholder="Full Name" className="name" />
      <input type="text" placeholder="Email" className="email" />
      <input type="tel" placeholder="Phone Number" className="tel" />
      <div className="personal-buttons">
        <button className="cancel-btn">Cancel</button>
        <button className="submit-btn">
          <i className="ri-check-line"></i>Done
        </button>
      </div>
    </div>
  );
}
export default PersonalInfo;
