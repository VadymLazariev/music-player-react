import React, {Component} from 'react'
import './search.css';


import axios from 'axios'
import {getPlayList,setSearchValue} from "./actions";
import {connect} from "react-redux";



class Search extends Component {

  getInfo = () => {
   this.props.getPlayList(this.props.search.searchValue);
   console.log(this.props.search.searchPlayList);
  };

  handleInputChange = () => {
    this.props.setSearchValue(this.search.value);
    console.log('input value',this.props.search.searchValue);
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

export default connect(mapStateToProps, {getPlayList,setSearchValue})(Search);