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
    regisId.style.display = "none"
    logId.innerHTML = null
    logId.style.display = "none"
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


// let proName = document.getElementById("proName")

// let warranty = document.getElementById("warranty")

// let tol = document.getElementById("tol")



// let titles = cardData.map((el) => el.title)


// proName.innerText = "Product Name : " + titles.join("\n" +"\n");

// tol.innerText = "Total Amount" + " " + ":" + " " +  Math.floor(TotalAmout) + "₹"

// btnCheckout.innerText = Math.floor(TotalAmout) + "₹"





let div = document.getElementById("div")

let tol = document.getElementById("tol")

let imagesHeaderMain = document.getElementById("imagesHeaderMain")


let extra = document.getElementById("extra")



let mainBtnDiv = document.getElementById('mainBtnDiv')




let details = cardData.map((el) => {
    // console.log(el.title, 12);

    let productTile = document.createElement("h1")

    let productWarty = document.createElement("h1")

    let productPrice = document.createElement("p")

    let productImgDiv = document.createElement("div")

    let productImg = document.createElement("img")
    productImg.setAttribute("class", "checkoutProductImg")

    productImg.addEventListener("click", ()=> {

        showImgFun(el)
    })

    productTile.innerText = "Product Name : " + el.title

    productWarty.innerText = "Warranty : " + el.warrantyInformation

    productPrice.innerText = "price : " + el.price

    // productImg.src = el.images[0]

    let proimg = el.images


    // console.log(proimg, "proimages");

    proimg.map((el) => {
        productImg.src = el
    })

    productImgDiv.append(productImg)

    div.append(productImgDiv, productTile, productWarty, productPrice)
})


function showImgFun (id) {


    let proimg2 = id.images

    let imagesContainer = document.createElement("div");
    imagesContainer.setAttribute("class", "images-container");

    let showImges = document.createElement("img")


    showImges.src = proimg2[0];

    imagesHeaderMain.append(showImges);


    proimg2.map((el, index) => {


    // console.log(el, 122222);
        

    let imageposter = document.createElement("img") 
    
    imageposter.src = el

    imageposter.setAttribute("class", "checkoutImageBtn")

    imageposter.addEventListener("click", (e)=> {
        
        e.preventDefault()

            showImges.src = proimg2[index];
            
        })
        imagesContainer.append(imageposter);

        // mainBtnDiv.append(button)
    })

    imagesHeaderMain.append(imagesContainer);

    // extra.append(imagesHeaderMain)

}









tol.innerText = "Total Amount" + " " + ":" + " " +  Math.floor(TotalAmout) + "₹"

btnCheckout.innerText = Math.floor(TotalAmout) + "₹"

