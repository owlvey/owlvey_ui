import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import CaseDnD from "./CaseDnD";
import CaseComparatorItem from "./CaseComparatorItem";
import uuidv1 from "uuid/v1";

class ComparatorsView extends React.Component {
  state = {
    comparators: [],
    indexComparator: {},
  };

  componentDidMount() {
    this.addNewComparator();
  }

  addNewComparator = () => {
    const newUUID = uuidv1();
    this.setState({
      comparators: [
        ...this.state.comparators,
        {
          leftDroppableId: `01-${newUUID}`,
          rightDroppableId: `02-${newUUID}`,
          leftCase: null,
          rightCase: null,
          isDropDisabled: false,
        },
      ],
      indexComparator: {
        ...this.state.indexComparator,
        [newUUID]: this.state.comparators.length,
      },
    });
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      //   const newCaseState = this.move(
      //     [...this.state.cases],
      //     source.index,
      //     destination.index,
      //   );
      //   this.setState({
      //     cases: newCaseState,
      //   });
    } else {
      if (source.droppableId === "mainDroppable") {
        const index = this.state.indexComparator[
          destination.droppableId.substring(3)
        ];
        const newComparatorList = [...this.state.comparators];
        const { cases } = this.props;
        newComparatorList.splice(index, 1, {
          ...newComparatorList[index],
          leftCase:
            newComparatorList[index].leftDroppableId == destination.droppableId
              ? cases[source.index]
              : newComparatorList[index].leftCase,
          rightCase:
            newComparatorList[index].rightDroppableId == destination.droppableId
              ? cases[source.index]
              : newComparatorList[index].rightCase,
        });
        newComparatorList[index].isDropDisabled = !!(
          newComparatorList[index].leftCase &&
          newComparatorList[index].rightCase
        );

        this.setState(
          {
            comparators: newComparatorList,
          },
          () => {
            if (newComparatorList[index].isDropDisabled) {
              this.addNewComparator();
            }
          },
        );
      }
    }
  };

  render() {
    const { cases } = this.props;
    const { comparators } = this.state;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div style={{ height: "80px" }}>
          <CaseDnD cases={cases} />
        </div>
        {[...comparators].reverse().map((item, index) => (
          <CaseComparatorItem key={index} data={item} />
        ))}
      </DragDropContext>
    );
  }
}

export default ComparatorsView;
