import React from "react";
import PropTypes from "utils/propTypes";

import Todos, { propTypes as TodosPropTypes } from "components/Todos";

import backgroundImage from "assets/img/bg/background_1920-2.jpg";

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
  todos: TodosPropTypes.todos,
};

TodosCard.defaultProps = {
  image: backgroundImage,
  title: "Tasks",
  subtitle: "Due soon...",
};

export default TodosCard;
