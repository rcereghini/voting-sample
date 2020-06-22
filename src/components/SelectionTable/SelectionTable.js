import React from "react";
import "./selectionTable.css";

const SelectionTable = (props) => {
  const sortArrayOfObjectsByFieldDescending = (array, field) => {
    return [...array].sort((a, b) =>
      a[field] < b[field] ? 1 : b[field] < a[field] ? -1 : 0
    );
  };

  let userColors = [];
  props.userVotes.forEach((vote) => {
    props.colors.forEach((color) => {
      if (color.id === vote) {
        userColors.push(color);
      }
    });
  });

  let sortedUserColors = sortArrayOfObjectsByFieldDescending(
    userColors,
    "name"
  ).reverse();

  return (
    <div className="selection-table">
      <div className="selection-table-header">
        <h2>Selection</h2>
        <p id="selectionTableCount" className="selection-table-header-count">
          {props.userVotes.length}
        </p>
      </div>
      <div id="selectedItemRowContainer">
        {sortedUserColors.map((color, i) => {
          return (
            <div className="selected-item-row" key={i}>
              <p className="selected-item-name">{color.name}</p>
              <p className="selected-item-vote-count">{color.votes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectionTable;
