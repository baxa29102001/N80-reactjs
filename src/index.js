import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function isPalindrome(s) {
  // Your code will replace this placeholder return statement.
  // Tip: You may use the code template provided
  // in the two_pointers.js file

  let right = 0;
  let left = s.length - 1;

  for (let i = 0; i < s.length / 2; i++) {
    console.log("s[left - i]", s[left - i], "s[right + i]", s[right + i]);

    if (s[right + i] !== s[left - i]) {
      return false;
    }
  }

  return true;
}

// console.log(isPalindrome("RACEACAR"));
