import React, { Component } from 'react';
import ReactAdmin from 'react-admin';
import { Root } from 'react-dom/client';

/*
class CustomPage extends ReactAdmin.Page {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // Get the data for the custom page
    fetch('/api/custom-page')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    // Render the content of the custom page
    return (
      <div>
        <h1>Custom Page</h1>
        <p>This is a custom page created with React Admin.</p>
        <ul>
          {this.state.data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
*/

const css = `
  #daicli {
    min-height: 600px;
    width: 100%;
  }
`

const ChatPage = () => {
    return (
      <div>
        <style>{css}</style>
        <iframe id="daicli" src="https://d.aicli.org/" width="100%" />
      </div>
    )
};

export default ChatPage;

