import './feedback-options.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ addFeedback, state }) => (
  <div className="buttons-container">
    {state.map(property => {
      return (
        <button
          type="button"
          id="foot"
          onClick={e => {
            addFeedback(e.target.textContent.toLowerCase());
          }}
          key={property}
        >
          <div className="button-os">
            <a href="#">{property}</a>
          </div>
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  addFeedback: PropTypes.func,
  countTotal: PropTypes.number,
  countPercent: PropTypes.string,
};
