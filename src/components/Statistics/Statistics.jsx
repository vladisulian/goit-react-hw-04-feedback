import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import React from 'react';
import './statistics.css';
export const Statistics = ({ states, total, positivePercents }) => {
  const { good, neutral, bad } = states;
  // console.log(states);
  // console.log(total);
  return (
    <div className="statistics">
      <h1 className="statistics__title">Statistics</h1>
      {total > 0 ? (
        <ul className="statistics__data">
          {/* good, neutra, bad feedback's */}
          <li>
            <p>Good:</p> <span>{good}</span>
          </li>
          <li>
            <p>Neutral:</p>
            <span>{neutral}</span>
          </li>
          <li>
            <p>Bad:</p>
            <span>{bad}</span>
          </li>
          {/* total, positive percents */}
          <li>
            <p>Total:</p> <span>{total}</span>
          </li>
          <li>
            <p>Positive feedback:</p>
            <span>{positivePercents}</span>
          </li>
        </ul>
      ) : (
        <Notification />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};
