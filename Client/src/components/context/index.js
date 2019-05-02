import React from "react";
import reducer from "./reducer";

const Context = React.createContext({}); // {} is initial State ;

export class Provider extends React.Component {
  state = {
    isLoading: false,
    role: "",
    id: "",
    dispatch: action => this.setState(reducer(this.state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
