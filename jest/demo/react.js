/*
 * @Descripttion: react组件测试
 * @Author: tianxiangbing
 * @Date: 2020-04-28 11:42:39
 * @LastEditTime: 2020-04-28 15:39:18
 * @github: https://github.com/tianxiangbing
 */
import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dv:1}
    this.onClick = this.onClick.bind(this)
  }
  onClick(){
    this.setState({dv:this.state.dv+1});
  }
  render() {
    return <div onClick={this.onClick}>{+this.props.value + this.state.dv}</div>;
  }
}
