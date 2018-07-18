import React from 'react';
import './searchList.css';
import PropTypes from 'prop-types';
import SearchListItem from "./SearchItem";


function SearchList(props) {
  const {playlist, tracks, handleAddOnClick, isSearch} = props;

  return (
    <div className={isSearch ? `searchList-container` : `hide`}>
      <div className="searchList">
        <ul>
          {
            tracks.map((track, index) => (
              <SearchListItem
                playlist={playlist}
                index={index}
                key={track.id}
                id={track.id}
                title_short={track.title}
                duration={track.duration}
                onClickAdd={() => {
                  handleAddOnClick(track)
                }}
                clickHandler={() => {
                }}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

SearchList.propTypes = {
  handleClick: PropTypes.func,
  currentSongIndex: PropTypes.number,
  tracks: PropTypes.array,
  isSelected: PropTypes.bool
};

export default SearchList;