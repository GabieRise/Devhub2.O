import { useState } from "react";
import Editor from "@monaco-editor/react";

function CodeEditor({ initialCode = "// Start coding here" }) {
  const [code, setCode] = useState(initialCode);

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "5px", margin: "1rem 0" }}>
      <Editor
        height="300px"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />
    </div>
  );
}

export default CodeEditor;
