let form = document.querySelector("form")

form.addEventListener("submit", RegisterDetails)

let array = JSON.parse(localStorage.getItem("RegisterUser")) ||  []

function RegisterDetails(event) {

    event.preventDefault()

   let data = {
    name : form.name.value,
    email : form.email.value,
    password : form.password.value
   }

   array.push(data)

//    console.log(array);
localStorage.setItem("RegisterUser", JSON.stringify(array))

alert("register success")

window.location.href = '../login/login.html'   
}




