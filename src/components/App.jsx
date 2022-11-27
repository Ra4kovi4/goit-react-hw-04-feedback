import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Box } from './Box/Box';
import { Statistic } from './Statistic/Statistic';
import { NotificationMessage } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    return Math.floor((good / totalFeedbacks) * 100) || 0;
  };
  handlerClick = e => {
    const keyState = Object.keys(this.state);

    keyState.forEach(key => {
      if (e.target.value === key) {
        this.setState(prevState => ({
          [key]: prevState[key] + 1,
        }));
      }
    });
  };
  render() {
    const { good, neutral, bad } = this.state;

    const keyState = Object.keys(this.state);
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
            <FeedbackOptions
              options={keyState}
              onLeaveFeedback={this.handlerClick}
            />
          }
        />
        <Section
          children={
            this.countTotalFeedback() > 0 ? (
              <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <NotificationMessage message="There is no feedback" />
            )
          }
        />
      </Box>
    );
  }
}
