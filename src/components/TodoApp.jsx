import React from 'react';
import TodoList from './TodoList';

export default React.createClass({
  getItems: function() {
    return this.props.todos || [];
  },
  render: function() {
    return (
      <div>
        <section className='todoApp'>
          <TodoList todos={this.props.todos} filter={this.props.filter} />
        </section>
      </div>
    );
  }
});
