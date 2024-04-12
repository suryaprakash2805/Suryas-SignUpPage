document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "" || password === "") {
      alert("Please fill out the form.");
      return;
    }

    const data = localStorage.getItem("datas");
    if (!data) {
      alert("No user data found, Please register first.");
      return;
    }

    const val = JSON.parse(data);

    const foundUser = val.find(
      (user) => user.name === username && user.password === password
    );

    if (foundUser) {
      window.location.href = "profile.html";
    } else if (val[0].name !== username && val[0].password !== password) {
      alert("No user data found. Please register first.");
    } else {
      alert("Please enter a valid username or password.");
    }
  });
});
