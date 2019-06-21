import React from "react";
import { Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
// import classnames from "classnames";

function DraggableItem({ _case, index, children }) {
  return (
    <Draggable draggableId={_case.caseId} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {children(snapshot)}
        </div>
      )}
    </Draggable>
  );
}
DraggableItem.propTypes = {
  children: PropTypes.func.isRequired,
};

export default DraggableItem;
