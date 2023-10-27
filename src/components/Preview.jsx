import "../styles/Preview.css";

function Preview() {
  return (
    <div id="preview">
      <h1 className="preview-name">Your Name</h1>
      <div>
        <a href="mailto:john.doe@gmail.com">
          <p>john.doe@gmail.com</p>
        </a>
        <a href="tel:+2348012345678">
          <p>(234) 801-234-5678</p>
        </a>
      </div>
      <h2>EXPERIENCE</h2>
      {content}
      <h2>EDUCATION</h2>
      {content}
    </div>
  );
}

function content(header, contents) {
  return (
    <div>
      <h3>{header}</h3>
      {contents.forEach((content) => (
        <p>{content}</p>
      ))}
    </div>
  );
}
export default Preview;
