var password = document.getElementById('pwd1');
var passwordConfirm = document.getElementById('pwd')
if (password.value != passwordConfirm.value) {
    passwordConfirm.innerHTML('Password does not match')
}