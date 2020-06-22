import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase.utils";
import VotingHeader from "../VotingHeader/VotingHeader";
import VotingTable from "../VotingTable/VotingTable";
import SelectionTable from "../SelectionTable/SelectionTable";
import "./voting.css";

const Voting = () => {
  const [colors, setColors] = useState([]);
  const [colorsLength, setColorsLength] = useState(0);
  const [userVotes, setUserVotes] = useState([]);
  const [userVoteCount, setUserVoteCount] = useState(0);

  useEffect(() => {
    let colors = [];
    setColors(colors);
    if (localStorage.getItem("mockAuth"))
      firestore
        .collection("users")
        .doc(localStorage.getItem("mockAuth"))
        .onSnapshot((doc) => {
          setUserVotes(doc.data().votes);
          setUserVoteCount(doc.data().votes.length);
        });

    firestore
      .collection("colors")
      .where("votes", ">=", 0)
      .orderBy("votes", "desc")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          colors.push(doc.data());
          setColors(colors);
          setColorsLength(colors.length);
        });
        colors = [];
      });
  }, []);

  return (
    <div id="voting" className="">
      <div className="voting">
        <VotingHeader userVoteCount={userVoteCount}></VotingHeader>
        <div className="voting-tables-container">
          <VotingTable
            colors={colors}
            colorsLength={colorsLength}
            userVotes={userVotes}
          ></VotingTable>
          <SelectionTable
            colors={colors}
            userVotes={userVotes}
          ></SelectionTable>
        </div>
      </div>
    </div>
  );
};

export default Voting;
