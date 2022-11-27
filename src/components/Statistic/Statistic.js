import PropTypes from 'prop-types';

import {
  GoodResult,
  NeutralResult,
  BadResult,
  TotalResult,
  GoodResultPercent,
} from './Statistics.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <GoodResult>Good: {good}</GoodResult>
      <NeutralResult>Neutral: {neutral} </NeutralResult>
      <BadResult>Bad: {bad}</BadResult>
      <TotalResult>Total: {total}</TotalResult>
      <GoodResultPercent>
        Positive feedback: {positivePercentage}%
      </GoodResultPercent>
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
