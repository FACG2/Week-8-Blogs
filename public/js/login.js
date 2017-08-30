var username = document.getElementById('username');
var password = document.getElementById('password');
var validName = document.getElementById('validName');
var validPass = document.getElementById('validPass');

username.addEventListener('focusout', function () {
  if (username.value === '') {
    username.style.border = '1px solid red';
    validName.innerHTML = "<p style='color:red'>Please enter your username</p>";
  } else {
    username.style.border = '1px solid green';
    validName.innerHTML = ' ';
  }
});
password.addEventListener('focusout', function () {
  if (password.value === '') {
    password.style.border = '1px solid red';
    validPass.innerHTML = "<p style='color:red'>Please enter your password</p>";
  } else {
    password.style.border = '1px solid green';
    validPass.innerHTML = ' ';
  }
});
