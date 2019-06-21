import classNames from "classnames";
import React from "react";
import PropTypes from "utils/propTypes";
import Avatar from "shared/Avatar";

const AvatarCard = ({
  avatar,
  avatarSize,
  title,
  subtitle,
  text,
  children,
  className,
  inverse,
  ...restProps
}) => {
  const classes = classNames(
    "card bg-gradient-theme-left",
    { "text-white": inverse },
    className,
  );

  return (
    <div className={classes} {...restProps}>
      <div className="d-flex justify-content-center align-items-center flex-column card-body">
        <Avatar src={avatar} size={avatarSize} className="mb-3" />
        <h5 className="card-title">{title}</h5>
        {!!subtitle && <h6 className="card-subtitle">{subtitle}</h6>}
        {!!text && (
          <div className="card-text">
            <small>{text}</small>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

AvatarCard.propTypes = {
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  inverse: PropTypes.bool,
};

AvatarCard.defaultProps = {
  avatarSize: 80,
};

export default AvatarCard;
