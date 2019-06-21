import React from "react";
import bn from "utils/bemnames";

const bem = bn.create("page");

function EmptyPage({ message, subMessage, icon: Icon, buttonActions }) {
  const classes = bem.b("px-3", "vh-100", "text-center", "pt-5", "mt-5");
  return (
    <div className={classes}>
      <div className="pt-5 mt-5">{<Icon size={80} />}</div>
      <h1 className="mb-4 mt-4">{message}</h1>
      <h6>{subMessage}</h6>
      {buttonActions}
    </div>
  );
}

export default EmptyPage;
