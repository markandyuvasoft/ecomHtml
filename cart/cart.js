import navbar from "../nav.js"

let navs = navbar()

console.log(navs);

let main = document.getElementById("navMain")

main.innerHTML = navs


let localUser = JSON.parse(localStorage.getItem("userName"))

let productList = JSON.parse(localStorage.getItem("productList"))



let cartArray = JSON.parse(localStorage.getItem("AddCartData")) || []


let total = 0 






displayProduct()


let regisId = document.getElementById("registerId")
let logId = document.getElementById("loginId")
let userLogoId = document.getElementById("userId")
let cartId = document.getElementById("cartId")
cartId.href = "../cart/cart.html"




let navChildThree = document.getElementById("navChildThree")



if (localUser === null) {
    cartId.innerHTML = null
}


if (localUser !== null) {
    regisId.innerHTML = null
    regisId.style.display = "none"
    logId.innerHTML = null
    logId.style.display = "none"
    
    cartId.innerText = "Total" + " =" + Math.floor(total)

    console.log(total);

    localStorage.setItem("TotalAmout", JSON.stringify(total))
    


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


function displayProduct() {

    let productMain = document.getElementById("productMains")



    cartArray.map((el, index) => {

        console.log(el);



        let div = document.createElement("div")
        div.setAttribute("class", "productChild")

        let image = document.createElement("img")
        image.src = el.images[0]
        image.setAttribute("class", "productImage")

        let title = document.createElement("h1")
        title.innerText = el.title


        let quantity = document.createElement("h3")

        quantity.innerText = el.quantity || 1


        let price = document.createElement("p")

        price.innerText = el.price


        // console.log(price, 1111);


        if(el.quantity) {   
            total = total + el.price * el.quantity
        }
        else {
            total = total + el.price 

        }





        let CheckOutCardButton = document.createElement("button")
        CheckOutCardButton.innerText = "CheckOut"

        let RemoveItem = document.createElement("button")
        RemoveItem.innerText = "RemoveItem"

        CheckOutCardButton.addEventListener("click", function () {
            CheckOutFun(el)
        })

        CheckOutCardButton.setAttribute("class", "addCartButton")
        RemoveItem.setAttribute("class", "addCartButton")
        
        // RemoveItem.style.marginLeft = "70px"

        RemoveItem.addEventListener("click", function () {
            removeFun(index)
            window.location.href = "../cart/cart.html"
        })

        let increBtn = document.createElement("button")
        increBtn.innerText = "Increment"
        increBtn.setAttribute("class", "addCartButton")


        increBtn.addEventListener("click", function () {
            increFun(quantity, el, index, price)
        })

        let decBtn = document.createElement("button")
        decBtn.innerText = "Decrement"
        decBtn.setAttribute("class", "addCartButton")

        // decBtn.style.marginLeft = "70px"

        decBtn.addEventListener("click", function () {
            decFun(quantity, el, index, price)
        })






        div.append(image, title, price, CheckOutCardButton, RemoveItem, increBtn, decBtn, quantity)
        productMain.append(div)
    })

}


function removeFun(indexData) {

    // console.log(indexData);
    cartArray.splice(indexData, 1)

    localStorage.setItem("AddCartData", JSON.stringify(cartArray))
}

function increFun(quantity, el, index, price) {


    el.quantity = (el.quantity || 1) + 1

    cartArray[index] = el

    localStorage.setItem("AddCartData", JSON.stringify(cartArray))

    quantity.innerText = el.quantity

      window.location.href = "./cart.html"

    //   price.innerText = el.price * el.quantity // cart me he price update karne ke ley


}

function decFun(quantity, el, index, price) {

    if(el.quantity > 1) {

        
        el.quantity--
        
        cartArray[index] = el
        
        localStorage.setItem("AddCartData", JSON.stringify(cartArray))
        
        quantity.innerText = el.quantity
        
        window.location.href = "./cart.html"
    }
    
    
        //   price.innerText = el.price * el.quantity // cart me he price update karne ke ley
  

}




function CheckOutFun() {

    window.location.href = "../cart/checkOut.html"
}


