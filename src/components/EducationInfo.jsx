import { useState } from 'react';
import '../styles/EducationInfo.css'

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown fos">
      <p className='fos-label'>Field of Study: <p className='fos-answer'>{selectedOption}</p></p>
      <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default function EducationInfo() {
  return (
    <div id="education-info">
      <input type="text" placeholder="Education Level" className="edu-level" />
      <input type="text" placeholder="College Name" className="college-name" />
      <Dropdown />
      <div className="personal-buttons">
        <button className="cancel-btn">Cancel</button>
        <button className="submit-btn">
          <i className="ri-check-line"></i>Done
        </button>
      </div>
    </div>
  );
}
