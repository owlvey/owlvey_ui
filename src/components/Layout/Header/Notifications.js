import React from "react";
import PropTypes from "utils/propTypes";
import Avatar from "shared/Avatar";

const Notifications = ({ notificationsData }) => {
  return (
    notificationsData &&
    notificationsData.length &&
    notificationsData.map(({ id, avatar, message, date }) => (
      <div key={id} className="pb-2 media">
        <div className="align-self-center pr-3 media-left">
          <Avatar src={avatar} alt="Avatar" />
        </div>
        <div className="align-self-center media-body media-middle">
          {message}
        </div>
        <div className="align-self-center media-right">
          <small className="text-muted">{date}</small>
        </div>
      </div>
    ))
  );
};

Notifications.propTypes = {
  notificationsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      avatar: PropTypes.string,
      message: PropTypes.node,
      date: PropTypes.date,
    }),
  ),
};

Notifications.defaultProps = {
  notificationsData: [],
};

export default Notifications;
