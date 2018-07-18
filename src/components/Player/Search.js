import React, {Component} from 'react'
import './search.css';
import {getPlayList, setSearchValue} from "../../actions/palyer";
import {connect} from "react-redux";


class Search extends Component {

  getInfo = () => {
    this.props.getPlayList(this.props.search.searchValue);
  };

  handleInputChange = () => {
    this.props.setSearchValue(this.search.value);
    if (this.props.search.searchValue && this.props.search.searchValue.length > 1) {
      this.getInfo();
    }

  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}

const mapStateToProps = store => {
  return {
    search: store.search
  };
};


export default connect(mapStateToProps, {getPlayList, setSearchValue})(Search);