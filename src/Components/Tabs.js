import React from "react";

class Tabs extends React.Component {
  state = { showDeleteOption: "hidden" };

  delete = (e, val) => {
    e.preventDefault();
    this.props.delete(val);
  };

  render() {
    return (
      <div
        className="tab"
        onMouseEnter={() => this.setState({ showDeleteOption: "" })}
        onMouseLeave={() => this.setState({ showDeleteOption: "hidden" })}
      >
        <div className="tabName">
          <h2>Tab {this.props.data}</h2>
        </div>
        <div style={{ visibility: this.state.showDeleteOption }}>
          <i
            class="fas fa-times-circle fa-2x arrow delete"
            onClick={(e) => this.delete(e, this.props.data)}
          ></i>
        </div>
      </div>
    );
  }
}

export default Tabs;
