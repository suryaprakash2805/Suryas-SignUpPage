const bgImage = new Image();
bgImage.src = "background.jpg";
bgImage.onload = function () {
  document.body.style.backgroundImage = "url('background.jpg')";
  loadHTMLContent();
};

function loadHTMLContent() {
  const container = document.createElement("div");
  container.innerHTML = `
  <div class="form-box" id="form">
  <h1 id="title">Register</h1>
  <form class="input-group" id="registerForm">
    <div class="input-field" id="namefield">
      <i class="fa-solid fa-user"></i>
      <input
        type="text"
        placeholder="Username"
        id="username"
        autocomplete="off"
      />
    </div>
    <div class="input-field">
      <i class="fa-solid fa-envelope"></i>
      <input
        type="email"
        placeholder="Email"
        id="email"
        autocomplete="off"
      />
    </div>
    <div class="input-field">
      <i class="fa-solid fa-lock"></i>
      <input type="password" placeholder="Password" id="password" />
    </div>
    <div class="btn-field">
      <button type="button" id="registerBtn">Register</button>
    </div>
  </form>
  <p class="Login">
    Already have an account?<a href="login.html"> Login</a>
  </p>
  <footer>
    © Copyright by
    <a
      href="https://www.linkedin.com/in/suryaprakash2805"
      class="copyright"
      >Surya Prakash</a
    >
  </footer>
</div>
            `;
  document.body.appendChild(container);

  const registerBtn = document.getElementById("registerBtn");
  let data = [];
  registerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("click");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    const usernameRegex = /^[a-z0-9]+$/;

    if (username === "" || email === "" || password === "") {
      alert("Please fill out the form.");
      return;
    }
    if (!usernameRegex.test(username)) {
      alert(
        "Username should be in lowercase letters and include numbers with no spacing."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

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
    window.location.href = "login.html";
  });
}
