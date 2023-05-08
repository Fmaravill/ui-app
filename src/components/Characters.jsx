import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Characters() {
  const [allChar, setCharacters] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const getNewCharacters = async () => {
    const res = await axios.get("https://hp-api.onrender.com/api/characters");
    const allCharacters = [];
    allCharacters.push(...res.data.splice(0, 25));
    setCharacters(allCharacters);
    console.log(allChar);
  };

  const handleNext = () => {
    setCharIndex(charIndex + 1);
  };

  const handlePrev = () => {
    setCharIndex(charIndex - 1);
  };

  useEffect(() => {
    getNewCharacters();
    //console.log(allChar);
  }, []);

  //let charName = allChar[charIndex].name;

  return (
    <>
      <button
        onClick={() => {
          handlePrev();
        }}
        className="previous"
      >
        Previous
      </button>

      <div className="character">
        <div className="title"></div>
        <img className="image" src="" alt="" />
      </div>
      <button onClick={() => handleNext()} className="next">
        Next
      </button>
    </>
  );
}
