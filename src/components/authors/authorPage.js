"use strict";

var React = require('react');
var AuthorAPI = require('../../api/authorAPI');

var Authors = React.createClass({
  getInitialState: function() {
    return {
      authors: []
    };
  },

  componentWillMount: function() {
    console.log('entering component will mount');
    this.setState({ authors: AuthorAPI.getAllAuthors() });
    console.log('exiting component will mount');
  },

  render: function() {
    console.log(this.state.authors);
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
           <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };

    return (
      <div>
        <h1>Authors</h1>
          <table className="table">
            <thead>
              <th>ID</th>
              <th>Name</th>
            </thead>
            <tbody>
              {this.state.authors.map(createAuthorRow, this)}
            </tbody>
          </table>
      </div>
    );
  }
});

module.exports = Authors;