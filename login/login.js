import navbar from "../nav.js"

let navs = navbar()

// console.log(navs);

let main = document.getElementById("navMain")

main.innerHTML = navs


let form = document.querySelector("form")

form.addEventListener("submit", RegisterDetails)

let array = JSON.parse(localStorage.getItem("RegisterUser"))

function RegisterDetails(event) {

    event.preventDefault()


    let data = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value
    }

    let flag = false

    array.map((el) => {

        if (el.email == data.email) {

            if (el.password == data.password) {
                flag = true

                localStorage.setItem("userName", JSON.stringify(el.name))
            }
            else {
                flag = "wrong"
            }
        }
    })

    if (flag == true) {
        alert("login")
        window.location.href = "../index.html"
    }
    else if (flag == "wrong") {
        alert("wrong password")
    }

    else {
        alert("login failed")
    }

}



