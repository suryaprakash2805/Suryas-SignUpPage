document.addEventListener("DOMContentLoaded", function () {
  const username = document.querySelector(".username");
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");

  const data = localStorage.getItem("datas");

  const val = JSON.parse(data);

  username.value = val[0].name;
  email.value = val[0].email;
  password.value = val[0].password;
});
