import React from "react";
import PropTypes from "utils/propTypes";
import Avatar from "shared/Avatar";
import classNames from "classnames";

const AnnouncementCard = ({
  color,
  header,
  avatar,
  avatarSize,
  name,
  date,
  text,
  className,
  buttonProps,
  inverse,
  ...restProps
}) => {
  const bgColor = `bg-${color}`;
  const classes = classNames(bgColor, className, "card", {
    "text-white": inverse,
  });

  return (
    <div className={classes} {...restProps}>
      {header && typeof header === "string" ? (
        <div className={bgColor + " card-header"}>{header}</div>
      ) : (
        header
      )}
      <div className="d-flex flex-wrap flex-column align-items-center justify-content-center card-body">
        <Avatar size={avatarSize} src={avatar} />
        <p className="text-center card-text">
          <strong className="d-block">{name}</strong>
          <small className="text-muted">{date}</small>
        </p>
        <p className="text-center card-text">{text}</p>

        <button className="btn btn-primary" {...buttonProps} />
      </div>
    </div>
  );
};

AnnouncementCard.propTypes = {
  color: PropTypes.string,
  header: PropTypes.node,
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.date,
  className: PropTypes.string,
  children: PropTypes.element,
  inverse: PropTypes.bool,
};

AnnouncementCard.defaultProps = {
  color: "gradient-secondary",
  avatarSize: 60,
};

export default AnnouncementCard;
