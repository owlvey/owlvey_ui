import React from "react";

const Loader = () => {
  return (
    <div
      className="text-center"
      style={{ minHeight: "400px", position: "relative", top: "50%" }}
    >
      <div
        className="spinner-grow spinner-grow-sm"
        role="status"
        style={{ animationDelay: "-0.1s" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow spinner-grow-sm"
        role="status"
        style={{ animationDelay: "-0.2s" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow spinner-grow-sm"
        role="status"
        style={{ animationDelay: "-0.3s" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
export default Loader;
