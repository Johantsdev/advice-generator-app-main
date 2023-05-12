import { useEffect, useState } from "react";

const Card = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    requestAdvice();
  });

  async function requestAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");

    if (!res.ok) {
      throw new Error("Fetch not ok");
    }

    const data = await res.json();

    setAdvice(data.slip.advice);
    setId(data.slip.id);
  }

  return (
    <div className="container">
      <h1>
        ADVICE <span>#{id}</span>
      </h1>
      <p>"{advice}"</p>
      <img src="../images/pattern-divider-mobile.svg" alt="pattern divider" />
      <button>
        <img src="../images/icon-dice.svg" alt="icon dice" />
      </button>
    </div>
  );
};

export default Card;
