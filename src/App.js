import React from "react";
import Voting from "./components/Voting/Voting";
import { firestore } from "./firebase/firebase.utils";
import { v1 as uuid } from "uuid";

import "./App.css";

function App() {
  //mockAuth is intended to be an authentication placeholder.
  //This allows firebase to remember who you are without having real auth in place.
  //Remove the mockAuth value from localStorage to begin as a new user.
  //Copy and paste mockAuth if you'd like to revisit that "acccount" after erasing.

  if (!localStorage.getItem("mockAuth")) {
    localStorage.setItem("mockAuth", uuid());
    firestore
      .collection("users")
      .doc(localStorage.getItem("mockAuth"))
      .set({
        id: localStorage.getItem("mockAuth"),
        votes: [],
      });
  }

  return (
    <div className="App">
      <Voting></Voting>
    </div>
  );
}

export default App;
