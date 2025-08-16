function welcomeUser() {
  let userName = prompt("What's your name?");
  if (userName != "") {
    document.getElementById("user-greeting").textContent = userName;
  }
}

function updateTime() {
  const now = new Date();
  document.getElementById("currentTime").textContent = now.toString();
}

welcomeUser();
updateTime();
setInterval(updateTime, 1000);


document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("message").value.trim();

  document.getElementById("outputName").textContent = name || "-";
  document.getElementById("outputDob").textContent = dob || "-";
  document.getElementById("outputGender").textContent = gender || "-";
  document.getElementById("outputMessage").textContent = message || "-";
});