// import { Component } from 'react';
import '../components/styles.css';
import { FeedbackOptions } from './Feedback-options/Feedback-options';
import { Statistics } from './Statistics/Statistics';
import { FeedbackSection } from './Feedback-section/FeedbackSection';
import { useState } from 'react';
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = data => {
//     this.setState(prevState => ({
//       [data]: prevState[data] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, state) => {
//       return acc + state;
//     }, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     return Math.round((this.state.good * 100) / total) + '%';
//   };

//   render() {
//     const state = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedbacks = this.countPositiveFeedbackPercentage();

//     return (
//       <FeedbackSection title={`Please, give feedback!`}>
//         <FeedbackOptions
//           addFeedback={this.addFeedback}
//           state={Object.keys(this.state)}
//         />
//         <Statistics
//           states={state}
//           total={totalFeedback}
//           positivePercents={positiveFeedbacks}
//         />
//       </FeedbackSection>
//     );
//   }
// }

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedbacks, setfeedbacks] = useState({ good, neutral, bad });

  const handleFeedback = data => {
    switch (data) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce((acc, state) => {
      return acc + state;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / total) + '%';
  };
  const total = countTotalFeedback();
  const positiveFeedbacks = countPositiveFeedbackPercentage();

  return (
    <FeedbackSection title={`Please, give feedback!`}>
      <FeedbackOptions
        addFeedback={handleFeedback}
        state={Object.keys(feedbacks)}
      />
      <Statistics
        states={feedbacks}
        total={total}
        positivePercents={positiveFeedbacks}
      />
    </FeedbackSection>
  );
};
