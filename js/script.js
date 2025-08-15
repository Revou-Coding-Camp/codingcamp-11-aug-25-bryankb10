function welcomeUser() {
  let userName = prompt("What's your name?");
  if (userName != "") {
    document.getElementById("user-greeting").textContent = userName;
  }
}

welcomeUser();