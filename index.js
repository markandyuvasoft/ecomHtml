import navbar from "./nav.js"
let productMain = document.getElementById("productMain")



let navs = navbar()

let main = document.getElementById("navMain")

main.innerHTML = navs



let localUser = JSON.parse(localStorage.getItem("userName"))

// let productList = JSON.parse(localStorage.getItem("productList"))


export async function getData(api) {

    let res = await fetch(api);

    let data = await res.json();
    console.log(data, "65559");


    return data;
}


displayProduct()

console.log(localUser);


let regisId = document.getElementById("registerId")
let logId = document.getElementById("loginId")
let userLogoId = document.getElementById("userId")
let cartId = document.getElementById("cartId")
let navChildThree = document.getElementById("navChildThree")


cartId.href = "../cart/cart.html"

let cartArray = JSON.parse(localStorage.getItem("AddCartData")) || []

// console.log(cartId,"dsaaaa");


// console.log(cartArray);


// console.log(userLogoId);



// console.log(regisId);

if (localUser === null) {
    cartId.innerHTML = null
}


if (localUser !== null) {
    regisId.innerHTML = null
    logId.innerHTML = null

    userLogoId.innerHTML = localUser                            //login user name show user icon logo ki jgh 


    let logout = document.createElement("button")
    logout.style.color = "white"

    logout.innerText = "Logout User"

    logout.addEventListener("click", outFun)

    function outFun() {
        // console.log("hello");

        localStorage.removeItem("userName")
        window.location.href = "../login/login.html"

    }

    navChildThree.append(logout)
}


export function displayProduct(data) {

    // let productMain = document.getElementById("productMain")
    console.log(data, "ssssss");

    data?.map((el) => {


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

    if (localUser !== null) {

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

    else {
        alert("firstly login then add to cart....")
    }

}