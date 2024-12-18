import navbar from "../nav.js";

let main = document.getElementById("navMain")

let extraProductMain = document.getElementById("womenMain")







main.innerHTML = navbar()

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

// let api = "https://dummyjson.com/products/category/womens-dresses"

export async function getData(api) {

    let data = await fetch(api)

    let result = await data.json()

    // console.log(result);

    // display(result)

    return result

}



export function display(result) {

    result.products.map((el) => {

        let div = document.createElement("div")
        div.setAttribute("class", "productChild")


        let h1 = document.createElement("h1")

        h1.innerText = el.title

        let p = document.createElement("p")
        p.innerText = el.price

        let img = document.createElement("img")
        img.setAttribute("class", "productImage")


        img.src = el.images[0]


        extraProductMain.append(div)

        div.append(img, h1, p)
    })
}




