

import navbar from "../nav.js";



let main = document.getElementById("navMain")

main.innerHTML =  navbar()




let localUser = JSON.parse(localStorage.getItem("userName"))

let regisId = document.getElementById("registerId")
let logId = document.getElementById("loginId")
let userLogoId = document.getElementById("userId")
let cartId = document.getElementById("cartId")
let navChildThree = document.getElementById("navChildThree")


cartId.href = "../cart/cart.html"


if (localUser !== null) {
    regisId.innerHTML = null
    logId.innerHTML = null

    userLogoId.innerHTML = localUser                            //login user name show user icon logo ki jgh 


    let logout = document.createElement("button")
    logout.style.color = "white"
    logout.style.height = "1px"


    logout.innerText = "Logout User"

    logout.addEventListener("click", outFun)

    function outFun() {
        // console.log("hello");

        localStorage.removeItem("userName")
        window.location.href = "../login/login.html"

    }

    navChildThree.append(logout)
}


// let jweApi = "https://fakestoreapi.com/products/category/electronics"


let mensApi = "https://dummyjson.com/products/category/mens-shirts"



import { getData } from "../index.js";
import { displayProduct } from "../index.js";


let jewData = await getData(mensApi)

displayProduct(jewData)