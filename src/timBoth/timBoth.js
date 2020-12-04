import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./../AuthChecker/authChecker";
import firebaseConfig from "./../firebaseconf/firebase";
import Timer from "./../tim/timerDesc";
import TimerMob from "./../tim/timMob";

export default function Timers() {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div>
        <Timer />
      </div>
      <div style={{ marginTop: " 100px" }}>
        <TimerMob />
      </div>
    </div>
  );
}
