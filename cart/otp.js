import navbar from "../nav.js"
let navs = navbar()
let main = document.getElementById("navMain")
main.innerHTML = navs


let otp = document.getElementById("otpId")

// otp.addEventListener("click", function () {

//     event.preventDefault()

//     window.location.href = "./success.html"
// })



let localUser = JSON.parse(localStorage.getItem("userName"))

let regisId = document.getElementById("registerId")
let logId = document.getElementById("loginId")
let cartId = document.getElementById("cartId")
let userLogoId = document.getElementById("userId")





cartId.href = "../cart/cart.html"

if (localUser !== null) {
    regisId.innerHTML = null
    regisId.style.display = "none"
    logId.innerHTML = null
    logId.style.display = "none"
    userLogoId.innerHTML = null
}



let form = document.querySelector("form")

form.addEventListener("submit", otpFun)

let array = JSON.parse(localStorage.getItem("RegisterUser"))



function otpFun(event) {
    event.preventDefault()
    
    let data = {
        otp: form.opId.value
    }


    let flag = false

    array.map((el) => {

        if (el.x == data.otp) {
            flag = true
        }
    })

    if (flag == true) {
        alert("correct otp")
        window.location.href = "./success.html"

    }

    else {
        alert("please correct otp")
    }


}