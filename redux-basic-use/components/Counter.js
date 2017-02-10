import React, { Component, PropTypes } from 'react'

import {increment,decrement,incrementIfOdd,incrementAsync} from '../actions/counter'

class Counter extends Component {
  render() {
    //从组件的props属性中导入dispatch和一个变量
    const { dispatch,counter } = this.props;
    //渲染组件，包括一个数字，dispatch(action)
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={() => dispatch(increment())}>+</button>
        {' '}
        <button onClick={() => dispatch(decrement())}>-</button>
        {' '}
        <button onClick={() => dispatch(incrementIfOdd())}>Increment if odd </button>
        {' '}
        <button onClick={() => dispatch(incrementAsync())}>Increment async</button>
      </p>
    )
  }
}
//限制组件的props安全
Counter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  //counter必须为数字，且必须存在
  counter: PropTypes.number.isRequired
};

export default Counter
