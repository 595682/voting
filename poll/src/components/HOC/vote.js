import React, { Component } from "react";
import axios from "axios";
const PickContext = React.createContext();

class Vote extends Component {
  state = {
    comPicks: [],
    bauPicks: [],
    pplPicks: [],
    infraPicks: [],
    preName: "",
    name: ""
  };

  setPicks = e => {
    const optionName = e.target.name;
    const optionID = e.target.value;
    if (this.state[optionName].includes(optionID)) {
      console.log(optionName + "=>" + optionID, "remove");
      this.setState({
        ...this.state,
        [optionName]: this.state[optionName].filter(
          option => option !== optionID
        )
      });
    } else if (this.state[optionName].length < 3) {
      console.log(optionName + "=>" + optionID, "add");
      this.setState({
        ...this.state,
        [optionName]: [...this.state[optionName], optionID]
      });
    }
  };
  submit = () => {
    console.log(this.state);
    axios.post("http://localhost:8081/votePoll", this.state);
  };

  setName = e => {
    this.setState({
      ...this.state,
      preName: e.target.value
    });
  };
  login = () => {
    if (this.state.preName) {
      this.setState({
        ...this.state,
        name: this.state.preName
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <PickContext.Provider
        value={{
          state: this.state,
          actions: {
            setPicks: this.setPicks,
            submit: this.submit,
            setName: this.setName,
            login: this.login
          }
        }}
      >
        {this.props.children}
      </PickContext.Provider>
    );
  }
}

export default PickContext;
export { Vote };
