"use strict";

var React = require('react');
var AuthorAPI = require('../../api/authorAPI');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
  getInitialState: function() {
    return {
      authors: []
    };
  },

  componentDidMount: function() {
    if (this.isMounted()) {
      this.setState({ authors: AuthorAPI.getAllAuthors() });
    }
  },

  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
});

module.exports = AuthorPage;