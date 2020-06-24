import React from "react";
import { firestore } from "../../firebase/firebase.utils";
import "./votingTable.css";

const VotingTable = (props) => {
  const addVoteToColor = (color) => {
    let checkVoteDuplicate = false;
    props.userVotes.forEach((vote) => {
      if (vote === color.id) checkVoteDuplicate = true;
    });
    if (props.userVotes.length <= 2) {
      if (!checkVoteDuplicate) {
        firestore
          .collection("colors")
          .doc(color.id)
          .set({
            votes: color.votes++,
            ...color,
          });
        let votes = props.userVotes ? [...props.userVotes] : [];
        votes.push(color.id);
        firestore
          .collection("users")
          .doc(localStorage.getItem("mockAuth"))
          .set({ votes: votes });
      } else {
        alert("You've already voted for that color!");
      }
    } else {
      alert("You have used your three votes!");
    }
  };

  return (
    <div className="voting-table">
      <div className="voting-table-header">
        <h2>Available Items</h2>
        <p id="votingItemCount" className="voting-table-header-count">
          {props.colorsLength}
        </p>
      </div>
      <div id="votingRowContainer" className="voting-table-row-container">
        {props.colors.map((color, i) => {
          return (
            <div key={color.id}>
              <button
                className="add-vote-button"
                onClick={() => addVoteToColor(color)}
              >
                +
              </button>
              <p className="available-item-name">{color.name}</p>
              <p className="available-item-vote-count">{color.votes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VotingTable;
