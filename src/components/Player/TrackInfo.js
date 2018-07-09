import React, {Component} from 'react';
import './trackInfo.css';
import PropTypes from 'prop-types';

function TrackInfo(props) {
  return (
    <div className={`song-info`}>
      <p className={`artist-name`}>{props.name}</p>
      <p className={`track-name`}>{props.title}</p>
    </div>
  );
}

export default TrackInfo;

TrackInfo.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string
};