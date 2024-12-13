import navbar from "../nav.js"

let navs = navbar()

// console.log(navs);

let main = document.getElementById("navMain")

main.innerHTML = navs

let form = document.querySelector("form")

form.addEventListener("submit", RegisterDetails)

let array = JSON.parse(localStorage.getItem("RegisterUser")) || []

function RegisterDetails(event) {

    let x = Math.floor((Math.random() * 10000) + 2);

    // console.log(x, 111111111111111111111);
    

    event.preventDefault()

    let data = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        x
    }

    array.push(data)

    //    console.log(array);
    localStorage.setItem("RegisterUser", JSON.stringify(array))

    alert("register success")

    window.location.href = '../login/login.html'
}




