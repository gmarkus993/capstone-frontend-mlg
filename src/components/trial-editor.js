import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import pushid from 'pushid';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';


class TrialEditor extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      js: ''
    };
  }

  componentDidUpdate() {
    this.runCode();
  }

  componentDidMount() {
    this.setState({
      id: pushid(),
    });
  }

  runCode = () => {
    const { js } = this.state;
    console.log(js)
  }

    

  render() {
    const { js } = this.state;
    const codeMirrorOptions = {
      theme: 'material',
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true,
    };

    return (
      <div className="trial-container">
        <section className="trial">          
          <div className="trial-editor js-code">
            <div className="trial-header">JavaScript</div>
            <CodeMirror
              value={js}
              options={{
                mode: 'javascript',
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, js) => {
                this.setState({ js });
              }}
            />
          </div>
        </section>
        
      </div>
    );
  }
}

export default TrialEditor;
