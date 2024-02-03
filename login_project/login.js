const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById('login-form-submit');
const loginErrorMsg = document.getElementById("login-error-msg");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    //wyciagamy wartosci z formularza
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    //sprawdzamy czy sa poprawne
    if (username === "name" && password === "pass") {
        //jesli tak to wyswietlamy alert i odswiezamy strone
        alert("You have successfully logged in.");
        location.reload();
    } else {
        //jesli nie to wyswietlamy blad
        loginErrorMsg.style.opacity = 1;
    }
})