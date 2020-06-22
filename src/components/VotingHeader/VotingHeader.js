import React from "react";
import "./votingHeader.css";

const VotingHeader = (props) => {
  const TOTAL_VOTES = 3;
  return (
    <div className="voting-header-section">
      <h2 className="voting-header-title">Favorite Color Voting</h2>
      <p className="voting-header-subtitle">Choose your favorite colors!</p>
      <p className="">
        <span id="voteRemainingCount">{TOTAL_VOTES - props.userVoteCount}</span>{" "}
        Votes Remaining
      </p>
    </div>
  );
};

export default VotingHeader;
