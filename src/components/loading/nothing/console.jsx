import React, { useEffect, useState } from 'react';
import "./console.css"

const GreetingComponent = () => {
  const [greeting, setGreeting] = useState([
    'Hello. I am a console wannabe.',
    'All systems are functioning.',
    'I like pie.'
  ]);
  const [text, setText] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const type = () => {
      const line = greeting[currentLine];
      if (!line) {
        setTimeout(() => {
          setCurrentLine((prevLine) => (prevLine + 1) % greeting.length);
          setText([]);
          type();
        }, 2000);
        return;
      }

      const character = line[text.length];
      if (!character) {
        setTimeout(type, 300);
        return;
      }

      setText((prevText) => [...prevText, character]);
      setTimeout(type, 300);
    };

    type();
  }, [greeting, text, currentLine]);

  return (
    <div>
      {text.map((character, index) => (
        <span key={index}>{character}</span>
      ))}
      <br />
      <i>▮</i>
    </div>
  );
};

export default GreetingComponent;
