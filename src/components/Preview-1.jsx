import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import "../styles/Preview.css";
import { useFormStorage } from "./FormStorageContext";

function PreviewTwo() {
  const defaultMarkdown = `# Curriculum Vitae
  ## Personal Information
  - **Full Name:** John Doe
  - **Email:** johndoe@example.com
  - **Phone:** (123) 456-7890
  - **Address:** 123 Main St, Cityville, State, 12345
  
  ## Work Experience
  ### Software Engineer
  - **Company:** Tech Solutions Inc.
  - **Duration:** January 20XX - Present
  - **Responsibilities:** Developed and maintained web applications, collaborated with cross-functional teams, participated in code reviews.
  
  ## Education
  ### Bachelor of Science in Computer Science
  - **University:** Example University
  - **Graduation Year:** 20XX
  - **GPA:** 3.8`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const { formStorageMap } = useFormStorage();

  useEffect(() => {
    const formData = formStorageMap.get("personal");
    console.log(formData, '121')
    if (formData && Object.values(formData).some((value) => value !== "")) {
      const newMarkdown =
        `# Curriculum Vitae\n\n` +
        `## Personal Information\n` +
        `- **Full Name:** ${formData.fullName || ""}\n` +
        `- **Email:** ${formData.email || ""}\n` +
        `- **Phone:** ${formData.phoneNumber || ""}\n\n` +
        `## Work Experience\n` +
        `- **Company:** ${formData.company || ""}\n` +
        `- **Duration:** ${formData.duration || ""}\n` +
        `- **Responsibilities:** ${formData.responsibilities || ""}\n\n` +
        `## Education\n` +
        `- **Degree:** ${formData.degree || ""}\n` +
        `- **University:** ${formData.university || ""}\n` +
        `- **Graduation Year:** ${formData.graduationYear || ""}`;

      setMarkdown(newMarkdown);
    } else {
      // Set default content if formData is not available or empty
      setMarkdown(defaultMarkdown);
    }
  }, [formStorageMap]);

  return (
    <div id="preview">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}

export default PreviewTwo;
