"use strict";

function buttonCheck() {
  const signInBtn = document.getElementById("signInBtn");
  const rememberCheckbox = document.getElementById("remember");

  if (rememberCheckbox.checked) {
    signInBtn.disabled = false;
  } else {
    signInBtn.disabled = true;
  }
}

const rememberCheckbox = document.getElementById("remember");
rememberCheckbox.addEventListener("change", buttonCheck);
