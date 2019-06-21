import React from "react";
import DroppableArea from "./shared/DroppableArea";
import DraggableItem from "./shared/DraggableItem";
import classnames from "classnames";

class CaseDnd extends React.Component {
  render() {
    const { cases } = this.props;
    return (
      <DroppableArea droppableId="mainDroppable">
        <div className="form-row align-items-center">
          {cases.map((item, index) => (
            <DraggableItem key={index} _case={item} index={index}>
              {snapshot => (
                <div className="col-auto">
                  <div
                    className={classnames("alert", "alert-primary", {
                      "alert-secondary": snapshot.isDragging,
                    })}
                    role="alert"
                  >
                    <strong>Case: </strong>
                    {item.name}
                  </div>
                </div>
              )}
            </DraggableItem>
          ))}
        </div>
      </DroppableArea>
    );
  }
}

export default CaseDnd;
