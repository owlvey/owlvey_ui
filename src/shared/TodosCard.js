import React from "react";
import PropTypes from "utils/propTypes";

import Todos, { propTypes as TodosPropTypes } from "components/Todos";

const TodosCard = ({ image, title, subtitle, todos, ...restProps }) => {
  return (
    <div className="card" {...restProps}>
      <div className="position-relative">
        <img src={image} className="card-img" />
        <div className="bg-dark card-img-overlay" style={{ opacity: 0.2 }}>
          <h5 className="text-white card-title">{title}</h5>
          <p className="text-white card-text">{subtitle}</p>
        </div>
      </div>
      <Todos todos={todos} />
    </div>
  );
};

TodosCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  todos: TodosPropTypes.todos
};

TodosCard.defaultProps = {
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  title: "Tasks",
  subtitle: "Due soon..."
};

export default TodosCard;
