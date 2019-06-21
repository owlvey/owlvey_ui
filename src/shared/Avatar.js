import React from "react";
import PropTypes from "utils/propTypes";
import classNames from "classnames";

const Avatar = ({
  rounded,
  circle,
  src,
  size,
  tag: Tag,
  className,
  style,
  altText,
  ...restProps
}) => {
  const classes = classNames(
    "ui-avatar",
    { "rounded-circle": circle, rounded, border: circle },
    className,
  );
  const initials = altText
    .toString()
    .split(" ")
    .slice(0, 2)
    .reduce((accumulator, current) => {
      return accumulator + current[0];
    }, "");
  return (
    <>
      {src ? (
        <Tag
          src={src}
          style={{ width: size, height: size, ...style }}
          className={classes}
          {...restProps}
        />
      ) : (
        <div
          style={{ width: size, height: size, ...style }}
          className={classes}
          {...restProps}
        >
          {initials.toUpperCase()}
        </div>
      )}
    </>
  );
};

Avatar.propTypes = {
  altText: PropTypes.string,
  tag: PropTypes.component,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  style: PropTypes.object,
};

Avatar.defaultProps = {
  tag: "img",
  rounded: false,
  circle: true,
  size: 40,
  //src: userImage,
  altText: "x x",
  style: {},
};

export default Avatar;
