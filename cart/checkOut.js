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