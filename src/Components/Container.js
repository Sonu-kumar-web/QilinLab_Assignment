import React from "react";

import Tab from "./Tabs";

class Container extends React.Component {
  state = {
    tabs: [1, 2, 3],
    showTabs: [1, 2, 3],
    backKey: "hidden",
    forwardKey: "",
  };

  // To move backward
  forward = (e) => {
    if (this.state.tabs.length == 3) {
      return;
    }
    e.preventDefault();
    let arr = [];
    let value = this.state.showTabs[0];
    if (value < this.state.tabs.length - 2) {
      for (let i = 0; i < 3; i++) {
        value++;
        arr.push(value);
      }
      this.setState({ showTabs: arr });
    }
    if (this.state.showTabs[0] === 1) {
      this.setState({ backKey: "" });
    } else {
      this.setState({ backKey: "" });
    }

    if (this.state.showTabs[0] === 7) {
      this.setState({ backKey: "", forwardKey: "hidden" });
    }
  };

  // To move backward
  backward = (e) => {
    e.preventDefault();
    let arr = this.state.showTabs;
    let finalArr = [];
    let value = this.state.showTabs[0];
    if (value > 1) {
      for (let i = 0; i < 3; i++) {
        let val = arr[i] - 1;
        finalArr.push(val);
      }
      this.setState({ showTabs: finalArr });
    }

    if (this.state.showTabs[0] === 2) {
      this.setState({ backKey: "hidden", forwardKey: "" });
    } else {
      this.setState({ backKey: "", forwardKey: "" });
    }
  };

  // To Add new Tab
  plus = () => {
    if (this.state.tabs.length < 10) {
      let newTab = this.state.tabs.length + 1;
      this.setState({ tabs: [...this.state.tabs, newTab] });
    }
  };

  // To delete
  delete = (val) => {
    if (this.state.tabs.length == 3) {
      return;
    }
    let arrTotal = [];
    let arrShow = [];
    this.state.tabs.map((data) => {
      if (data !== val) {
        arrTotal.push(data);
      }
    });
    let show = this.state.showTabs[0];
    for (let i = 0; i < this.state.tabs.length; i++) {
      if (show == this.state.tabs[i]) {
        for (let j = 0; j < 3; j++) {
          let k = i + j;
          arrShow.push(this.state.tabs[k]);
        }
        break;
      }
    }
    console.log("Show", arrShow);
    this.setState({ tabs: arrTotal, showTabs: arrShow });
  };

  render() {
    return (
      <div className="container">
        <i
          class="fas fa-chevron-left fa-5x arrow"
          onClick={(e) => this.backward(e)}
          style={{ visibility: this.state.backKey }}
        ></i>
        {this.state.showTabs.map((val) => {
          return <Tab data={val} delete={this.delete} />;
        })}
        <i
          class="fas fa-chevron-right fa-5x arrow"
          onClick={(e) => this.forward(e)}
          style={{ visibility: this.state.forwardKey }}
        ></i>
        <i
          class="fas fa-plus-square fa-5x arrow "
          onClick={(e) => this.plus(e)}
        ></i>
      </div>
    );
  }
}

export default Container;
