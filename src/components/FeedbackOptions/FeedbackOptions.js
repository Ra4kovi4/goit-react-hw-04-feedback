import { Button } from './FeedbackOptions.styles';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(el => (
    <Button
      key={el}
      type="button"
      onClick={onLeaveFeedback}
      value={el}
      children={el}
    />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
