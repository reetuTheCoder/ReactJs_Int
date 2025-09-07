import { useEffect, useRef, useState } from "react";

const ReactionTestGame = () => {
  const [gameState, setGameState] = useState("start");
  const [boxColor, setBoxColor] = useState("red");
  const [message, setMessage] = useState("");
  const timeoutId = useRef(null);
  const startTime = useRef(null);

  const handleStartGame = () => {
    setGameState("waiting");
    setBoxColor("red");
    setMessage("");
  };

  useEffect(() => {
    if (gameState === "waiting") {
      const delay = Math.floor(Math.random() * 5000) + 1000;
      timeoutId.current = setTimeout(() => {
        setBoxColor("green");
        setGameState("ready");
        startTime.current = Date.now();
      }, delay);
    }
     return () => clearTimeout(timeoutId.current); 
  }, [gameState]);

  const handleBox = () => {
    if (gameState === "waiting") {
      clearTimeout(timeoutId.current);
      setMessage("You clicked too early!");
      setGameState("result");
    } else if (gameState === "ready") {
      const reactionTime = Date.now() - startTime.current;
      setMessage(`You took ${reactionTime}ms!`);
      setGameState("result");
    }
  };

  const resetGame = () => {
    setGameState("start");
    setBoxColor("");
  };
  return (
    <div>
      {gameState === "start" && (
        <button onClick={handleStartGame}>Start Game</button>
      )}

      {(gameState === "waiting" || gameState === "ready") && (
        <div
          style={{
            background: boxColor,
            width: "100px",
            height: "100px",
            margin: "20px auto",
            cursor: "pointer",
          }}
          onClick={handleBox}
        ></div>
      )}

      {gameState === "result" && (
        <div>
          <h3>{message}</h3>
          <button onClick={resetGame}>Start Again</button>
        </div>
      )}
    </div>
  );
};

export default ReactionTestGame;
