import React, { useState } from "react";

const App = () => {
  const [dice, setdice] = useState(1);
  const [dice2, setdice2] = useState(6);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setdice(randomNumber);

    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    setdice2(randomNumber2);
  };

  return (
    <>
      <div>
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "20px",
          alignSelf: "center",
          width: "400px",
          marginLeft : "600px",
        }}
      >
        <h1>Ludo Dice Roller</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <div>
            <img
              style={{ width: "100px" }}
              src={`src/assets/dice${dice}.png`}
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "100px" }}
              src={`src/assets/dice${dice2}.png`}
              alt=""
            />
          </div>
        </div>

        <button style={{width: "200px", height: "50px"}} onClick={rollDice}>Role Dice Top player</button>
      </div>
      </div>
    </>
  );
};

export default App;
