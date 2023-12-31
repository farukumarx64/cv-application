import "../styles/EducationInfo.css";
import { useState, useEffect } from "react";
import { useFormData } from "./FormDataContext";
import { useFormStorage } from "./FormStorageContext";

const Dropdown = ({ value, handleInputChange, name }) => {
  const [selectedOption, setSelectedOption] = useState(value);


  useEffect(() => {
    // When the `value` prop changes from the parent, update the selected option
    setSelectedOption(value);
  }, [value]);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    handleInputChange({
      target: {
        name: name,
        value: selectedValue
      }
    });
  };

  return (
    <div className="dropdown fos">
      <div className="fos-label">
        Field of Study: <p className="fos-answer">{selectedOption}</p>
      </div>
      <select id="dropdown" value={selectedOption || ""} onChange={handleDropdownChange}>
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default function EducationInfo() {
  const {formStorageMap, setFormStorageMap} = useFormStorage();
  const [educationData, setEducationData] = useState([])
  const {formData, updateFormData} = useFormData({
    educationLevel: "",
    collegeName: "",
    fieldOfStudy: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("education Level:", formData.educationLevel);
    console.log("college Name:", formData.collegeName);
    console.log("field Of Study:", formData.fieldOfStudy);

    setEducationData([...educationData, formData])
    console.log(formStorageMap)
    updateFormData({
      educationLevel: "",
      collegeName: "",
      fieldOfStudy: "",
    });
  };

  const handleCancelButton = () => {
    updateFormData({
      educationLevel: "",
      collegeName: "",
      fieldOfStudy: "",
    });
  };

  useEffect(() => {
    console.log("Updated Education Data:", educationData);
  // Update formStorageMap inside the useEffect to ensure it runs after educationData state has been updated
  setFormStorageMap((prevMap) => new Map(prevMap.set('education', educationData)));
}, [educationData, setFormStorageMap]);
  return (
    <div id="education-info">
      <input
        type="text"
        placeholder="Education Level"
        className="edu-level"
        name="educationLevel"
        value={formData.educationLevel}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="College Name"
        className="college-name"
        name="collegeName"
        value={formData.collegeName}
        onChange={handleInputChange}
      />
      <Dropdown value={formData.fieldOfStudy} handleInputChange={handleInputChange} name="fieldOfStudy"/>
      <div className="personal-buttons">
        <button className="cancel-btn" onClick={handleCancelButton}>
          Cancel
        </button>
        <button className="submit-btn" onClick={handleSubmit}>
          <i className="ri-check-line"></i>Done
        </button>
      </div>
    </div>
  );
}
