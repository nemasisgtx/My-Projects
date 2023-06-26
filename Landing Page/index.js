import { createRoot } from "react-dom/client";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<MyComponent />);

const htmlContent = require("./landingPage.html");

export default function MyComponent() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
