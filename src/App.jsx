import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "Tanja",
      text: "Hei, mukava että olet täällä. Miten sinulla menee tänään?",
      intent: "greeting",
    },
  ]);
  const [currentIntent, setCurrentIntent] = useState("greeting");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userText,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userText }),
      });

      console.log("HTTP status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      console.log("API data:", data);

      setCurrentIntent(data.intent);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.response,
          intent: data.intent,
        },
      ]);
    } catch (error) {
      console.error("Fetch/API error:", error);

      setCurrentIntent("confusion");

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `Backend error: ${error.message}`,
          intent: "confusion",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getIntentLabel = (intent) => {
  switch (intent) {
    
    case "greeting":
      return "Greeting / calm response";
    case "positive":
      return "Positive / uplifting";
    case "loneliness":
      return "Loneliness / emotional support";
    case "low_mood":
      return "Low mood / emotional support";
    case "not_in_mood":
      return "Not in mood / respectful space";
    case "confusion":
      return "Confusion / clarification";
    case "silence":
      return "Silence / fallback";
    case "goodbye":
      return "Goodbye / closing";
    case "neutral":
      return "Neutral / small talk";
    default:
      return "No intent yet";
  }
};

  return (
    <div className="app">
      <div className="container">
        <div className="hero-card">
          <p className="eyebrow">Conversational AI demo</p>
          <h1>Safe Conversation Prototype</h1>
          <p className="subtitle">
            A small prototype exploring safe, calm and human-centered responses
            for adults.
          </p>
        </div>

        <div className="chat-wrapper">
          <div className="chat-box">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.role === "user" ? "user-message" : "assistant-message"
                }`}
              >
                <div className="chat-role">
                  {message.role === "user" ? "You" : "Assistant"}
                </div>
                <div>{message.text}</div>
              </div>
            ))}

            {loading && (
              <div className="chat-message assistant-message">
                <div className="chat-role">Tanja</div>
                <div>Typing...</div>
              </div>
            )}
          </div>

          <div className="input-section">
            <input
              type="text"
              placeholder="Kirjoita viesti..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />
            <button onClick={handleSend} disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>

        <div className="info-grid">
          <div className="card">
            <h2>Current intent</h2>
            <span className={`intent-badge ${currentIntent || "empty"}`}>
              {getIntentLabel(currentIntent)}
            </span>
          </div>

          <div className="card">
            <h2>API flow</h2>
            <ul>
              <li>Frontend sends message to POST /api/chat</li>
              <li>Backend detects intent</li>
              <li>Backend chooses safe response</li>
              <li>Frontend updates chat history</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;