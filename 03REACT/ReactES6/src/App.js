import React, { Component } from 'react'
import {
  Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput,
  Button, Document
} from './styled'
import hljs from "highlight.js"

class App extends Component {
  state = { 
    editor: "",
    name0: "",
    begin0: "",
    end0: "",
    style0: "",
    rules: 1,

  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]:value
    })
  }

  rules = () => {
    let { rules } = this.state;
    let array = [];
    let fields = ['name', 'begin', 'end'];
    for (let i = 0; i < rules; i++){
      array.push(
        <Row key={i}>
          <Column>
            {fields.map(
              (field, index) => {
                return (
                  <Column key={index}>
                    <RuleLabel>
                      {field}
                    </RuleLabel>
                    <RuleInput
                      value={this.state[`${field}${i}`]}
                      onChange={this.handleChange}
                      name={`${field}${i}`}
                    /> 
                    <StyleInput
                      value={this.state[`styles${i}`]}
                      onChange={this.handleChange}
                    />
                  </Column>
                )
              }
            )}
          </Column>
        </Row>
      )
    }
    return array;
  }

  newFields = () => {
    this.setState((preState) => {
      let { rules } = preState;
      let fields = ['name', 'begin', 'end', 'style'];
      let inputValues = {};
      fields.forEach((field) => {
        inputValues = {
          ...inputValues,
          [`${field}${rules}`]: ''
        }
      })
      rules++;
      console.log({
        rules,
        ...inputValues
      })
      return {
        rules,
        ...inputValues
      }
    })
  }

  convertToMarkup = (text) => {
    return {
      __html: hljs.highlightAuto(text).value
    }
  }

  render() {
    let { editor } = this.state;
    let { handleChange,newFields,rules ,convertToMarkup} = this;
    return (
      <Container>
        <Column>
          {rules()}
          <Button
          onClick={newFields}
          >
            New Rule
          </Button>
        </Column>
        <Column>
          <Button>
            Random Text
          </Button>
          <Document>
            <Editor
              name={"Editor"}
              value={editor}
              onChange={handleChange}
            />
            <Markup
              dangerouslySetInnerHTML={convertToMarkup(editor)}
            />
          </Document>
          
        </Column>
      </Container>
    )
  }
}

export default App
