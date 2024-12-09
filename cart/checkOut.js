import navbar from "../nav.js"
let navs = navbar()
let main = document.getElementById("navMain")
main.innerHTML = navs


let localUser = JSON.parse(localStorage.getItem("userName"))

let regisId = document.getElementById("registerId")
let logId = document.getElementById("loginId")
let cartId = document.getElementById("cartId")
let likeId = document.getElementById("likeId")
let userLogoId = document.getElementById("userId")
let srchId = document.getElementById("srchId")





cartId.href = "../cart/cart.html"

if (localUser !== null) {
    regisId.innerHTML = null
    logId.innerHTML = null
    userLogoId.innerHTML = null
    // likeId.innerHTML = null
    // srchId.innerHTML = null

}



let btnCheckout = document.getElementById("btnCheckout")

btnCheckout.addEventListener("click", function () {

    event.preventDefault()

    window.location.href = "./otp.html"
})

let cardData = JSON.parse(localStorage.getItem("AddCartData")) || []

let TotalAmout = JSON.parse(localStorage.getItem("TotalAmout")) 

console.log(cardData);


let proName = document.getElementById("proName")

// let quan = document.getElementById("quan")

let tol = document.getElementById("tol")



let titles = cardData.map((el) => el.title)


// proName.innerText = "Product Name =" + " " + titles; 
proName.innerText = "Product Name :\n\n" + titles.join("\n" +"\n");

tol.innerText = "Total Amount" + " " + ":" + " " +  Math.floor(TotalAmout) + "₹"

btnCheckout.innerText = Math.floor(TotalAmout) + "₹"