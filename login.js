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

const bgImage = new Image();
bgImage.src = "background.jpg";
bgImage.onload = function () {
  // Once the image is loaded, add it to the body as the background
  document.body.style.backgroundImage = "url('background.jpg')";
  // Now load the rest of the HTML content
  loadHTMLContent();
};

function loadHTMLContent() {
  // Here you can add your HTML content dynamically
  const container = document.createElement("div");
  // container.className = "container";
  // Add your HTML content here
  container.classList.add("container");
  container.innerHTML = `
  <div class="form-box" id="form">
  <h1 id="title">Login</h1>
  <form id="loginForm">
    <div class="input-field" id="namefield">
      <i class="fa-solid fa-user"></i>
      <input
        type="text"
        placeholder="Username"
        id="username"
        name="username"
        autocomplete="off"
      />
    </div>
    <div class="input-field">
      <i class="fa-solid fa-lock"></i>
      <input
        type="password"
        placeholder="Password"
        id="password"
        name="password"
      />
    </div>
    <div class="btn-field">
      <button type="button" id="loginBtn">Login</button>
    </div>
  </form>
  <p class="Login">
    Don't have an account? <a href="index.html"> Register</a>
  </p>
</div>
            `;
  document.body.appendChild(container);
}
