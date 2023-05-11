const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const bottomIcon = document.querySelector(".bottom-icon");
const inputs = document.querySelector("input");
const Name = document.querySelector(".input-Name");
const login = document.querySelector(".input-login");
const email = document.querySelector(".input-email");
const password = document.querySelector(".input-password");
const r_2 = document.querySelector(".remember-2");
function icon(){
    body.style.backgroundColor = white;
    inputs.style.backgroundColor = #224957;
    h1.style.color = #224957;
    p.style.color = #224957;
    r_2.style.color = #224957;
}

if (Name == "") {
    Name.style.backgroundColor = "red";
    document.Name.innerHTML = ("Bu file boş olmamalıdır");
}

if (login == "") {
    login.style.backgroundColor = "red";
    document.login.innerHTML = ("Bu file boş olmamalıdır");
}

if (email == "") {
    email.style.backgroundColor = "red";
    document.email.innerHTML = ("Bu file boş olmamalıdır");
}

if (password == "") {
    password.style.backgroundColor = "red";
    document.password.innerHTML = ("Bu file boş olmamalıdır");
}