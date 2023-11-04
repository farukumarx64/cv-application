import { useEffect, useState } from 'react';
import '../styles/ExperienceInfo.css'
import { useFormData } from './FormDataContext';
import { useFormStorage } from './FormStorageContext';

export default function ExperienceInfo() {
  const {formData, updateFormData} = useFormData();
  const {formStorageMap, setFormStorageMap} = useFormStorage();
  const [experienceData, setExperienceData] = useState([])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Position:", formData.position);
    console.log("Company Name:", formData.companyName);
    console.log("Start Date:", formData.startDate);
    console.log("End Date:", formData.endDate);

    setExperienceData([...experienceData, formData])
    console.log(formStorageMap)

    updateFormData({
      position: "",
      companyName: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleCancelButton = () => {
    updateFormData({
      position: "",
      companyName: "",
      startDate: "",
      endDate: "",
    });
  }

  useEffect(() => {
    console.log("Updated Experience Data:", experienceData);
  // Update formStorageMap inside the useEffect to ensure it runs after experienceData state has been updated
  setFormStorageMap((prevMap) => new Map(prevMap.set('experience', experienceData)));
}, [experienceData, setFormStorageMap]);

  return (
    <div id="experience-info">
      <input type="text" placeholder="Position" className="edu-level" name="position"
        value={formData.position}
        onChange={handleInputChange}/>
      <input type="text" placeholder="Company Name" className="college-name" name="companyName"
        value={formData.companyName}
        onChange={handleInputChange}/>
      <input type="date" placeholder="Start Date" name="startDate"
        value={formData.startDate}
        onChange={handleInputChange}/>
      <input type="date" placeholder="End Date" name="endDate"
        value={formData.endDate}
        onChange={handleInputChange}/>
      <div className="personal-buttons">
        <button className="cancel-btn" onClick={handleCancelButton}>Cancel</button>
        <button className="submit-btn" onClick={handleSubmit}>
          <i className="ri-check-line"></i>Done
        </button>
      </div>
    </div>
  );
}
