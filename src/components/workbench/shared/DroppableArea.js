import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";

function DroppableArea({ droppableId, isDropDisabled, children }) {
  return (
    <Droppable
      droppableId={droppableId}
      isDropDisabled={isDropDisabled}
      direction="horizontal"
    >
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

DroppableArea.propTypes = {
  droppableId: PropTypes.string.isRequired,
  isDropDisabled: PropTypes.bool.isRequired,
};

DroppableArea.defaultProps = {
  isDropDisabled: false,
};

export default DroppableArea;
