import "../styles/PersonalInfo.css";
import { useFormData } from "./FormDataContext";
import { useFormStorage } from "./FormStorageContext";

function PersonalInfo() {
  const {formData, updateFormData} = useFormData();
  const {formStorageMap, setFormStorageMap} = useFormStorage();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Full Name:", formData.fullName);
    console.log("Email:", formData.email);
    console.log("Phone Number:", formData.phoneNumber);
    console.log(formData, 'ww')
    
    setFormStorageMap((prevMap) => new Map(prevMap.set('personal', formData)));
    console.log(formStorageMap)

    updateFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
    });
  };

  const handleCancelButton = () => {
    updateFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
    });
  }

  return (
    <div id="personal-info">
      <input
        type="text"
        placeholder="Full Name"
        className="name"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Email"
        className="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
      />
      <div className="personal-buttons">
        <button className="cancel-btn" onClick={handleCancelButton}>Cancel</button>
        <button className="submit-btn" onClick={handleSubmit}>
          <i className="ri-check-line"></i>Done
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
