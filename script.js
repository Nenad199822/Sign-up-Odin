function validatePassword() {
    var password = document.getElementById('pwd1').value;
    var confirmPassword = document.getElementById('confirm-pwd').value
    if (password !== confirmPassword) {
        alert('Passwords does not match')
        return false
    }
    return true;
}
validatePassword();