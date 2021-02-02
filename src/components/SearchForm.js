import React from "react";
import "../App.less";
import { Redirect } from "react-router-dom";
import { Input } from "antd";

const { Search } = Input;

class SearchForm extends React.Component {
  state = {
    seachInput: undefined,
  };

  handleSearch = (value) => {
    console.log(value);
    this.setState({ seachInput: value });
    console.log(this.state.seachInput);
    // return <Redirect to={path}/>;
  };

  render() {
    console.log("render" + this.state.seachInput);
    return (
      <div id="TopSearch">
        <Search
          placeholder="Enter song or artist to search"
          onSearch={this.handleSearch}
          id="SearchForm"
        />
        {this.state.seachInput && this.state.seachInput.length > 0 && (
          <Redirect to={"/search/" + this.state.seachInput} />
        )}
      </div>
    );
  }
}

export default SearchForm;
