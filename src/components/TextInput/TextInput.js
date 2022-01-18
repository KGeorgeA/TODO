import React from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../../store/todoReducer/todoActions';
import { FormDiv, Input, CompleteAll } from './TextInput.styled';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleInputChange = (ev) => {
    this.setState({
      value: ev.target.value,
    });
  };

  handleCompletedAllChange = () => {
    this.props.toggleAllCompleted();
  };

  handleSubmit = (ev) => {
    if (!this.state.value) return;
    if (ev.keyCode === 13) {
      let { value } = this.state;
      this.props.addTodo(value);
      this.setState({
        value: '',
      });
      ev.target.value = '';
    }
  };

  render() {
    return (
      <FormDiv>
        <CompleteAll isEmpty={this.props.items.length}>
          <input
            type="checkbox"
            onChange={this.handleCompletedAllChange}
            checked={this.props.allCompleted}
            className="completeAll"
          />
          <label />
        </CompleteAll>

        <Input
          onChange={this.handleInputChange}
          onKeyDown={this.handleSubmit}
          placeholder="What needs to be done?"
        />
      </FormDiv>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allCompleted: state.todoReducers.allCompleted,
    items: state.todoReducers.items,
  };
};

const mapDispatchToProps = {
  ...todoActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
