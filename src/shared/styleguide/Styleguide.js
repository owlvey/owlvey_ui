import React from "react";
import MonacoEditor from "react-monaco-editor";
import conf from "shared/styleguide/config";
import Page from "shared/Page";
import * as Babel from "babel-standalone";

//import "monaco-editor/min/vs/editor/editor.main.css";

const EDITOR_OPTIONS = {
  scrollBeyondLastLine: false,
  minimap: { enabled: false },
  hideCursorInOverviewRuler: true,
  matchBrackets: false,
  renderLineHighlight: "none",
  fontSize: 14,
  lineHeight: 20,
  quickSuggestions: false,
  suggest: false,
  parameterHints: false,
  snippetSuggestions: false,
  suggestOnTriggerCharacters: false,
};

class Styleguide extends React.Component {
  componentDidMount() {
    this.componentWillReceiveProps(this.props);
  }

  componentWillReceiveProps(newProps) {
    const component = conf[newProps.match.params.name];
    const samples = component.samples;
    samples.forEach((item, index) => {
      this.setState({ [`sourceCodeText_${index}`]: item.code }, () => {
        this.compileAndRunCode(index);
      });
    });
  }

  updateSourceCode = (sourceCode, index) => {
    this.setState({ [`sourceCodeText_${index}`]: sourceCode }, () => {
      this.compileAndRunCode(index);
    });
  };

  compileCode(sourceCode) {
    if (sourceCode === "") return "";
    const wrappedSourceCode = `<React.Fragment>${sourceCode}</React.Fragment>`;
    return Babel.transform(wrappedSourceCode, { presets: ["latest", "react"] })
      .code;
  }

  evalCode(compiledCode) {
    return eval(compiledCode);
  }

  compileAndRunCode = index => {
    try {
      const codeText = this.state[`sourceCodeText_${index}`];
      const compiledCode = this.compileCode(codeText);
      const elementCode = this.evalCode(compiledCode) || null;
      this.setState({ [`sourceCodeElement_${index}`]: elementCode });
    } catch (error) {
      /* eslint-disable no-console */
      console.warn("Error executing code in Styleguide.js.");
      console.warn(error);
      /* eslint-enable no-console */
    }
  };

  render() {
    const component = conf[this.props.match.params.name];
    const samples = component.samples;

    if (this.state === undefined || this.state == null) return null;
    return (
      <Page title={component.title}>
        {samples.map((sample, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-md-12">
                <div className="flex-row card">
                  <div className="col-md-12">
                    <div className="row align-items-center h-100">
                      <div className="col-md-4 mx-auto">
                        <div className="text-center">
                          {this.state[`sourceCodeElement_${index}`]}
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{sample.title}</h5>
                          <div className="card-text">
                            <MonacoEditor
                              width="850"
                              height="200"
                              language="html"
                              theme="vs-dark"
                              value={this.state[`sourceCodeText_${index}`]}
                              options={EDITOR_OPTIONS}
                              onChange={sourceCode => {
                                this.updateSourceCode(sourceCode, index);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Page>
    );
  }
}

export default Styleguide;
