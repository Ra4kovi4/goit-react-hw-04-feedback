// import { Component } from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Box } from './Box/Box';
import { Statistic } from './Statistic/Statistic';
import { NotificationMessage } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = Object.keys({ good, neutral, bad });

  const handlerClick = value => {
    switch (value) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage =
    Math.floor((good / countTotalFeedback) * 100) || 0;

  return (
    <Box
      mr="auto"
      ml="auto"
      p={5}
      width="500px"
      bg="#FFE4B5"
      borderRadius="5px"
      boxShadow="24px 13px 25px -7px rgba(51,46,51,0.71)"
    >
      <Section
        title="Please leave fedback"
        children={
          <FeedbackOptions options={options} onLeaveFeedback={handlerClick} />
        }
      />
      <Section
        children={
          countTotalFeedback > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )
        }
      />
    </Box>
  );
};

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const totalFeedbacks = this.countTotalFeedback();
//     return Math.floor((good / totalFeedbacks) * 100) || 0;
//   };
//   handlerClick = e => {
//     const keyState = Object.keys(this.state);

//     keyState.forEach(key => {
//       if (e.target.value === key) {
//         this.setState(prevState => ({
//           [key]: prevState[key] + 1,
//         }));
//       }
//     });
//   };
//   render() {
//     const { good, neutral, bad } = this.state;

//     const keyState = Object.keys(this.state);
//     `return (
//       <Box
//         mr="auto"
//         ml="auto"
//         p={5}
//         width="500px"
//         bg="#FFE4B5"
//         borderRadius="5px"
//         boxShadow="24px 13px 25px -7px rgba(51,46,51,0.71)"
//       >
//         <Section
//           title="Please leave fedback"
//           children={
//             <FeedbackOptions
//               options={keyState}
//               onLeaveFeedback={this.handlerClick}
//             />
//           }
//         />
//         <Section
//           children={
//             this.countTotalFeedback() > 0 ? (
//               <Statistic
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={this.countTotalFeedback()}
//                 positivePercentage={this.countPositiveFeedbackPercentage()}
//               />
//             ) : (
//               <NotificationMessage message="There is no feedback" />
//             )
//           }`
//         />
//       </Box>
//     );
//   }
// }
