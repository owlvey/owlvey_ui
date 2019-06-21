import React from "react";
import DroppableArea from "./shared/DroppableArea";
import DraggableItem from "./shared/DraggableItem";
import IconWidget from "shared/IconWidget";
import { FaFoursquare } from "react-icons/fa";

class CaseSelectors extends React.Component {
  render() {
    const { cases } = this.props;
    return (
      <div className="caseSelectors">
        <DroppableArea droppableId="mainDroppable">
          <div className="scrolling-wrapper-flexbox">
            {cases.map((item, index) => (
              <DraggableItem key={index} _case={item} index={index}>
                {snapshot => (
                  <IconWidget
                    icon={FaFoursquare}
                    bgColor="white"
                    inverse={false}
                    title={item.name}
                    subtitle={"View Detail"}
                  />
                )}
              </DraggableItem>
            ))}
          </div>
        </DroppableArea>
      </div>
    );
  }
}

export default CaseSelectors;
