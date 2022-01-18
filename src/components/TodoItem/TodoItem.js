import React from 'react';
import { connect } from 'react-redux';
import { TodosItem, TodoItemDiv } from './TodoItem.styled';
import * as todoActions from '../../store/todoReducer/todoActions';

class TodoItem extends React.Component {
  handleCompleteChange = (ev) => {
    this.props.toggleCompleted(ev.target.closest('.todo').dataset.id);
  };

  handleDelete = (ev) => {
    this.props.deleteTodo(ev.target.closest('.todo').dataset.id);
  };

  render() {
    let { id, value, isCompleted } = this.props;
    return (
      <TodosItem
        key={id}
        data-id={id}
        className={`todos-list__item todo ${isCompleted ? 'completed' : ''}`}
      >
        <TodoItemDiv checked={isCompleted}>
          <input
            type="checkbox"
            onChange={this.handleCompleteChange}
            checked={isCompleted}
            className="todo__checkbox"
          />
          <span className="todo__checkbox_custom"></span>
          <label className="todo__text">{value}</label>
          <button onClick={this.handleDelete} className="todo__button">
            x
          </button>
        </TodoItemDiv>
      </TodosItem>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allCompleted: state.todoReducers.allCompleted,
    filter: state.todoReducers.filter,
    items: state.todoReducers.items,
  };
};

const mapDispatchToProps = {
  ...todoActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
