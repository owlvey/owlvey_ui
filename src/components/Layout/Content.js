import React from "react";
import bn from "utils/bemnames";

const bem = bn.create("content");

const Content = ({ tag: Tag, className, ...restProps }) => {
  const classes = bem.b(className);
  return <Tag className={classes} {...restProps} />;
};

Content.defaultProps = {
  tag: "div",
};

export default Content;
