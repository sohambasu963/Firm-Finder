import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Question1.css';

const Question1: React.FC = () => {
  const options: string[] = [
    "Just starting out",
    "I've dabbled a bit",
    "I know what I'm doing",
    "I'm a pro",
    "My name is Warren Buffet"
  ];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  return (
    <div className="question-container">
      <h1 className="question">How much experience do you have with investing?</h1>
      <ul className="options-list">
        {options.map((option, index) => (
          <li
            key={index}
            className={`option ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button className="next-button">
        <Link to="/question2">Next</Link>
      </button>
    </div>
  );
};

export default Question1;
