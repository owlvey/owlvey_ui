import React from "react";
import PropTypes from "utils/propTypes";
import classNames from "classnames";
import Avatar from "shared/Avatar";

const UserCard = ({
  avatar,
  avatarSize,
  title,
  subtitle,
  onSubtitleClick,
  text,
  children,
  className,
  inverse,
  ...restProps
}) => {
  const classes = classNames(
    { "bg-gradient-theme": !className },
    "card",
    { "text-white": inverse },
    className,
  );

  return (
    <div className={classes} {...restProps}>
      <div className="d-flex justify-content-center align-items-center flex-column card-body">
        <Avatar
          src={avatar}
          size={avatarSize}
          className="mb-2"
          altText={title}
        />
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle">
          {!onSubtitleClick && subtitle}
          {!!onSubtitleClick && (
            <button onClick={onSubtitleClick} className="btn btn-link">
              {subtitle}
            </button>
          )}
        </h6>
        <p className="card-text">
          <small>{text}</small>
        </p>
      </div>
      {children}
    </div>
  );
};

UserCard.propTypes = {
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  inverse: PropTypes.bool,
  onSubtitleClick: PropTypes.func,
};

UserCard.defaultProps = {
  avatarSize: 80,
  inverse: false,
};

export default UserCard;
