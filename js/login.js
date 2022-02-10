document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if (userEmail == '@bap.beta' && userPassword == '1234') {
        window.location.href = 'banking.html';
    }
})



