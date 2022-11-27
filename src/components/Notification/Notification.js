import { Message } from './Notification.styled';
import PropTypes from 'prop-types';
export const NotificationMessage = ({ message }) => {
  return <Message children={message} />;
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
