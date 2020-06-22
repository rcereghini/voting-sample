import React from "react";
import Voting from "./components/Voting/Voting";
import { firestore } from "./firebase/firebase.utils";
import { v1 as uuid } from "uuid";

import "./App.css";

function App() {
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
