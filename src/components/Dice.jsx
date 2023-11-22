import React, { useState } from "react";
import {
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
} from "../litecpmponents/Dice1";

export default function Dice() {
  let dice = [<Dice1 />, <Dice2 />, <Dice3 />, <Dice4 />, <Dice5 />, <Dice6 />];
  const [diceState1, setDice1] = useState(dice[0]);
  const [diceState2, setDice2] = useState(dice[1]);
  const [className, setClass] = useState("");
  const [content, setContent] = useState("Roll Dice");
  const [disable, setDisable] = useState(false);

  return (
    <div className="App">
      <div className="dice-box">
        <div className={className}>{diceState1}</div>
        <div className={className}>{diceState2}</div>
      </div>
      <button
        onClick={() => {
          setClass("shaking");
          setContent("Rolling...");
          setDisable(true);
          let roll = setInterval(() => {
            let random1 = Math.floor(Math.random() * 6) + 1;
            let random2 = Math.floor(Math.random() * 6) + 1;
            setDice1(dice[random1 - 1]);
            setDice2(dice[random2 - 1]);
          }, 50);
          setTimeout(() => {
            clearInterval(roll);
            setDisable(false);
            let random1 = Math.floor(Math.random() * 6) + 1;
            let random2 = Math.floor(Math.random() * 6) + 1;
            setDice1(dice[random1 - 1]);
            setDice2(dice[random2 - 1]);
            setClass("");
            setContent("Roll Dice");
          }, 1500);
        }}
        className="btn-sherk"
        disabled={disable}
      >
        {content}
      </button>
    </div>
  );
}
