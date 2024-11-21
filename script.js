function sendMail(){

let parms={

name : document.getElementById("name").value,
subject : document.getElementById("subject").value,
message : document.getElementById("message").value,
}
emailjs.send("service_xx8pfuv","template_212x6wk",parms).then(alert(Email Sent!!!))

}