import Markdown from "react-markdown";
import "../styles/Preview.css";
import { useFormStorage } from "./FormStorageContext";

function PreviewTwo() {
  const markdown = '# Hi, *Pluto*!'
  const {formStorageMap} = useFormStorage()
  console.log(formStorageMap)
  return (
    <div id="preview">
      <Markdown>{markdown}</Markdown>
      <Markdown>{markdown}</Markdown>
    </div>
  );
}

export default PreviewTwo;
