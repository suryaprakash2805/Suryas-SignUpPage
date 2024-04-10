document.addEventListener("DOMContentLoaded", function () {
  const registerBtn = document.getElementById("registerBtn");
  let data = [];
  registerBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    // Validate username (should be all lowercase and no spaces)
    const usernameRegex = /^[a-z0-9]+$/;

    if (username === "" || email === "" || password === "") {
      alert("Please fill out the form");
      return;
    }
    if (!usernameRegex.test(username)) {
      alert("Please enter a valid Username.");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password (should be at least 8 characters long)
    if (password.length < 8) {
      alert("Password should be at least 8 characters long.");
      return;
    }

    function add() {
      let name = username;
      let mail = email;
      let pass = password;
      let datas = {
        name: name,
        email: mail,
        password: pass,
      };
      data.push(datas);
      localStorage.setItem("datas", JSON.stringify(data));
    }
    add();
    let val = localStorage.getItem("datas");
    console.log(JSON.parse(val));
    // If all inputs are valid, redirect to login.html
    window.location.href = "login.html";
  });
});
