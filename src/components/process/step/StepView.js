import React from "react";
import Page from "shared/Page";
import { Link } from 'react-router';
import IconWidget from "shared/IconWidget";
import { FaWeibo } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  MdInsertChart,
  MdBubbleChart,
  MdPieChart,
  MdShowChart,
  MdPersonPin,
  MdRateReview,
  MdThumbUp,
  MdThumbDown,
  MdShare,
} from "react-icons/md";
import { setPriority } from "os";

class StepView extends React.Component {
  handleOnclick(step) {
    this.props.history.push('/process/' + step.stepId + "/case");
  }

  render() {
    const { steps, parentVersionId, parentfeatureId, history } = this.props;
    return (
      <Page
        className="ProcessStepPage position-relative"
        title="Step"
        breadcrumbs={[
          { name: "Version", active: false, goTo: "/process/version" },
          {
            name: "Feature",
            active: false,
            goTo: `/process/${parentVersionId}/feature`,
          },
          {
            name: "Scenario",
            active: false,
            goTo: `/process/${parentfeatureId}/scenario`,
          },
          { name: "Step", active: true },
        ]}
      >
        <div className="row">
          <VerticalTimeline layout='1-column'>
            {steps.map((step, index) => (
              <VerticalTimelineElement
                animate={false}
                className="vertical-timeline-element--work"
                visibilitySensorProps={{ partialVisibility: true, active: true }}
                // date="2011 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FaWeibo />}
                key={index}
                iconOnClick={() => {
                  history.push(`/process/${step.stepId}/case`);
                }}
                iconStyle={{
                  cursor: "pointer",
                  background: "rgb(33, 150, 243)",
                  color: "rgb(255, 255, 255)",
                }}>
                <h4>
                  {step.stepNumber + " " + step.name}
                </h4>
                <div style={{ color: step.difference === 0 ? "green" : "red" }}>
                  <MdThumbUp size={32} />

                </div>
                <p>{"Difference: " + String(step.difference)}</p>
                <p>
                  <button className="btn btn-link active"
                    onClick={() => this.handleOnclick(step)}> Details </button>
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Page>
    );
  }
}

export default StepView;
