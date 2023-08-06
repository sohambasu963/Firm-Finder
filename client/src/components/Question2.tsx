import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Question2.css';

const Question2: React.FC = () => {
  const currencyOptions: string[] = ['CAD', 'USD'];

  const [selectedCurrency, setSelectedCurrency] = useState<string>("CAD");
  const [investmentAmount, setInvestmentAmount] = useState<number | null>(null);

  const handleCurrencyClick = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const handleInvestmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(event.target.value);
    setInvestmentAmount(isNaN(amount) ? null : amount);
  };

  return (
    <div className="question-container">
      <h1 className="question">How much cash are you ready to invest?</h1>
      <ul className="options-list">
        {currencyOptions.map((currency, index) => (
          <li
            key={index}
            className={`option ${selectedCurrency === currency ? 'selected' : ''}`}
            onClick={() => handleCurrencyClick(currency)}
          >
            {currency}
          </li>
        ))}
      </ul>
      <div className="investment-input">
        <label htmlFor="investmentAmount">Enter investment amount:</label>
        <input
          type="number"
          id="investmentAmount"
          step="0.01"
          value={investmentAmount || ''}
          onChange={handleInvestmentChange}
        />
      </div>
      <button className="next-button">
        <Link to="/">Next</Link>
      </button>
    </div>
  );
};

export default Question2;
