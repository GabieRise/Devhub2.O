import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Write your code here");
  const iframeRef = useRef(null);

  const runCode = () => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;
    const doc = iframe.contentDocument;

    if (language === "javascript") {
      doc.open();
      doc.write(`
        <html>
          <body>
            <script>
              try {
                ${code}
              } catch (err) {
                document.body.innerHTML = "<pre style='color:red'>" + err + "</pre>";
              }
            <\/script>
          </body>
        </html>
      `);
      doc.close();
    }

    if (language === "html" || language === "css") {
      doc.open();
      doc.write(code);
      doc.close();
    }

    if (language === "react") {
      doc.open();
      doc.write(`
        <h2>React requires a build tool (like Vite or Babel).</h2>
        <p>This demo does not compile JSX.</p>
      `);
      doc.close();
    }

    if (language === "php") {
      doc.open();
      doc.write(`
        <h2>PHP cannot run in the browser.</h2>
        <p>It requires a server like XAMPP or Node backend.</p>
      `);
      doc.close();
    }
  };

  return (
    <div className="editor-wrapper">
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="javascript">JavaScript</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="react">React</option>
        <option value="php">PHP</option>
      </select>

      <Editor
        height="300px"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />

      <button onClick={runCode}>Run Code</button>

      <iframe
        ref={iframeRef}
        title="output"
        style={{
          width: "100%",
          height: "200px",
          border: "1px solid #ccc",
          marginTop: "10px",
        }}
      />
    </div>
  );
}

export default CodeEditor;
