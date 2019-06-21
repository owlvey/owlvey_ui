import React from "react";
import Page from "shared/Page";
// import IconWidget from "shared/IconWidget";
// import { FaWeibo } from "react-icons/lib/fa";
import { DragDropContext } from "react-beautiful-dnd";
import CaseComparatorItem from "./CaseComparatorItem";
import ImageComparatorItem from "./ImageComparatorItem";
import CaseSelectors from "./CaseSelectors";

class CaseView extends React.Component {
  state = {
    casesSelected: {
      leftDroppableId: "sel-left",
      rightDroppableId: "sel-right",
    },
    imageComparatorList: [],
    // cases: [
    //   {
    //     caseId:
    //       "967c7987aa41c9ffb4add91a26f694ea45a4cec2df76a61fa1ad27426ba85eca",
    //     step_id: "f43e0de8-32ea-4963-91e9-24944a5ccdb3",
    //     name: "desktop chrome",
    //     image_kind: "png",
    //     image_url:
    //       "/images/967c7987aa41c9ffb4add91a26f694ea45a4cec2df76a61fa1ad27426ba85eca?source=gallery",
    //     image_thumbnail_url:
    //       "/images/967c7987aa41c9ffb4add91a26f694ea45a4cec2df76a61fa1ad27426ba85eca?source=thumbnails",
    //   },
    //   {
    //     caseId:
    //       "9c8eceb77032922d3c73694e9a1c62d41506125cb01c8157b6fd3b1ae0010f87",
    //     step_id: "f43e0de8-32ea-4963-91e9-24944a5ccdb3",
    //     name: "desktop firefox",
    //     image_kind: "png",
    //     image_url:
    //       "/images/9c8eceb77032922d3c73694e9a1c62d41506125cb01c8157b6fd3b1ae0010f87?source=gallery",
    //     image_thumbnail_url:
    //       "/images/9c8eceb77032922d3c73694e9a1c62d41506125cb01c8157b6fd3b1ae0010f87?source=thumbnails",
    //   },
    //   {
    //     caseId:
    //       "c8eceb77032922d3c73694e9a1c62d41506125cb01c8157b6fd3b1ae0010f87",
    //     step_id: "f43e0de8-32ea-4963-91e9-24944a5ccdb3",
    //     name: "desktop safari",
    //     image_kind: "png",
    //     image_url:
    //       "/images/9c8eceb77032922d3c73694e9a1c62d41506125cb01c8157b6fd3b1ae0010f87?source=gallery",
    //     image_thumbnail_url:
    //       "/images/9c8eceb77032922d3c73694e9a1c62d41506125cb01c8157b6fd3b1ae0010f87?source=thumbnails",
    //   },
    //   {
    //     caseId: "9c8eceb77032922d3c734e9a1c62d41506125cb01c8157b6fb1ae0010f87",
    //     step_id: "f43e0de8-32ea-4963-91e9-24944a5ccdb3",
    //     name: "desktop worl wide",
    //     image_kind: "png",
    //     image_url:
    //       "/images/9c8eceb77032922d3c73694e9a1c62d41506125cb01c8157b6fd3b1ae0010f87?source=gallery",
    //     image_thumbnail_url:
    //       "/images/9c8eceb77032922d3c73694e9a1c62d41506125cb01c8157b6fd3b1ae0010f87?source=thumbnails",
    //   },
    //   {
    //     caseId: "9c8eceb7722d3c73694e9a1c62d41506125cb01c8157b6fd3b1ae0010f87",
    //     step_id: "f43e0de8-32ea-4963-91e9-24944a5ccdb3",
    //     name: "desktop Internet explorer",
    //     image_kind: "png",
    //     image_url:
    //       "/images/9c8eceb77032922d3c73694e9a1c62d41506125cb01c8157b6fd3b1ae0010f87?source=gallery",
    //     image_thumbnail_url:
    //       "/images/9c8eceb77032922d3c73694e9a1c62d41506125cb01c8157b6fd3b1ae0010f87?source=thumbnails",
    //   },
    // ],
  };

  handleClickProcessComparator = () => {
    this.setState({
      imageComparatorList: [
        ...this.state.imageComparatorList,
        {
          leftCase: { ...this.state.casesSelected.leftCase },
          rightCase: { ...this.state.casesSelected.rightCase },
        },
      ],
      casesSelected: {
        ...this.state.casesSelected,
        leftCase: null,
        rightCase: null,
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
        const {
          step: { cases },
        } = this.props;
        this.setState({
          casesSelected: {
            ...this.state.casesSelected,
            leftCase:
              destination.droppableId === "sel-left"
                ? { ...cases[source.index] }
                : this.state.casesSelected.leftCase,
            rightCase:
              destination.droppableId === "sel-right"
                ? { ...cases[source.index] }
                : this.state.casesSelected.rightCase,
          },
        });

        return;
      }
    }
  };

  render() {
    const {
      parentVersion,
      parentFeature,
      parentScenario,
      sessionId,
      apiUrl,
      step: { cases },
    } = this.props;
    const { casesSelected, imageComparatorList } = this.state;
    return (
      <Page
        className="ProcessStepPage position-relative"
        title="Case"
        breadcrumbs={[
          { name: "Version", active: false, goTo: "/process/version" },
          {
            name: "Feature",
            active: false,
            goTo: `/process/${parentVersion.versionId}/feature`,
          },
          {
            name: "Scenario",
            active: false,
            goTo: `/process/${parentFeature.featureId}/scenario`,
          },
          {
            name: "Step",
            active: false,
            goTo: `/process/${parentScenario.scenarioId}/step`,
          },
          { name: "Case", active: true },
        ]}
      >
        <div className="card card-body">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <CaseSelectors cases={cases} />
            <CaseComparatorItem
              data={casesSelected}
              onClickProcessComparator={this.handleClickProcessComparator}
              sessionId={sessionId}
              apiUrl={apiUrl}
            />
          </DragDropContext>
          {imageComparatorList.map((item, index) => (
            <React.Fragment key={index}>
              <hr className="my-4 border-dashed border-top-3" />
              <ImageComparatorItem
                key={index}
                leftCase={item.leftCase}
                rightCase={item.rightCase}
                sessionId={sessionId}
                apiUrl={apiUrl}
              />
            </React.Fragment>
          ))}
        </div>
      </Page>
    );
  }
}

export default CaseView;
