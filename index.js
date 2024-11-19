let localUser = JSON.parse(localStorage.getItem("userName"))

let productList = JSON.parse(localStorage.getItem("productList"))




displayProduct()
// console.log(localUser);


let regisId = document.getElementById("registerId")
let logId = document.getElementById("loginId")
let userLogoId = document.getElementById("userId")
let cartId = document.getElementById("cartId")


cartId.href = "./cart/cart.html"

let cartArray = JSON.parse(localStorage.getItem("AddCartData")) || []

// console.log(cartId,"dsaaaa");


// console.log(cartArray);


// console.log(userLogoId);

let navChildThree = document.getElementById("navChildThree")


// console.log(regisId);

if (localUser === null) {
    cartId.innerHTML = null
}


if (localUser !== null) {
    regisId.innerHTML = null
    logId.innerHTML = null

    userLogoId.innerHTML = localUser                            //login user name show user icon logo ki jgh 


    let logout = document.createElement("button")

    logout.innerText = "Logout User"

    logout.addEventListener("click", outFun)

    function outFun() {
        // console.log("hello");

        localStorage.removeItem("userName")
        window.location.href = "../login/login.html"

    }

    navChildThree.append(logout)
}


function displayProduct() {

    let productMain = document.getElementById("productMain")

    productList.map((el) => {


        let div = document.createElement("div")
        div.setAttribute("class", "productChild")

        let image = document.createElement("img")
        image.src = el.image
        image.setAttribute("class", "productImage")

        let title = document.createElement("h1")
        title.innerText = el.title

        let price = document.createElement("p")
        price.innerText = el.price


        let AddCardButton = document.createElement("button")
        AddCardButton.innerText = "Add to Cart"

        AddCardButton.addEventListener("click", function () {
            addToCart(el)
        })

        AddCardButton.setAttribute("class", "addCartButton")



        div.append(image, title, price, AddCardButton)

        productMain.append(div)
    })

}


function addToCart(data) {

    let flag = false

    console.log(data.id);

    cartArray.map((el) => {

        if (el.id === data.id) {
            flag = true
        }

    })

    if (flag == true) {
        alert("product is already added")
    }
    else {
        cartArray.push(data)
        localStorage.setItem("AddCartData", JSON.stringify(cartArray))
        alert("product is  added")
    }



}