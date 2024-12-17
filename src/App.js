import React, { useState } from "react";

const PasswordReveal = () => {
  const [step, setStep] = useState(0); // Tracks the current step
  const [input, setInput] = useState(""); // Initial input for password
  const [input1, setInput1] = useState(""); // Left Box input
  const [input2, setInput2] = useState(""); // Center Box input
  const [input3, setInput3] = useState(""); // Right Box input
  const [finalMessage, setFinalMessage] = useState(""); // Final message
  const [showPoster, setShowPoster] = useState(false); // Tracks if the poster should be displayed

  const correctPassword = "SNOWFLAKE"; // Initial password

  const handleInitialCheck = () => {
    if (input.toUpperCase() === correctPassword) {
      setStep(1); // Reveal the three boxes
    } else {
      alert("Incorrect Password! Try again.");
    }
  };

  const checkAnswer1 = () => {
    if (input1.toLowerCase() === "silent") {
      setStep(2); // Reveal the center box
    } else {
      alert("Incorrect! Try again.");
    }
  };

  const checkAnswer2 = () => {
    if (input2.toLowerCase() === "night") {
      setStep(3); // Reveal the right box
    } else {
      alert("Incorrect! Try again.");
    }
  };

  const checkAnswer3 = () => {
    if (input3 === "2024") {
      setFinalMessage(
        "Combine the last three clues, all lowercase,Unlock the PDF to win the race.A journey through riddles, now complete,The treasure awaits—your victory's sweet!"
      );
      setShowPoster(true); // Display the poster
    } else {
      alert("Incorrect! Try again.");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        padding: "20px",
        background: "url('i.imgur.com/xAgBZmF.jpeg') center/cover",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "'Satisfy', cursive",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Initial Riddle */}
        {step === 0 && (
          <div>
            <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
              🎄 Christmas Riddle 🎄
            </h1>
            <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
              On Christmas nights, I fall with grace,




              <br />
              Yet in the cloud, I hold a key place.
              <br />
              I'm made of data, built to scale,
              <br />
              My festive form tells a snowy tale.
              <br />
              What am I? 
            </h2>
            <input
              type="password"
              placeholder="Enter password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />
            <br />
            <button
              onClick={handleInitialCheck}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "5px",
                backgroundColor: "#ff4d4d",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        )}

        {/* Left Box */}
        {step >= 1 && (
          <div>
            <div
              style={{
                display: "inline-block",
                border: "2px solid #ff4d4d",
                borderRadius: "10px",
                padding: "20px",
                margin: "10px",
                maxWidth: "300px",
                background: step === 1 ? "#fff" : "rgba(0, 0, 0, 0.7)",
                color: step === 1 ? "#333" : "#fff",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3>Clue: "Santa starts his journey at the North Pole. Your journey begins where coffee brings joy to your soul."</h3>
              <input
                type="text"
                placeholder="Enter answer"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                disabled={step !== 1}
                style={{
                  padding: "10px",
                  width: "100%",
                  marginTop: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
              <button
                onClick={checkAnswer1}
                disabled={step !== 1}
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: step !== 1 ? "#999" : "#ff4d4d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: step === 1 ? "pointer" : "not-allowed",
                }}
              >
                Submit
              </button>
            </div>

            {/* Center Box */}
            {step >= 2 && (
              <div
                style={{
                  display: "inline-block",
                  border: "2px solid #ffcc00",
                  borderRadius: "10px",
                  padding: "20px",
                  margin: "10px",
                  maxWidth: "300px",
                  background: step === 2 ? "#fff" : "rgba(0, 0, 0, 0.7)",
                  color: step === 2 ? "#333" : "#fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              >
                <h3>Clue: "Notice board"</h3>
                <input
                  type="text"
                  placeholder="Enter answer"
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                  disabled={step !== 2}
                  style={{
                    padding: "10px",
                    width: "100%",
                    marginTop: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                <button
                  onClick={checkAnswer2}
                  disabled={step !== 2}
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    backgroundColor: step !== 2 ? "#999" : "#ffcc00",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: step === 2 ? "pointer" : "not-allowed",
                  }}
                >
                  Submit
                </button>
              </div>
            )}

            {/* Right Box */}
            {step >= 3 && (
              <div
                style={{
                  display: "inline-block",
                  border: "2px solid #00ff00",
                  borderRadius: "10px",
                  padding: "20px",
                  margin: "10px",
                  maxWidth: "300px",
                  background: "#fff",
                  color: "#333",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              >
                <h3>Clue: Solve the maths question</h3>
                <img
  src="/Clue3.jpg"
  alt="Secret Santa Poster"
  style={{
    marginTop: "20px",
    width: "80%",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  }}
/>
                <input
                  type="text"
                  placeholder="Enter answer"
                  value={input3}
                  onChange={(e) => setInput3(e.target.value)}
                  disabled={step !== 3}
                  style={{
                    padding: "10px",
                    width: "100%",
                    marginTop: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
                <button
                  onClick={checkAnswer3}
                  disabled={step !== 3}
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    backgroundColor: step !== 3 ? "#999" : "#00ff00",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: step === 3 ? "pointer" : "not-allowed",
                  }}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        )}

        {/* Final Message */}
        {finalMessage && (
          <div style={{ marginTop: "30px" }}>
            <h2
              style={{
                color: "#fff",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              {finalMessage}
            </h2>
            {showPoster && (
              <img
              src="/SecretSantaPoster.jpg"
              alt="Secret Santa Poster"
              style={{
                marginTop: "20px",
                width: "80%",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
              }}
            
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordReveal;
