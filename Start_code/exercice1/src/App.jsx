import React from "react";

export default function App() {
  const [progress,setProgress] = React.useState(""); 
  const getScoreBarStyle = () => {
    // 1- Compute width
    
    const scoreWidth = `${progress}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };
  function onProgress(e){
    setProgress(e.target.value);
  }
  
  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={onProgress}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
