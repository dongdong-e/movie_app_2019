import React from "react";
// import PropTypes from "prop-types";

// React는 자동으로 class component의 render method를 실행함
// class component는 class이지만 react component에서 확장 -> 스크린에 표시하기 위해서는 render 활용
class App extends React.Component {
  // state는 object
  state = {
    count: 0
  };

  // state를 변경해주기 위해서는 setState를 활용해 render()을 호출함
  // call setState, react is going to re-render!
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  // componentWillUnmount(): component가 떠날 때 호출, 페이지 이동 등
  componentWillUnmount() {
    console.log("Goobye, cruel world.");
  }

  // function(): 함수 바로 실행, function: 클릭할 때만 실행
  // function이 아니기 때문에 return이 적용되지 않음 -> render
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("I just updated.");
  }
}

export default App;
