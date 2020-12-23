import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Controlled as CodeMirror } from 'react-codemirror2';
import pushid from 'pushid';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';


class TrialEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      js: '',
      codeSubmission: this.props.codeSubmission
    };
    this.forceButton = this.forceButton.bind(this);

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
    const  js  = this.state;
    // console.log(js)
  }

  forceButton(event){
    console.log("hello")
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
          <Button onClick={this.forceButton}>TEST THE FORCE</Button>
        </section>

        
      </div>
    );
  }
}

export default TrialEditor;
