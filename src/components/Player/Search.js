import React, {Component} from 'react'
import './search.css';


import axios from 'axios'
import {getPlayList} from "./actions";
import {connect} from "react-redux";



class Search extends Component {
  state = {
    query: '',
    results: []
  };

  getInfo = () => {
   this.props.getPlayList(this.state.query);
   console.log(this.props.search.searchPlayList);
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
          this.getInfo();

      }

    });

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

export default connect(mapStateToProps, {getPlayList})(Search);